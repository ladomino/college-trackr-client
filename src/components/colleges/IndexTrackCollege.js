import React, { useState, useEffect } from 'react'
import { getAllColleges } from '../../api/college'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { indexTrackCollegeSuccess, indexTrackCollegeFailure } from '../shared/AutoDismissAlert/messages'
import BootTrackedTable from '../shared/BootTrackedTable.js'
import CreateCollegeModal from './CreateCollegeModal'

const IndexTrackCollege = (props) => {

    console.log("INSIDE INDEX TRACK COLLEGE")

    const [colleges, setColleges] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const { user, msgAlert } = props

    console.log("IndexCollege: user: ", user)

    useEffect(() => {
        getAllColleges(user)
            .then(res => {
                setColleges(res.data.colleges)
                // console.log("res.data", res.data);
                // console.log("IndexTrackCollege: colleges: ", colleges)
            })
            .then(() => {
                msgAlert({
                    heading: 'Tracked colleges have been retrieved!',
                    message: indexTrackCollegeSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Failed to retrieve tracked colleges!',
                    message: indexTrackCollegeFailure,
                    variant: 'danger',
                })
            })
    }, [])

    if (!colleges) {
        return <p>Loading ...</p>
    } else if (colleges.length === 0) {
        return <p>No tracked colleges yet, go add some</p>
    }

    return (
        <>
            <div>
                <div className="content" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button className="custom-btn" onClick={() => setModalOpen(true)}>
                New College
                </Button>
                </div>
                <BootTrackedTable itemArray={colleges}/>
                 <a href="#top"><Button variant='dark'>Back to Top of Page</Button></a>
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

export default IndexTrackCollege

