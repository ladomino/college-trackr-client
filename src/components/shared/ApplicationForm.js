import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

///////////////////////////////////////////////////////////////
// This is the Shared Form to be used for an Application
///////////////////////////////////////////////////////////////
const ApplicationForm = (props) => {
    const { application, handleSubmit, handleChange, heading } = props

    return (
        <Container className="justify-content-center">
            <h3 className="collegetracker-header">{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Application Name</Form.Label>
                <Form.Control
                    placeholder="What is the name of your application?"
                    value={application.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Link to Your Application</Form.Label>
                <Form.Control
                    placeholder="Image url/jpeg"
                    value={application.link}
                    name='link'
                    onChange={handleChange}
                />
                <Button className="show-buttons" type='submit'>Submit</Button>
                <a href="javascript:history.back()"><Button className="show-buttons" variant='dark'>Back</Button></a>
            </Form>
        </Container>
    )
}

export default ApplicationForm