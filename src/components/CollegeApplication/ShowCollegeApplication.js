import React, { useState, useEffect } from 'react'
import { Table, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { showCollegeApplicationSuccess, showCollegeApplicationFailure } from '../shared/AutoDismissAlert/messages'
import { getOneCollegeApplication } from '../../api/collegeapplication'

const ShowCollegeApplication = (props) => {

    console.log("INSIDE SHOW COLLEGE APPLICATION")

    const [collegeapplication, setCollegeApplication] = useState(null)
    
    // Setup user and appId from params
    const { user, msgAlert } = props
    const { appId } = useParams()

    console.log("ShowApplication: user: ", user)
    console.log("AppId", appId)

    useEffect(() => {
        console.log("HELLO")
        getOneCollegeApplication(user, appId)
            .then(res => {
                setCollegeApplication(res.data.collegeapplication)
                console.log("res.data", res.data);
                console.log("ShowCollegeApplications: collegeapplication: ", collegeapplication)
            })
            .then(() => {
                msgAlert({
                    heading: 'College Application details have been retrieved!',
                    message: showCollegeApplicationSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Failed to retrieve college applications details!',
                    message: showCollegeApplicationFailure,
                    variant: 'danger',
                })
            })
    }, [])

    if (!collegeapplication) {
        return <p>loading...</p>
    } else if (collegeapplication.length === 0) {
        return <p>No application here</p>
    }


    return (
        <>
            <div>
                <h2>College Application</h2>
                <div className='collegetracker_container'>
                    <div className="container">
                        <h2>College</h2>
                        <Card>
                        <Card.Header className='card-title'>
                            <h4>{collegeapplication.college.name}</h4>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-start">
                          <img className="card-image" src={collegeapplication.college.image}></img>
                            <Card.Text className="card-location">
                                <small><b>City:</b><br/> {collegeapplication.college.city}</small><br />
                                <p></p>
                                <small><b>State:</b><br/> {collegeapplication.college.state}</small><br />
                                <p></p>
                            </Card.Text>
                        </Card.Body>
                         <Card.Footer>
                            <Card.Text className="card-details">
                                <small><b>Early Decision:</b><br/> {collegeapplication.college.early_decision}</small><br />
                                <p></p>
                                <small><b>Early Action:</b><br/> {collegeapplication.college.early_action}</small><br />
                                <p></p>
                                <small><b>Regular Decision:</b><br/> {collegeapplication.college.regular_decision}</small><br />
                                <p></p>
                                <small><b><a href={collegeapplication.college.app_home_link}>Apply</a></b><br/>
                                </small><br />
                                <p></p>
                            </Card.Text>
                        </Card.Footer>
                        </Card>
                    </div>
                    <div className="container">
                        <h2>Application</h2>
                        <h2>Application Status</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowCollegeApplication