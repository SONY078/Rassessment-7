import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Name2} from './Data.jsx';
import "./Styling.css"
export default function Students() 
{

 const [student] = useContext(Name2);

  return (
    <div>
        <br/>
        <br/>
        <h1>Student Details</h1>
        <Link to='/student-new' id='buttn'>Add Student</Link>
        <br/>
        <br/>
        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody className="table-group-divid">
  {
    student.map((student)=>(
          (<tr key={student.id} >
          <td>{student.Name}</td>
          <td>{student.Age}</td>
          <td>{student.Course}</td>
          <td>{student.Batch}</td>
          <td>
          <Link to={`/Edit/${student.id}`}>Edit</Link>
           
          </td>
      </tr>)
     
      
    ))}
</tbody>
</table>
    
    
    </div>
  );
}
