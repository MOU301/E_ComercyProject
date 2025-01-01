import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const MainLayOut = () => {
  return (
    <>
    <div className="container">
        <Navbar/>
        <ToastContainer/>
          <Outlet/>
      
    </div>
    
    </>
  )
}

export default MainLayOut
