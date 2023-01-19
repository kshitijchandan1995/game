import React, { useState } from 'react'
import axios from 'axios';
import { url } from '../constant/common';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
const[data,setData]=useState([{
    ename:"",
    edesc:"",
    efac:"",
    eloc:"",

}])

const handleChange=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    setData({...data,[name]:value});

}
const navigate=useNavigate();
const submit=(f)=>{
    f.preventDefault();

    axios.post(url+'/user/employee',data).then(Response=>{
        const result=Response.data;
    })
    
     setData({
        ename:"",
        edesc:"",
        efac:"",
        eloc:"",
     })

     navigate("/list");
}

  return (
    <div>

<form onSubmit={(e)=>submit(e)}>
            <table>
                <tr className="mb-3">
                    <td>
                        <label for="fname" className="form-lable">Employee Name</label>
                    </td>
                    <td>
                        <input type="text" name="ename" className="form-control" id="fname" value={data.ename} onChange={handleChange} />
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>
                        <label for="lname" className="form-lable">Employee Designation</label>
                    </td>
                    <td>
                        <input type="text" name="edesc" className="form-control" id="lname" value={data.edesc} onChange={handleChange} />
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>
                        <label for="femail" className="form-lable">Employee Subject</label>
                    </td>
                    <td>
                        <input type="text" name="efac" className="form-control" id="femail" value={data.efac} onChange={handleChange} ></input>
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>
                        <label for="fpass" className="form-lable">Employee Location</label>
                    </td>
                    <td>
                        <input type="text" name="eloc" className="form-control" id="fpass" value={data.eloc} onChange={handleChange}></input>
                    </td>
                </tr>
                <tr>
                    <td><button type="submit" className="btn btn-primary">submit</button></td>
                </tr>
            </table>
        </form>

        
    </div>
  )
}

export default Employee