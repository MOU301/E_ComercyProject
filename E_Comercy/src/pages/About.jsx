import React from 'react'
import about from '../images/about.jpg'
const About= () => {
  return (
   <>
<section className='about my-5'>
  <div className="container">
    <div className="row">
      <div className="col-6">
        <div className="image">
          <img src={about}/>
        </div>
      </div>
      <div className="col-6 ">
         <p className='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi nostrum labore fugiat incidunt alias rerum mollitia, ullam blanditiis, tempore dolor odio! Quo totam quisquam dicta ipsa dolor esse veniam.</p>
  
         <br/>
         <p className='text-gray'> Lorem ipsum aliquam  aspernatur facere saepe obcaecati quia, nemo ipsum culpa asperiores eum maiores voluptate ut. Voluptatibus, incidunt facere.</p>
         <br/>
         <h6>Our Mission</h6>
         <br/>
         <p className='text-gray'>Lorem ipsum dolor sit amet consectetu beatae repudiandae nostrum neque, saepe culpa distinctio quis exercitationem dicta ut magni corrupti veniam nemo minima, nisi similique. Nam.</p>
      </div>
    </div>
    <div className="we my-5">
      <h4 className='my-5'>WHY HOCIECE US  ? <span className='line line1'></span></h4>
      <div className="row">
        <div className="col-4 border p-4">
          <h5 className='py-3'>Quality Assurance</h5>
          <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati, impedit voluptatem suscipit vero distinctio, nihil recusandae solutaolorum sed voluptas sit?</p>
        </div>
        <div className="col-4 border p-4">
          <h5 className='py-3 '>Convenience</h5>
          <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati, impedit voluptatem suscipit vero distinctio, nihil recusandae solutaolorum sed voluptas sit?</p>
        </div>
        <div className="col-4 border p-4">
          <h5 className='py-3'>Exceptional Customer Service</h5>
          <p className='text-gray'>sit amet consectetur adipisicing elit. Harum obcaecati, impedit voluptatem suscipit vero distinctio, nihil recusandae solutaolorum sed voluptas sit?</p>
        </div>
      </div>
    </div>
  </div>
</section>
   
   </>
  )
}

export default About
