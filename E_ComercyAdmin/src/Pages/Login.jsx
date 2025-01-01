import React from 'react'
import { useState } from 'react'
localStorage.clear();
const Login = () => {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const adminInfo={email,password};
  const check=(e)=>{
e.preventDefault();
//send the data to server if it is coreckt retern true if true set in localstorage login true 
//setLogin(true)
  localStorage.setItem('login',JSON.stringify(true))

  }
  return (
   <>
  <section onSubmit={check} >
    <div className="login bg-dark d-flex justify-content-center align-items-center align-content-center ">
      <form className='border bg-white p-3 ' action="">
         <strong className='fs-4'>Admin Pnael</strong>
       
        <label className='form-label'  htmlFor="email"><strong>Email Address :</strong></label>
        <input className='form-control' onChange={(e)=>setEmail(e.target.value)} type='email' id='email' required  placeholder='your@email.com' value={email}/>
        <br/>
        <label className='form-label' htmlFor="email"><strong>Password :</strong></label>
        <input className='form-control' onChange={(e)=>setPassword(e.target.value)} type='password' id='password' required  placeholder='Enter your password' value={password}/>
         <input className=' btn btn-dark' type="submit" value="Login" />

      </form>
    </div>
  </section>
   </>
  )
}

export default Login
