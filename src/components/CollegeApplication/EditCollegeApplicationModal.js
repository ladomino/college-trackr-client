import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ApplicationCollegeForm from '../shared/ApplicationCollegeForm'
import { editCollegeApplicationSuccess, editCollegeApplicationFailure } from '../shared/AutoDismissAlert/messages'

const EditCollegeApplicationModal = (props) => {
    const { appId, user, show, handleClose, updateCollegeApplication, msgAlert, triggerRefresh } = props
    const [collegeapplication, setCollegeApplication] = useState(props.collegeapplication)
    console.log("EditCollegeApplicationModal: props.collegeapplication:", props.collegeapplication)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setCollegeApplication(prevCollegeApplication => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)

            const updatedValue = { [name]: value }

            console.log('prevCollegeApplication', prevCollegeApplication)
            console.log('updatedValue', updatedValue)

            return { ...prevCollegeApplication, ...updatedValue }
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        updateCollegeApplication(user, appId, collegeapplication)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Your College Application details has been updated successfully!',
                    message: editCollegeApplicationSuccess,
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Failed to update College Application Details!',
                    message: editCollegeApplicationFailure,
                    variant: 'danger',
                }))
        // console.log('this is the application', application)
    }

    if (!collegeapplication) {
        return <p>loading...</p>
    } else if (collegeapplication.length === 0) {
        return <p>No College Application details here</p>
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ApplicationCollegeForm
                    collegeapplication={collegeapplication}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit College Application Details!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditCollegeApplicationModal