import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const MainLayOut = () => {
  return (
    <>
    
      <Navbar/>
      <ToastContainer />
      <Outlet/>
      <Footer/>
     
    </>
  )
}

export default MainLayOut