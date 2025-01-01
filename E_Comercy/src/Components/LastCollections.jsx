import React, { useContext } from 'react'
import Product from './Product'
import Header from './Header';
import { ShopeConext } from '../Context/ShopContext';
function LastCollections() {
 const item=useContext(ShopeConext);//{currency}===useContext(ShopeConext).currency
 const products=item.products
console.log(item)
  return (
    <>  
    
    <section className='my-5 product'>
  <div className='container'>
    <div className=' text-center my-5'>
      <Header Ftext='LATEST' Stext='COLLECTIONS'/>
        <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, neque est deserunt fugit quam blanditiis?</p>
    </div>
    <div className='row'>
        {products.collections.map(product=>{
               return ( <div className="col-md-3 col-sm-6 col-12 p-3" key={product.id}>
                 <Product product={product} />
                </div> )
        })}
    </div>
  </div>
</section>
    </>
  )
}

export default LastCollections
