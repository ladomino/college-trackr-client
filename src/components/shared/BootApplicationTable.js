import React, { useState } from 'react'
import { Form, Container, Table, Button }from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BootApplicationTable = (props) => {

  const { itemArray } = props
  const { user, msgAlert } = props
  console.log("App Table: props: ", itemArray)


  let applicationTable 

  if (itemArray.length > 0) {
    applicationTable = itemArray.map((item) => (
            <tr key={item.id}>
            <td>
            <Link to={`/collegetkr/apps/${item.id}/`} user={user}>
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
                <Link to={`/collegetkr/apps/${item.id}/delete/`}>
                    <Button className='btn btn-dark'>Delete</Button>
                </Link>
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