import React from 'react'
import Product from './Product'
import products from '../../products.json';
import Header from './Header';
console.log(products.best);
const BestCollections = () => {
  return (
    <>
    <section className='my-5 product'>
  <div className='container'>
    <div className=' text-center my-5'>
      <Header Ftext='BEST' Stext='SELLERS' />
        <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, neque est deserunt fugit quam blanditiis?</p>
    </div>
    <div className='row'>
   {products.best.map(product=>{
       return <div className="col-md-3 p-3" key={product.id}>
        <Product product={product} />
        </div>
   })}
       

      
     
     
    
    </div>
  </div>
</section>
    </>
  )
}

export default BestCollections
