import {React,useState} from 'react'
import  axios  from 'axios';
import { url } from './../constant/common';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const[user,setUser]=useState([{
    email:"",
    password:"",
}])

const handleChange=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    setUser({...user,[name]:value});

}
const navigate=useNavigate();
const submit=(f)=>{
       f.preventDefault();
       axios.post(url+'/user/login',user).then(Response=>{
        const result=Response.data;
        if(result.status==='success')
        {
            navigate('/employee');
        }
       })
}

  return (
    <div>

<form onSubmit={(e)=>submit(e)}>
            <table>
                <tr className="mb-3">
                    <td>
                        <label for="femail" className="form-lable">Email</label>
                    </td>
                    <td>
                        <input type="email" name="email" className="form-control" id="femail" value={user.email} onChange={handleChange} ></input>
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>
                        <label for="fpass" className="form-lable">Password</label>
                    </td>
                    <td>
                        <input type="password" name="password" className="form-control" id="fpass" value={user.password} onChange={handleChange}></input>
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

export default Login