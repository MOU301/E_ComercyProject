import React from 'react'
import contact from '../images/contact.jpg'
import Register from '../Components/Register'
import Header from '../Components/Header'
const Contact = () => {
  return (
 <>
  <section className='py-3'>
    <div className="container">
       <div className="text-center p-5">
     <Header Ftext='Contact' Stext="US"/>
       </div>
       <div className="row contact">
        <div className="col-6">
            <div className="image p-6">
                <img src={contact} alt="" />
            </div>
        </div>
        <div className="col-6 d-flex justify-content-start align-content-center align-items-center">
          
            <div >
            <h4>Our Store</h4>
          <p className='text-gray'>
              54709 Willms Station
              <br/>
              Suite 350.Washington, USA 
             <br/>
             <br/>
             Tel : (415) 555-0132
             <br/>
             Email : admin@forever.com
             <br/>
          </p>
          <h4 className='my-5'> Careers at Forever</h4>
          <p className="text-gray my-5">
            Learn more about our teams and job openings.

          </p>
          <a className='explore ' href='#' >Explore Jobs</a>
            </div>
          </div>
        </div>
      


    </div>
    <Register/>
  </section>
 </>
  )
}

export default Contact
