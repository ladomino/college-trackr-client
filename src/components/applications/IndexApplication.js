import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BootApplicationTable from '../shared/BootApplicationTable.js'
import { indexApplicationSuccess, indexApplicationFailure } from '../shared/AutoDismissAlert/messages'
import { getAllApplications } from '../../api/application'
import CreateApplicationModal from './CreateApplicationModal'

const IndexApplication = (props) => {

    console.log("INSIDE INDEX APPLICATION")

    const [applications, setApplications] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const { user, msgAlert } = props

    console.log("IndexApplication: user: ", user)

    useEffect(() => {
        getAllApplications(user)
            .then(res => {
                setApplications(res.data.applications)
                // console.log("res.data", res.data);
                // console.log("IndexApplications: applications: ", applications)
            })
            .then(() => {
                msgAlert({
                    heading: 'Applications have been retrieved!',
                    message: indexApplicationSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Failed to retrieve applications!',
                    message: indexApplicationFailure,
                    variant: 'danger',
                })
            })
    }, [])

    if (!applications) {
        return <p>Loading ...</p>
    } else if (applications.length === 0) {
        return <p>No applications yet, go add some</p>
    }

    return (
        <>
            <div>
                 <div className="content" style={{display: 'flex', justifyContent: 'flex-end'}} >
                    <Button className="custom-btn" onClick={() => setModalOpen(true)}>
                    New Application
                    </Button>
                 </div>
                <BootApplicationTable itemArray={applications}/>
                 <a href="#top"><Button variant='dark'>Back to Top of Page</Button></a>
            </div>
            <CreateApplicationModal
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default IndexApplication