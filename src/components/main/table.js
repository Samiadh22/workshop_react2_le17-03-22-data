import React from 'react'
import {Table} from 'react-bootstrap';
function table({data}) {
  return (
    <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
      {data?.map(ele =>
       <tr>
       <td>1</td>
       <td>{ele.name}</td>
       <td>Otto</td>
       <td>@mdo</td>
     </tr> 
    )}
    
  </tbody>
</Table>
    </div>
  )
}

export default table