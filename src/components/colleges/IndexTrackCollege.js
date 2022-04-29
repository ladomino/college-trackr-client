import React, { useState, useEffect } from 'react'
import { getAllColleges } from '../../api/college'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { indexTrackCollegeSuccess, indexTrackCollegeFailure } from '../shared/AutoDismissAlert/messages'
import BootTable from '../shared/BootTable.js'

const IndexTrackCollege = (props) => {

    console.log("INSIDE INDEX TRACK COLLEGE")

    const [colleges, setColleges] = useState(null)
    const { user, msgAlert } = props

    console.log("IndexCollege: user: ", user)

    useEffect(() => {
        getAllColleges(user)
            .then(res => {
                setColleges(res.data.colleges)
                // console.log("res.data", res.data);
                // console.log("IndexPlace: places: ", places)
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
                <BootTable itemArray={colleges}/>
                 <a href="#top"><Button variant='dark'>Back to Top of Page</Button></a>
            </div>
        </>
    )
}

export default IndexTrackCollege

