import React, { useState } from 'react'
import { createTask } from '../../api/task'
import { createTaskSuccess, createTaskFailure } from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../shared/TaskForm'

////////////////////////////////////////////////////////////////
// Create Task enders a form and calls the createTask function
////////////////////////////////////////////////////////////////
const CreateTask = (props) => {
    const { user, msgAlert } = props
    console.log('user in create task', user)
    const navigate = useNavigate()

    // we'll need two states
    const [task, setTask] = useState({
        name: '', description: ''
    })

    // console.log('In create task', task)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setTask(prevTask => {

            const name = e.target.name
            let value = e.target.value

            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)

            if (name === "mandatory" && e.target.checked) {
                value = true
            } else if (name === "mandatory" && !e.target.checked) {
                value = false
            }

            const updatedValue = { [name]: value }

            console.log('prevTask', prevTask)
            console.log('updatedValue', updatedValue)

            return { ...prevTask, ...updatedValue }
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createTask(user, task)
            // if create is successful, we should navigate to the show page
            .then(res => { navigate(`/collegetkr/colleges/`) })
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'The task has been Added!',
                    message: createTaskSuccess,
                    variant: 'success',
                }))
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Failed to create the task!',
                    message: createTaskFailure,
                    variant: 'danger',
                }))
        // console.log('this is the task', task)
    }

    return (
        <TaskForm
            task={task}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add a new task!"
        />
    )
}

export default CreateTask