import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CollegeForm from '../shared/CollegeForm'
import { useNavigate } from 'react-router-dom'
import { createCollege } from '../../api/college'
import { createCollegeSuccess, createCollegeFailure } from '../shared/AutoDismissAlert/messages'

const CreateCollegeModal = (props) => {
    const { user, show, handleClose, msgAlert, triggerRefresh } = props
    const navigate = useNavigate()
    const [ college, setCollege] = useState({
        'name': ' ',
        'city': ' ',
        'state': ' ',
        'image': ' ',
        'early_decision': ' ',
        'early_action': ' ',
        'regular_decision': ' ',
        'app_home_link': ' ',
    });

    const handleChange = (e) => {
        e.persist()

        setCollege(prevCollege => {
            const name = e.target.name
            let value = e.target.value
            const updatedValue = { [name]: value }

            console.log('prevCollege', prevCollege)
            console.log('updatedValue', updatedValue)

            return { ...prevCollege, ...updatedValue }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('the college to submit', college)
        createCollege(user, college)
            // if create is successful, we should navigate to the list of all colleges untracked
            .then(res => {navigate(`/collegetkr/colleges/`)})
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'College created!',
                    message: createCollegeSuccess,
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Create College has failed!',
                    message: createCollegeFailure,
                    variant: 'danger',
                }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <CollegeForm
                    college={college}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Create a College"
                />
            </Modal.Body>
        </Modal>
    )
}

export default CreateCollegeModal