import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopeConext } from '../Context/ShopContext'

const Product = ({product}) => {
const {currency,URL}=useContext(ShopeConext);
  return (
    <>
            <NavLink to={`/product/${product.id}`}>
              <div className=' bg-white'>
                <div className="image i">
                <img src={`${URL}/${product.image1}`} />
                </div>
                <p className='text-gray mx-2'>{product.description}</p>
                <div className='mx-2 text-dark'>{`${currency}${product.price}`}</div>
              </div>
            </NavLink>
    </>
  )
}

export default Product
