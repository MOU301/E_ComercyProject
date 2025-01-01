import React, { useContext } from 'react'
import Header from './Header'
import { ShopeConext } from '../Context/ShopContext';

const Total = ({children}) => {
    
    const {price,delivery_fee,currency}=useContext(ShopeConext);
  return price!=0 ? (
    <>
       <div className=' d-flex justify-content-end'>
            <div className='cart-total '>
                <Header Ftext='CART' Stext='TOTAL'/>
                <div className="my-3">
                <div className=" d-flex justify-content-between">
                    <span>Subtotal</span> <span>{currency} {price}</span>
                </div>
             
                <div className="d-flex justify-content-between my-3">
                    <span>Shipping Fee</span><span>{currency} {delivery_fee}</span>
                </div>
                </div>
                     <hr/>
                <div className="d-flex justify-content-between">
                    <strong>Total</strong><strong>{currency} {price+delivery_fee}</strong>
                </div>
                <div className="d-flex justify-content-end">
                       {children}
                </div>
            </div>
        </div>
    </>
  ):''
}

export default Total
