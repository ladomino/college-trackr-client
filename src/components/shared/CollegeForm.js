import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

///////////////////////////////////////////////////////////////
// This is the Shared Form to be used for a Colleges
///////////////////////////////////////////////////////////////
const CollegeForm = (props) => {
    const { college, handleSubmit, handleChange, heading } = props

    return (
        <Container className="justify-content-center">
            <h3 className="collegetracker-header">{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder="What is the name of your college?"
                    value={college.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>City</Form.Label>
                <Form.Control
                    placeholder="Where is the name of the city your college is located in?"
                    value={college.city}
                    name='city'
                    onChange={handleChange}
                />
                <Form.Label>State</Form.Label>
                <Form.Control
                    placeholder="Where is the name of the state your college is located in?"
                    value={college.state}
                    name='state'
                    onChange={handleChange}
                />
                <Form.Label>Image</Form.Label>
                <Form.Control
                    placeholder="Image url/jpeg"
                    value={college.image}
                    name='image'
                    onChange={handleChange}
                />
                <Form.Label>Early Decision Date</Form.Label>
                <Form.Control
                    placeholder="Early Decision Date"
                    value={college.earlyDecisionDate}
                    name='earlyDecisionDate'
                    onChange={handleChange}
                />
                <Form.Label>Early Action Date</Form.Label>
                <Form.Control
                    placeholder="Early Action Date"
                    value={college.earlyActionDate}
                    name='earlyActionDate'
                    onChange={handleChange}
                />
                <Form.Label>Regular Decision Date</Form.Label>
                <Form.Control
                    placeholder="Regular Decision Date"
                    value={college.regularDecisionDate}
                    name='regularDecisionDate'
                    onChange={handleChange}
                />
                <Form.Label>Link to College Application Home Page</Form.Label>
                <Form.Control
                    placeholder="Image url/jpeg"
                    value={college.appHomeLink}
                    name='appHomeLink'
                    onChange={handleChange}
                />
                <Button className="show-buttons" type='submit'>Submit</Button>
                <a href="javascript:history.back()"><Button className="show-buttons" variant='dark'>Back</Button></a>
            </Form>
        </Container>
    )
}

export default CollegeForm