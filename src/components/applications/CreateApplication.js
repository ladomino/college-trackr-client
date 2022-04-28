import React, { useState } from 'react'
import { createApplication } from '../../api/application'
import { createApplicationSuccess, createApplicationFailure } from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import ApplicationForm from '../shared/ApplicationForm'

////////////////////////////////////////////////////////////////
// Create Application renders a form and calls the createApplication 
// function props necessary are user and msgAlert
////////////////////////////////////////////////////////////////
const CreateApplication = (props) => {

    const { user, msgAlert } = props
    console.log('user in create application', user)
    const navigate = useNavigate()

    // we'll need two states
    const [application, setApplication] = useState({
        name: '', link: ''
    })

    // console.log('In create college', college)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setApplication(prevCollege => {
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
            // REVISIT - not sure where to navigate back to yet.
            .then(res => { navigate(`/collegetkr/colleges/`) })
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
        <ApplicationForm
            application={application}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add a new application!"
        />
    )
}

export default CreateApplication