import React from 'react'

import { MdPolicy } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TiThumbsOk } from "react-icons/ti";
const Support = () => {
  return (
   <>
   <section className='py-5 my-5'> 
   <div className='container'>
   <div className='row'>
    <div className='col-md-4 text-center'>
      <MdPolicy className='fs-2 my-2' />
      <h5>Easy Exchange Policy</h5>
      <p className='text-gray'>we offer hassle free exchange policy</p>
    </div>
    <div className='col-md-4 text-center'>
     <TiThumbsOk  className='fs-2 my-2'/>
      <h5>7 Days Return Policy</h5>
      <p className='text-gray'>We provide 7 days free return policy</p>
    </div>
    <div className='col-md-4 text-center'>
      <BiSupport className='fs-2 my-2'/>
      <h5>Best Customer Support</h5>
      <p className='text-gray'>we provide 24/7 customer support</p>  
    </div>
  </div>
   </div>
</section>
   </>
  )
}

export default Support
