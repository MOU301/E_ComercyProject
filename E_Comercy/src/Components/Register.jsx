import React from 'react'

const Register = () => {
  return (
    <>
    <section className='my-5 py-5'> 
  <div className="container">
    
    <div className='text-center'>
       <h3>Subscribe now & get 20% off</h3>
       <p className="text-gray p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, officia debitis pariatur consequatur  eligendi assumenda corporis suscipit </p>
       <form>
        <input type="text" className='p-2' style={{width:'60%'}} placeholder='Enter your email' />
        <input type="submit"  className='bg-black text-white p-2 px-4' value='SUBSCRIBE'/>
      </form> 
    </div>
  </div>
</section>
    </>
  )
}

export default Register
