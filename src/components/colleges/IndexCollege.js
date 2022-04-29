import React, { useState, useEffect } from 'react'
import { getAllUntrackedColleges } from '../../api/college'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { indexCollegeSuccess, indexCollegeFailure } from '../shared/AutoDismissAlert/messages'
import BootTable from '../shared/BootTable.js'

const IndexCollege = (props) => {

    console.log("INSIDE INDEX COLLEGE")

    const [colleges, setColleges] = useState(null)
    const { user, msgAlert } = props

    console.log("IndexCollege: user: ", user)

    useEffect(() => {
        getAllUntrackedColleges(user)
            .then(res => {
                setColleges(res.data.colleges)
                // console.log("res.data", res.data);
                // console.log("IndexPlace: places: ", places)
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
                <BootTable itemArray={colleges}/>
                 <a href="#top"><Button variant='dark'>Back to Top of Page</Button></a>
            </div>
        </>
    )
}

export default IndexCollege

