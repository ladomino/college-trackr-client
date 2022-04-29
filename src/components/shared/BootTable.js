import React, { useState, useEffect } from 'react'
import { Table }from 'react-bootstrap'

const BootTable = (props) => {

  const { itemArray } = props

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
            </tr>
        </thead>
        <tbody>
        {
          itemArray && itemArray.map((item) => (
            <tr key={item.id}>
            <td><img className="table-index-image" src={item.image}></img></td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.early_action}</td>
            <td>{item.early_decision}</td> 
            <td>{item.regular_decision}</td>
            <td><a href={item.app_home_link} target="_blank">Application</a></td>
            </tr>
          ))
        }
        </tbody>
        </Table>
    </div>
  )
}

export default BootTable