import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

///////////////////////////////////////////////////////////////
// This is the Shared Form to be used for a CollegeToApplication
///////////////////////////////////////////////////////////////
const CollegeApplicationForm = (props) => {
    const { collegeApplication, handleSubmit, handleChange, heading } = props

    console.log("College Application Form props:", props)
    // console.log("this is college to application", collegeApplication)

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Date Submitted</Form.Label>
                <Form.Control
                    placeholder="This is the Date Submitted"
                    value={collegeApplication.dateSubmitted}
                    name='dateSubmitted'
                    onChange={handleChange}
                />
                <Form.Label>Working on this Application? </Form.Label>
                <Form.Check
                    label="In Progress? "
                    defaultChecked={collegeApplication.inProgress}
                    name='inProgress'
                    onChange={handleChange}
                />
                <Form.Label>Is this Application On Hold?</Form.Label>
                <Form.Check
                    label="On Hold?"
                    defaultChecked={collegeApplication.onHold}
                    name='onHold'
                    onChange={handleChange}
                />
                <Form.Label>Applying for Early Decision?</Form.Label>
                <Form.Check
                    label="Applied for Early Decision?"
                    defaultChecked={collegeApplication.earlyDecision}
                    name='earlyDecision'
                    onChange={handleChange}
                />
                <Form.Label>Applying for Early Action?</Form.Label>
                <Form.Check
                    label="Applied for Early Action?"
                    defaultChecked={collegeApplication.earlyAction}
                    name='earlyAction'
                    onChange={handleChange}
                />
                <Form.Label>Applying for Regular Decision?</Form.Label>
                <Form.Check
                    label="Applied for Regular Decision?"
                    defaultChecked={collegeApplication.regularDecision}
                    name='regularDecision'
                    onChange={handleChange}
                />
                <Button className="show-buttons" type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default CollegeApplicationForm