import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {toast} from "react-toastify"
import { useContext } from 'react'
import { ShopeConext } from '../Context/ShopContext'
const Login = () => {
    const {setUser,user}=useContext(ShopeConext)
    const navigate=useNavigate()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const login={
        email,
        password
    }
    const checkLogin =async (e)=>{
e.preventDefault();
const response=await axios.post('http://localhost/study/rest_api/E_ComercyAPI/API/Login.php',login)
if(response.data.state){
  setUser(response.data.user);
    toast.success(`welcome with you herr: ${response.data.user.name}`);
    navigate('/')
}
else{
    toast.error(response.data.message);
}
    }
  return (
  <section className='p-2 m-5 login'>
        <div className="container">
         <h2 className='text-center '>Login <span className='line line1'></span></h2>
         <div className="d-flex justify-content-center align-content-center align-items-center">
            <form onSubmit={checkLogin}>
                <input type="text" placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
                <input type="password" placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/><br/>
                <div className=' d-flex justify-content-between '>
                    <p  >Forgot your password ?</p>
                    <NavLink to='/createAcount'>Create Account</NavLink>
                </div>
                <div  className='signin'>
                  <input type="submit" value='Sign In' />
                </div>
            </form>
         </div>
        </div>
  </section>
  )
}

export default Login
