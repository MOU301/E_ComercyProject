import React from 'react'

const Navbar = () => {
  return (
   <>
   <section>
        <div className="d-flex justify-content-between align-content-center align-items-center">
            <div className="logo">
                <img src='src/images/logo.png' alt="" />
            </div>
            <div className="logout">
                <button  onClick={()=>console.log('remover the coockie  from local storage')} >Log Out</button>
            </div>
        </div>
        
   </section>
   
   
   </>
  )
}

export default Navbar
