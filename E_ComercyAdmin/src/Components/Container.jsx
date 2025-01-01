import React from 'react'
import Listbar from '../Components/Listbar';
const Container = ({children}) => {
  return (
    <>
    <div className="row border-top min-height-100">
    <div className="col-2 border-right">
      <Listbar/>
    </div>
    <div className="col-9">
    {children}
    </div>
    </div>
    </>
  )
}

export default Container
