import {React,useState} from 'react'
import { useLocation } from 'react-router-dom'

const Display = () => {
    const[data,setData]=useState([])
    const location=useLocation();
    setData(location.state);
  return (
    <div>
        
        <table id='mytable'>
    <tr>
        <th id='myid'>
           Employee Name
        </th>
        <th id='myid'>
        Employee Designation
        </th>
        <th id='myid'>
        Employee Subject
        </th>
        <th id='myid'>
        Employee Location
        </th>
        <th id='myid'>
           option
        </th>
    </tr>
    {
        data.map((s)=>{
            return(<tr>
                <td id='myid'>{s.ename}</td>
                <td id='myid'>{s.edesc}</td>
                <td id='myid'>{s.efac}</td>
                <td id='myid'>{s.eloc}</td>
                
            </tr>)
        })
    }


</table>
        
    </div>
  )
}

export default Display