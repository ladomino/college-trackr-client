import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { showApplicationSuccess, showApplicationFailure } from '../shared/AutoDismissAlert/messages'
import { getOneApplication, updateApplication } from '../../api/application'
import EditApplicationModal from './EditApplicationModal'
import { removeApplicationSuccess, removeApplicationFailure } from '../shared/AutoDismissAlert/messages'
import { removeApplication } from '../../api/application'


const ShowApplication = (props) => {

    console.log("INSIDE SHOW APPLICATION")

    const [application, setApplication] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()
    
    // Setup user and appId from params
    const { user, msgAlert } = props
    const { appId } = useParams()

    console.log("ShowApplication: user: ", user)
    console.log("AppId", appId)

    useEffect(() => {
        console.log("HELLO")
        getOneApplication(user, appId)
            .then(res => {
                setApplication(res.data.application)
                console.log("res.data", res.data);
                console.log("ShowApplications: application: ", application)
            })
            .then(() => {
                msgAlert({
                    heading: 'Application has been retrieved!',
                    message: showApplicationSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Failed to retrieve applications!',
                    message: showApplicationFailure,
                    variant: 'danger',
                })
            })
    }, [updated])

    const removeSpecificApplication = (id) => {
        // console.log("removeApplication")
    
          removeApplication(user, id)
              .then(() => {
                  msgAlert({
                      heading: 'The application has been removed!',
                      message: removeApplicationSuccess,
                      variant: 'success',
                  })
              })
              .then(() => { navigate(`/collegetkr/apps/`) })
              .catch(() => {
                  msgAlert({
                      heading: 'Application deletion failed.',
                      message: removeApplicationFailure,
                      variant: 'danger',
                  })
              })
    }

    if (!application) {
        return <p>loading...</p>
    } else if (application.length === 0) {
        return <p>No application here</p>
    }


    return (
        <>
            <div>
                <h2>Application</h2>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Application Name</th>
                    <th>Application Link</th>
                    <th>Edit Application</th>
                    <th>Delete Application</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{application.name}</td>
                    <td><a href={application.link} target="_blank">Your Application</a></td>
                    <td>
                    <Button className='m-2 btn btn-dark' onClick={() => setModalOpen(true)}>
                        Edit
                    </Button>
                    </td>
                    <td>
                     <Button onClick={() => removeSpecificApplication(application.id)} className='btn btn-dark'>Delete</Button>
                    </td>
                    </tr>
                </tbody>
                </Table>
            </div>
            <EditApplicationModal
                application={application}
                show={modalOpen}
                appId={appId}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateApplication={updateApplication}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default ShowApplication