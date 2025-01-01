import React, {  useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdAddCircle } from "react-icons/io";
import { BsCheckAll } from "react-icons/bs";
const Listbar = () => {

  const classlink=({isActive})=>isActive ? "border my-3 py-2 active d-block ":'border list my-3 py-2 d-block';
  return (
   <>
   <NavLink className={classlink} to='/add-item' >

          <IoMdAddCircle className='fs-4 mx-3' />
          <span>Add Items</span>
         
      </NavLink>
      <NavLink className={classlink} to='/list-item'>
            <BsCheckAll  className='fs-4 mx-3' />
            <span>List Items</span>
      </NavLink>
       <NavLink className={classlink} to='/orders'>
             <BsCheckAll  className='fs-4 mx-3'/>
            <span>Oreders</span>
       </NavLink>
   </>
  )
}

export default Listbar
