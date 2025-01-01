import React, { useContext, useEffect } from 'react'

import { IoMdClose } from "react-icons/io";
import {FaSearch} from 'react-icons/fa'
import { ShopeConext } from '../Context/ShopContext';
const Search = () => {
   const {setSearch,isClose,search,setIsClose}=useContext(ShopeConext)
   useEffect(()=>{
    if(!isClose){
        setSearch('');
    }
   },[isClose])
   useEffect(()=>{
   
    console.log(search)
   },[search]);
  return isClose ? (
    <section className='search'>
      <div className="container">
        <div className="d-flex justify-content-center">
          <form className='d-flex justify-content-between'>
            <input type="search" onChange={(e)=>setSearch(e.target.value)}  value={search}/>
            <button ><FaSearch className='fs-5'/></button>
          </form>
        <div className='mx-3'><IoMdClose onClick={()=>setIsClose(false)} className='fs-5 my-2 close'/></div>
        </div>
      </div>
    </section>

  ): null
}

export default Search
