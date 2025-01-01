import React, { useContext, useEffect } from 'react'
import {Link,NavLink, useLocation} from 'react-router-dom'
import {FaSearch,FaRegUser} from 'react-icons/fa'
import { HiOutlineShoppingBag } from "react-icons/hi2";

import logo from '../images/logo.png'
import { useState } from 'react';
import Search from './Search';
import { ShopeConext } from '../Context/ShopContext';

const Navbar = () => {
  const location=useLocation()
  const classActive=({isActive})=>isActive ? 'text-red':'';
  const {setIsClose,count}=useContext(ShopeConext);
  const [visabale,setVisabale]=useState(false)
 useEffect(()=>{
  if(location.pathname.includes('collection')){
    setVisabale(true);
  }
  else{setVisabale(false);setIsClose(false)};
 },[location])
  return (
    <>
    <section className='one border-bottom'>
       <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='image'><img src={logo} /></div>
                <div className='list'>
                    <ul>
                        <li><NavLink className={classActive} to="/">HOME</NavLink></li>
                        <li><NavLink className={classActive} to="/collection">COLLECTION</NavLink></li>
                        <li><NavLink className={classActive} to="/about">ABOUT</NavLink></li>
                        <li><NavLink className={classActive} to="/contact">CONTACT</NavLink></li>
                    </ul>
                </div>
                <div>
                    <FaSearch onClick={()=>{if(visabale){setIsClose(e=>!e)}}} className='mx-3 fs-5'/>
                    <NavLink to='/login' className='text-gray' ><FaRegUser className='mx-3 fs-5' /></NavLink>
                      
                        <span className='text-gray' id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"><HiOutlineShoppingBag  className=' fs-5'/>
                          <span className="count">{count}</span>
                        </span>
                        <ul class="dropdown-menu dropdown-menu-dark my-3" aria-labelledby="dropdownMenuButton2">
                          <li><NavLink class="dropdown-item active" to='/cart'>Cart</NavLink></li>
                          <li><NavLink class="dropdown-item" to='/orders'>Orders</NavLink></li>
                          
                        </ul>
                        
                       
                </div>
                
            </div>
       </div>
    </section>
 <Search/>
    </>
  )
}

export default Navbar
