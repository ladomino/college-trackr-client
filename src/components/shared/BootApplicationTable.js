import React, { useState, useEffect } from 'react'
import { Table, Button }from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BootApplicationTable = (props) => {

  const { itemArray } = props

  let applicationTable 

  if (itemArray.length > 0) {
    applicationTable = itemArray.map((item) => (
            <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.link}</td>
            </tr>
    ))
  }

  return (
    <div>
        <h2>Applications</h2>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th></th>
            <th>Application Name</th>
            <th>Application Link</th>
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