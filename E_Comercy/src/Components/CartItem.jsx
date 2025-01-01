import React, { useContext } from 'react'
import { ShopeConext } from '../Context/ShopContext'
const CartItem = ({product,Remove}) => {
  const {URL}=useContext(ShopeConext);
  console.log(product)
  return (
    <>
    <div className="d-flex justify-content-between my-1">
            <div className='d-flex justify-content-cetner align-content-center align-itmes-center '>
                <div className="image mx-3">
                    <img src={`${URL}/${product.src}`} alt=""/>
                </div>
                <div>
                    <h6>{product.title}</h6>
                    <div className='d-flex my-4'>
                       <span className='mx-2 border p-1'>{product.price}</span>
                       <span className="mx-2 border p-1">quantity : {product.quantity}</span>
                    </div>
                </div>
            </div>
            <div className='p-2'>{product.count}</div>
            <div><button onClick={ ()=>Remove(product.id)}>remove</button></div>
          </div>
          <hr/>
    </>
  )
}

export default CartItem
