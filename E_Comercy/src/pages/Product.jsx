import React, { useContext, useEffect } from 'react'
import star from '../images/star.png'
import { useState } from 'react'
import RelatedProducts from '../Components/RelatedProducts';
import { ShopeConext } from '../Context/ShopContext'
import { useLoaderData, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
const StarOn=()=>{
return <span><img src={star} alt="" /></span>
}
const StarOff=()=>{
return <span className='nostars'><img src={star} alt="" /></span>
  
}
const num=3
const ok=[];
const no=[];
for(let i=0; i<num; i++){
  ok.push(i);
}
for(let i=num; i<5; i++){
 no.push(i);
}
const Product = () => {
   const [product,setProduct]=useState([])
   const [isSize,setIsSize]=useState([]);
   const [image,setImage]=useState(null)
   const navigate=useNavigate(); 
   const {currency,size,setSize,setProductData,products,setIdItem,URL} =useContext(ShopeConext)
   const id=useLoaderData();
   setIdItem(id)
   useEffect(()=>{
       const item=products.filter(item=>item.id==id);
       setProduct(item);
       
  },[products])

useEffect(()=>{

  // console.log(product[0].image1)
  // product.map(e=>setIsSize(e.size));
//  setImage(product[0].image1)
product.map(item=>{
  setImage(item.image1);
  setIsSize(item.sizes.split(','));
});
},[product])
useEffect(()=>{
  console.log(isSize)
},[isSize])

    const AddToCart=()=>{
    if(size==null){
      toast.error('you must choices the size')
    } 
else{
 setProductData(product);
  toast.success('success add to cart')
  navigate('/cart');
}
   
}
    
   
  return product.length>0 ? (
   <>
    <section className='m-5 p-5'>
       <div className="contianer">
         <div className="row">
            <div className="col-6">
                <div className="row show">
                    <div className="col-3 ">
                    <div className="image" >
                            <img src={`${URL}/${product[0].image1}`} onClick={()=>setImage(product[0].image1)} alt="" />
                    </div>
                    <div className="image" >
                            <img src={`${URL}/${product[0].image2}`} onClick={()=>setImage(product[0].image2)} alt="" />
                    </div>
                    <div className="image" >
                            <img src={`${URL}/${product[0].image3}`} onClick={()=>setImage(product[0].image3)} alt="" />
                    </div>
                    <div className="image" >
                            <img src={`${URL}/${product[0].image4}`} onClick={()=>setImage(product[0].image4)} alt="" />
                    </div>
                    
                    </div>
                    <div className="col-9">
                        <div className="main-image">
                            <img src={`${URL}/${image}`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
              <h5>{product[0].title}</h5>
              <div className="stars">
            {ok.map(()=><StarOn />)}
            {no.map(()=><StarOff />)}<span className='count-review'>(122)</span>
              </div>  
              <h4 className='my-3'>{currency}{product[0].price}</h4>
              <p className="text-gray">{product[0].description}</p>
              <h6>select Size</h6>
                {isSize.length>0 ? 
                (isSize.map(item=>(
                <>
                    <label className={size==item ? 'size btn2':'size btn1'} htmlFor={item}>{item}</label>
                     <input type='radio' className='d-none' value={size} onClick={()=>setSize(item)} id={item}/>
                 </>
                ))):null }
                <br/>
      

              <botton className="add-cart" onClick={()=>AddToCart(id)}>ADD TO CART</botton>
              <hr className='border-bottom' />
              <p className="text-gray">
                100% Original product.<br/>
                Cash on deivery is available on this product.<br/>
                Easy return and exchange policy within 7 days.
              </p>
            </div>
         </div>
       </div>
    </section>
   <section className='my-5 py-5 '>
        <div className="container">
            <div className='desc'>
                <h6 className='border p-2'>Description</h6><h6 className='p-2 border'>Reviews</h6>
                <p className='border p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Sed aliquid quas harum non itaque sint, dignissimos obcaecati porro accusantium a
                     provident ipsum ea dolore quasi dicta commodi! Aut, dolore pariatur! Lorem ipsum dolor sit.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente corrupti impedit 
                      voluptatibus similique? Dolore aut mollitia hic.
                      <br/><br/>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi esse sequi dolor fugit 
                      a id provident qui recusandae eligendi
                      , obcaecati eveniet nostrum quibusdam error delectus at animi tempora enim corporis.</p>
            </div>

        </div>
   </section>
  <RelatedProducts/>
 
   </>
  ):null
}

const ProductLoader= ({params})=>{
  return params.id;
   }
export {Product as default,ProductLoader}
