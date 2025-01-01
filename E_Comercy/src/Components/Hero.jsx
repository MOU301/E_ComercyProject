import React from 'react'
import start from '../images/start.jpg'
const Hero = () => {
  return (
    <>
    <section className='start container'>
  <div className='d-flex justify-content-between'>
    <div className='bg-orange'>
       <div >
          <p><span className='line'></span>OUR BESTELLERS</p>
          <h1>Latest Arrivals</h1>
          <p>SHOP NOW <span className='line'></span></p>
       </div>
    </div>
    <div><img src={start} alt="" /></div>
  </div>
</section></>
  )
}

export default Hero
