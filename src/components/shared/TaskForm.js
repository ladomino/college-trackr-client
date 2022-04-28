import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

///////////////////////////////////////////////////////////////
// This is the Shared Form to be used for a Application Tasks
///////////////////////////////////////////////////////////////
const TaskForm = (props) => {
    const { task, handleSubmit, handleChange, heading } = props

    console.log("Task Form props:", props)
    // console.log("this is the task", task)

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Importance</Form.Label>
                <Form.Control
                    placeholder="Name of the Task"
                    value={task.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Control
                    placeholder="Description of the Task"
                    value={task.description}
                    name='description'
                    onChange={handleChange}
                />
                <Form.Label>Mandatory Task?</Form.Label>
                <Form.Control
                    placeholder="Is this task mandatory to be completed?"
                    defaultChecked={task.mandatory}
                    name='mandatory'
                    onChange={handleChange}
                />
                <Button className="show-buttons" type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default TaskForm