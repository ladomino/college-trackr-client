import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BootTrackOneTable from '../shared/BootTrackOneTable.js'
import { indexCollegeSuccess, indexCollegeFailure } from '../shared/AutoDismissAlert/messages'
import { getAllUntrackedColleges } from '../../api/college'
import CreateCollegeModal from './CreateCollegeModal'

// THIS GETS ALL UNTRACKED Colleges
const IndexCollege = (props) => {

    console.log("INSIDE INDEX COLLEGE")

    const [colleges, setColleges] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const { user, msgAlert } = props

    console.log("IndexCollege: user: ", user)

    useEffect(() => {
        getAllUntrackedColleges(user)
            .then(res => {
                setColleges(res.data.colleges)
                // console.log("res.data", res.data);
                // console.log("IndexColleges: colleges: ", colleges)
            })
            .then(() => {
                msgAlert({
                    heading: 'Untracked colleges have been retrieved!',
                    message: indexCollegeSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Failed to retrieve untracked colleges!',
                    message: indexCollegeFailure,
                    variant: 'danger',
                })
            })
    }, [])

    if (!colleges) {
        return <p>Loading ...</p>
    } else if (colleges.length === 0) {
        return <p>No untracked colleges yet, go add some</p>
    }

    return (
        <>
            <div>
                 <div className="content" style={{display: 'flex', justifyContent: 'flex-end'}} >
                    <Button className="custom-btn" onClick={() => setModalOpen(true)}>
                    New College
                    </Button>
                 </div>
                <BootTrackOneTable user={user} msgAlert={msgAlert} itemArray={colleges}/>
            </div>
            <CreateCollegeModal
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default IndexCollege

