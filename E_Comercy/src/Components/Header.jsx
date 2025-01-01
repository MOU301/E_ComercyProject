import React from 'react'

const Header = ({Ftext,Stext}) => {
  return (
    <h3 className='my-2'> <span className="text-gray">{Ftext}</span> {Stext}<span className="line line1"></span></h3>
  )
}

export default Header
