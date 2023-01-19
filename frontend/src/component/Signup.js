import { useState } from 'react';
import{url} from '../constant/common';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Signup=()=>{
const[data,setData]=useState([{
    firstname:"",
    lastname:"",
    email:"",
    password:"",
}]);

const handleChange=(event)=>{
    const value=event.target.value;
    const name=event.target.name;
    setData({...data,[name]:value});
}
const navigate=useNavigate();
const submit=(e)=>{
e.preventDefault();
     axios.post(url+'/user/signup',data).then(Response=>{ const result=Response.data})

     setData({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
     });
 
   navigate("/login");
}



return(
    <div className="container">
        <form onSubmit={(e)=>submit(e)}>
            <table>
                <tr className="mb-3">
                    <td>
                        <label for="fname" className="form-lable">First Name</label>
                    </td>
                    <td>
                        <input type="text" name="firstname" className="form-control" id="fname" value={data.firstname} onChange={handleChange} />
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>
                        <label for="lname" className="form-lable">Last Name</label>
                    </td>
                    <td>
                        <input type="text" name="lastname" className="form-control" id="lname" value={data.lastname} onChange={handleChange} />
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>
                        <label for="femail" className="form-lable">Email</label>
                    </td>
                    <td>
                        <input type="email" name="email" className="form-control" id="femail" value={data.email} onChange={handleChange} ></input>
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>
                        <label for="fpass" className="form-lable">Password</label>
                    </td>
                    <td>
                        <input type="password" name="password" className="form-control" id="fpass" value={data.password} onChange={handleChange}></input>
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
export default Signup;