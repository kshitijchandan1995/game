import {React,useState} from 'react'
import axios  from 'axios';
import { url } from './../constant/common';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const[id,setId]=useState(1);
    const[data,setData]=useState([])
    const handleChange=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setId({...id,[name]:value});
    }
const navigate=useNavigate();
    const searchemp=(id)=>{
        axios.get(url+`/user/${id}`).then(Response=>{
            const result=Response.data;
            setData(result.data[0]);
           navigate("/display",{state:{data}});

        })

    }
  return (
    <div className='container'>
        <div className='mb-3'>
        <label className='form-lable'>Enter id</label>
        <input type='number' className='form-control' name='id' value={id} onChange={handleChange}/>
        </div>
        <div className='mb-3'>
         <button type='button' className='btn btn-primary' onClick={()=>searchemp(id)}>Search</button>
        </div>

    </div>
  )
}

export default Search