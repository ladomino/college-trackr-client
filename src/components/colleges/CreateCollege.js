import React, { useState } from 'react'
import { createCollege } from '../../api/college'
import { createCollegeSuccess, createCollegeFailure } from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import CollegeForm from '../shared/CollegeForm'

////////////////////////////////////////////////////////////////
// Create College renders a form and calls the createCollege function
// props necessary are user and msgAlert
////////////////////////////////////////////////////////////////
const CreateCollege = (props) => {

    const { user, msgAlert } = props
    console.log('user in create college', user)
    const navigate = useNavigate()

    // we'll need two states
    const [college, setCollege] = useState({
        name: '', city: '', state: '',
        image: '', appHomeLink: '', earlyDecisionDate: '',
        earlyActionDate: '', regularDecisionDate: ''
    })

    // console.log('In create college', college)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setCollege(prevCollege => {
            const name = e.target.name
            let value = e.target.value

            console.log('etarget type', e.target.type)

            const updatedValue = { [name]: value }

            console.log('prevCollege', prevCollege)
            console.log('updatedValue', updatedValue)

            return { ...prevCollege, ...updatedValue }
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createCollege(user, college)
            // REVISIT - not sure where to navigate back to yet.
            .then(res => { navigate(`/collegetkr/colleges/`) })
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'The college has been Added!',
                    message: createCollegeSuccess,
                    variant: 'success',
                }))
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Failed to create a college!',
                    message: createCollegeFailure,
                    variant: 'danger',
                }))
        // console.log('this is the college', college)
    }

    return (
        <CollegeForm
            college={college}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add a new college!"
        />
    )
}

export default CreateCollege