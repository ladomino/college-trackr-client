import React, { useState, useEffect } from 'react'
import { Table, Button }from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { createTrackCollege } from '../../api/college'
import { collegeTrackSuccess, collegeTrackFailure } from '../shared/AutoDismissAlert/messages'

// This Table is for ALL UNTRACKED Colleges
const BootTrackOneTable = (props) => {

  const { itemArray } = props
  const { user, msgAlert } = props
  const navigate = useNavigate()


  // Create the CollegetoTrack entry
  const createTrack = (collegeId) => {
    createTrackCollege(user, collegeId)
        .then(() => {
            msgAlert({
                heading: 'The college is being tracked!',
                message: collegeTrackSuccess,
                variant: 'success',
            })
        })
        .then(() => { navigate(`/collegetkr/colleges/`) })
        .catch(() => {
            msgAlert({
                heading: 'Failed to track the college!',
                message: collegeTrackFailure,
                variant: 'danger',
            })
        })
  }
  let collegeTable 

  if (itemArray.length > 0) {
    collegeTable = itemArray.map((item) => (
            <tr key={item.id}>
            <td><img className="table-index-image" src={item.image}></img></td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.early_action}</td>
            <td>{item.early_decision}</td> 
            <td>{item.regular_decision}</td>
            <td><a href={item.app_home_link} target="_blank">Apply</a></td>
            <td>
                <Link to={`/collegetkr/colleges/${item.id}/track/`}>
                    <Button className='btn btn-dark'>Details</Button>
                </Link>
            </td>
            <td>
                <Button onClick={() => createTrack(item.id)} className='btn btn-dark' type='submit'>Track</Button>
            </td>
            </tr>
    ))
  }


  return (
    <div>
        <h2>Colleges</h2>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th></th>
            <th>College Name</th>
            <th>City</th>
            <th>State</th>
            <th>Early Decision</th>
            <th>Early Action</th>
            <th>Regular Decision</th>
            <th>Application Home</th>
            <th>College Details</th>
            <th>Track College</th>
            </tr>
        </thead>
        <tbody>
        { collegeTable }
        </tbody>
        </Table>
    </div>
  )
}

export default BootTrackOneTable