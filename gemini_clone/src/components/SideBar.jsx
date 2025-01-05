import React, { useContext, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import { IoScale, IoSettings } from "react-icons/io5";
import { FaLandMineOn } from 'react-icons/fa6';
import { FaRegMessage } from "react-icons/fa6";
import  { Context } from '../context/context';
import { MdInstallDesktop } from 'react-icons/md';
const SideBar = () => {
  const [isclick,setIsclick]=useState(false);
  const [read,setRead]=useState(false);
  const {recent,setPrompt,setResult}=useContext(Context);
  const recentStyle=isclick ? 'recent my-3':'d-none';
  const newchat=isclick ? 'mx-2':'d-none';
  const short=(text)=>{
    const newtext=(text.length>5 && !read) ? text.slice(0,5)+'...' :text;
    return newtext;

  }
  return (
    <div className='sidebar p-2'>
      <div className="top p-2">
         <AiOutlineMenu onClick={()=>setIsclick(e=>!e)} className='icon fs-3 mb-5 d-block ' />
         <div className='new-chat d-flex text-nowrap' onClick={()=>setResult('')}>
           <FaPlusCircle className='icon fs-3  d-block '/>
           <span className={newchat}> New Chat</span>
         </div>
      </div>
      <div className={recentStyle}>
        <h6>Recent</h6>
        <ul >
          {recent.map((item,index)=> 
               <>
               {item!='' ? 
            <li  onClick={()=>{setPrompt(recent[index]);setRead(e=>!e)}} className='d-flex question justify-content-start align-content-center align-items-center'  >
                <FaRegMessage/>
                <span className=' text-nowrap mx-2'>{short(item)}</span>
              </li>:""}</>)}
        
        </ul>
      </div>
      <div className="bottom  p-2">
        <FaRegQuestionCircle className='icon d-block fs-5  mb-3' />
        <LuTimerReset className='icon d-block fs-5  mb-3'/>
        <IoSettings className='icon d-block fs-5 mb-3'/>
      </div>
    </div>
  )
}

export default SideBar
