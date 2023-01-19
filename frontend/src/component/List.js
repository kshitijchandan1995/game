import React, { useEffect,useState } from 'react'
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {url} from '../constant/common'

const List = () => {
    const[Data,setData]=useState([]);
const navigate=useNavigate();
    const addEmployee=()=>{
        navigate("/employee");
    }

    const getallemployee=()=>{
        axios.get(url+'/user/list').then(Response=>{
             const result=Response.data;
             console.log(result.data);

            
            setData(result.data);
           // console.log(Data);
        })

    }
    const findemp=()=>{
        navigate("/search");
    }

    const deleteemp=(id)=>{
        axios.delete(url+`/user/${id}`);
        setTimeout(()=>getallemployee(),500);
    }

    useEffect(()=>{
        getallemployee();
    },[]);


  return (
    <div className='container'>
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
        Data.map((s)=>{
            return(<tr>
                <td id='myid'>{s.ename}</td>
                <td id='myid'>{s.edesc}</td>
                <td id='myid'>{s.efac}</td>
                <td id='myid'>{s.eloc}</td>
                <td id='myid'><button type='button' className='btn btn-danger' onClick={()=>deleteemp(s.id)}>Delete</button></td>
            </tr>)
        })
    }


</table>
<br></br>
<div className="mb-3">
<td><button type='button' onClick={addEmployee} className='btn btn-success'>Add Employee</button></td>
<td><button type='button' onClick={findemp} className='btn btn-primary'>search</button></td>
</div>

    </div>
  )
}

export default List;