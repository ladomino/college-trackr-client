import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { createApplication } from '../../api/application'
import { createApplicationSuccess, createApplicationFailure } from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import ApplicationForm from '../shared/ApplicationForm'

////////////////////////////////////////////////////////////////
// Create Application renders a form and calls the createApplication 
// function props necessary are user and msgAlert
////////////////////////////////////////////////////////////////
const CreateApplication = (props) => {

    const { user, show, handleClose, msgAlert, triggerRefresh } = props
    console.log('user in create application', user)
    const navigate = useNavigate()

    // Save state of application
    const [application, setApplication] = useState({
        'name': ' ', 
        'link': ' ',
        'owner': user.id
    })

    // console.log('In create application', application)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setApplication(prevApplication => {
            const name = e.target.name
            let value = e.target.value

            console.log('etarget type', e.target.type)

            const updatedValue = { [name]: value }

            console.log('prevApplication', prevApplication)
            console.log('updatedValue', updatedValue)

            return { ...prevApplication, ...updatedValue }
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createApplication(user, application)
            // navigate back to the application list
            .then( () => triggerRefresh() )
            .then(res => { navigate(`/collegetkr/apps/`) })
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'The application has been Added!',
                    message: createApplicationSuccess,
                    variant: 'success',
                }))
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Failed to create an application!',
                    message: createApplicationFailure,
                    variant: 'danger',
                }))
        // console.log('this is the application', application)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ApplicationForm
                    application={application}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    triggerRefresh={triggerRefresh}
                    heading="Create an Application"
                />
            </Modal.Body>
        </Modal>
    )
}

export default CreateApplication