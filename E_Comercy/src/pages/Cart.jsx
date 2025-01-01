import React, { useContext,useEffect} from 'react'
import CartItem from '../Components/CartItem'
import { NavLink} from 'react-router-dom'
import Total from '../Components/Total'
import Header from '../Components/Header'
import { ShopeConext } from '../Context/ShopContext'


const Cart = () => {

const { setPrice,setCount,size,quantity,productData,cartItems,setCartItems}=useContext(ShopeConext);

useEffect(()=>{
  if(productData){
    console.log(productData)
  const nitem={id:productData[0].id,title:productData[0].title,price:productData[0].price,quantity:quantity+1,size:[size],src:productData[0].image1}
  if(cartItems.length>0){
   let data=[...cartItems];
   data.map((item,index)=>{
    if(item.id==productData[0].id){
      nitem.quantity=item.quantity+1;
      nitem.size=[...item.size,size];
      data.splice(index,1);
    }
   })
   data.push(nitem);   
   setCartItems(data)
 }else{
   setCartItems([nitem]);
}}
  },[])

useEffect(()=>{
  let num =0;
  let sel=0;
for(const items of cartItems){
   num+=items.size.length;
   sel+=items.price*items.quantity;
   setCount(num);
   setPrice(sel);
}


},[productData,cartItems]);


const RemoveItem=(id)=>{
       const orderRemove=cartItems.filter(item=>item.id==id);
       const orderNew=cartItems.filter(item=>item.id!=id);
    setCount(e=>e-orderRemove[0].quantity);
    setPrice(e=>e-orderRemove[0].price*orderRemove[0].quantity)
  setCartItems(orderNew);
}




    //product get from redux 
  return productData ? (
    <section className='my-5 cart'>
        <div className="container">
           <Header Ftext='YOUR' Stext='CART'/>
         <hr/>
          {cartItems.map(product=><CartItem product={product}  Remove={RemoveItem}/>)}
     <Total>
        <NavLink className='explore bg-black text-white my-5' to='/place-order'>PROCEED TO CHECKOUT</NavLink>
     </Total>
     </div>
    </section>
  ):<h1>there is not product in cart now </h1>
}

export default Cart
