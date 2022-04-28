import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

///////////////////////////////////////////////////////////////
// This is the Shared Form to be used for a Application Tasks
///////////////////////////////////////////////////////////////
const ApplicationTaskForm = (props) => {
    const { applicationtask, handleSubmit, handleChange, heading } = props

    console.log("Application Task Form props:", props)
    // console.log("this is application task", applicationtask)

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Importance</Form.Label>
                <Form.Control
                    placeholder="How Important is this?"
                    value={applicationtask.importance}
                    name='importance'
                    onChange={handleChange}
                />
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    placeholder="When is this due?"
                    value={applicationtask.dueDate}
                    name='dueDate'
                    onChange={handleChange}
                />
                <Form.Label>Completion</Form.Label>
                <Form.Check
                    placeholder="Completed?"
                    name='complete'
                    defaultChecked={applicationtask.complete}
                    onChange={handleChange}
                />
                <Form.Label>Working On It</Form.Label>
                <Form.Check
                    label="Working on this?"
                    defaultChecked={applicationtask.workingOn}
                    name='workingOn'
                    onChange={handleChange}
                />
                <Button className="show-buttons" type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default ApplicationTaskForm