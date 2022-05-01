import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ApplicationForm from '../shared/ApplicationForm'
import { editApplicationSuccess, editApplicationFailure } from '../shared/AutoDismissAlert/messages'

const EditApplicationModal = (props) => {
    const { appId, user, show, handleClose, updateApplication, msgAlert, triggerRefresh } = props
    const [application, setApplication] = useState(props.application)
    console.log("EditApplicationModal: props.application:", props.application)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setApplication(prevApplication => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)

            const updatedValue = { [name]: value }

            console.log('prevApplication', prevApplication)
            console.log('updatedValue', updatedValue)

            return { ...prevApplication, ...updatedValue }
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        updateApplication(user, appId, application)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Your Application has been updated successfully!',
                    message: editApplicationSuccess,
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: editApplicationFailure,
                    variant: 'danger',
                }))
        // console.log('this is the application', application)
    }

    if (!application) {
        return <p>loading...</p>
    } else if (application.length === 0) {
        return <p>No application here</p>
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ApplicationForm
                    application={application}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit Application!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditApplicationModal