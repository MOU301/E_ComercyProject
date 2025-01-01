import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center my-5">
     <FaExclamationTriangle className=' fs-2 text-red mb-4'/>
    <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
    <p className=" mb-5">This page does not exist</p>
    <Link
      to="/"
      className="text-white bg-red px-3 py-2 mt-4"
      >Go Back</Link >
  </section>
  )
}

export default NotFound
