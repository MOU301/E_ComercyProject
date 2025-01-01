import React, { useContext } from 'react'
import { ShopeConext } from '../Context/ShopContext'

const OrderItem = ({product,Remove}) => {
  const {URL}=useContext(ShopeConext);
  return (
    <>
    <div className="d-flex justify-content-between my-1 align-content-center align-items-center">
            <div className='d-flex justify-content-cetner align-content-center align-itmes-center '>
                <div className="image mx-3">
                    <img src={`${URL}/${product.image1}`} alt="" />
                </div>
                <div>
                    <h6>{product.title}</h6>

                    <div className='d-flex my-1'>
                        <span className='mx-1 border'><strong className='mx-1 text-red'>{product.price}</strong></span>
                        <span className='mx-1 border'><strong>Quanitity: </strong>{product.count} </span>
                        <span className='mx-1 border'><strong>Size : </strong>{product.size}</span>    
                    </div>
                    <div>Date: <span className='text-gray'>{product.created_at}</span></div>
                    <div>Payment: <span className='text-gray'>COD</span></div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-content-center align-items-center'>
                <span className='state state-on mx-2'></span>
                <span>Order Placed</span>
                </div>
            <div><button onClick={ ()=>Remove(product.id)}>Track Order</button></div>
          </div>
          <hr/>
    </>
  )
}

export default OrderItem
