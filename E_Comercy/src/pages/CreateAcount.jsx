import React, { useEffect } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Header from '../Components/Header';
import {toast} from 'react-toastify'
import axios from 'axios'

const CreacteAcount = () => {
   const navigate=useNavigate();
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
  const newUser={
    name,email,password
  }

    const regist =async (e)=>{
e.preventDefault();
console.log(newUser)
//send the login to server 
//if correct go to login page to sign in...
//with use toas message 
await axios.post('http://localhost/study/rest_api/E_ComercyAPI/API/createUser.php',newUser)
.then(({data})=>{toast.success(data.message);navigate('/login')})
.catch(({data})=>toast.error(data.message));
    }
  return (
  <section className='p-2 m-5 login'>
        <div className="container">
        <div className='text-center'> <Header  Ftext='CREATE' Stext='ACOUNT'/></div>
         <div className="d-flex justify-content-center align-content-center align-items-center">
            <form onSubmit={regist}>
                <input type="text"   onChange={(e)=>setName(e.target.value)} value={name} placeholder='Name' required/><br/>
                <input type="email"   onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder='Email'required /><br/>
                <input type="password"   onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' required/><br/>
                <div className=' d-flex justify-content-between '>
                    <p  >Forgot your password ?</p>
                    <NavLink to='/login'>Sign In</NavLink>
                </div>
                <div  className='signin'>
                  <input type="submit" value='Save' />
                </div>
            </form>
         </div>
        </div>
  </section>
  )
}

export default CreacteAcount
