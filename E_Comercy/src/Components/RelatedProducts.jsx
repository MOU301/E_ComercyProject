import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import { ShopeConext } from '../Context/ShopContext'
const RelatedProducts = () => {
  const {products}=useContext(ShopeConext);
  const [related,setRelated]=useState([]);
useEffect(()=>{setRelated(products.slice(0,4));},[])

    return (
    <section className='p-5 m-5 product'>
    <div className="container">
      <h2 className='text-center p-5'>
       <span className='text-gray'>RELATED </span> PRODUCTS<span className='line1 line'></span>
      </h2>
      <div className="row" id='now'>
      {related.map(product=>{
               return ( <div className="col-md-3 col-sm-6 col-12 p-3"  key={product.id}>
                 <Product product={product}/>
                </div> )
        })}
      </div>
    </div>
   </section>
  )
}

export default RelatedProducts
