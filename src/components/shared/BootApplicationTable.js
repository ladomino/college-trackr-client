import React, { useState } from 'react'
import { Table, Button }from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { removeApplicationSuccess, removeApplicationFailure } from '../shared/AutoDismissAlert/messages'
import { removeApplication } from '../../api/application'

const BootApplicationTable = (props) => {

  const { itemArray } = props
  const { user, msgAlert } = props
  const navigate = useNavigate()
  console.log("App Table: props: ", itemArray)


  const removeSpecificApplication = (id) => {
    // console.log("removeApplication")

    removeApplication(user, id)
        .then(() => {
            msgAlert({
                heading: 'The application has been removed!',
                message: removeApplicationSuccess,
                variant: 'success',
            })
        })
        .then(() => { navigate(`/collegetkr/apps/`) })
        .catch(() => {
            msgAlert({
                heading: 'Application deletion failed.',
                message: removeApplicationFailure,
                variant: 'danger',
            })
        })
  }

  let applicationTable 

  if (itemArray.length > 0) {
    applicationTable = itemArray.map((item) => (
            <tr key={item.id}>
            <td>
            <Link to={`/collegetkr/collegeapps/${item.id}/`} user={user}>
              {item.name}
            </Link>
            </td>
            <td>{item.link}</td>
            <td>
              <Link to={`/collegetkr/apptasks/${item.id}/`}>
                    <Button className='btn btn-dark'>Tasks</Button>
                </Link>
            </td>
            <td>
              <Link to={`/collegetkr/apps/${item.id}/`} user={user}>
                <Button className='btn btn-dark'>Details</Button>
              </Link>
            </td>
            <td>
                <Button onClick={() => removeSpecificApplication(item.id)} className='btn btn-dark'>Delete</Button>
            </td>
            </tr>
    ))
  }

  return (
    <div>
        <h2>Applications</h2>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>Application Name</th>
            <th>Application Link</th>
            <th>Applicaion Tasks</th>
            <th>Application Information</th>
            <th>Application Deletion</th>
            </tr>
        </thead>
        <tbody>
        { applicationTable }
        </tbody>
        </Table>
    </div>
  )
}

export default BootApplicationTable