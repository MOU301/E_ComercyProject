import React from 'react'
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <>
    
<section className=' one mt-5 border-top'>
  <div className="container ">
     <div className="row">
      <div className='col-md-6'>
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <p className="text-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eligendi magnam corporis hic dolorem provident perferendis amet doloribus ea enim ut saepe, iusto mollitia corrupti at dolores eaque ipsum cum.</p>
      </div>
      <div className="col-md-6 p-2">
        <div className="row">
          <div className="col-md-6 p-3">
            <h6 >COMPANY</h6>
            <ul className='list2'>
              <li><a href="">Home</a></li>
              <li><a href="">About us</a></li>
              <li><a href="">Delivery</a></li>
              <li><a href="">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-md-6 p-3">
            <h6>GET IN TOUCH</h6>
            <ul className='text-gray list2'>
              <li>+1 212 456 7890</li>
              <li>contact@forever.com</li>
              
            </ul>
          </div>
        </div>
      </div>
     </div>
     <div></div>
  </div>
</section>
    </>
  )
}

export default Footer
