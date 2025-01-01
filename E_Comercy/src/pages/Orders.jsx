import React, { useContext, useEffect, useState } from 'react'
import OrderItem from '../Components/OrderItem';
import Header from '../Components/Header';
import { ShopeConext } from '../Context/ShopContext';
import  {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Orders = () => {
  const navigate=useNavigate();
    const {user}=useContext(ShopeConext)
    const [orders,setOrders]=useState([]);
    const RemoveItem =()=>{
        console.log('remove the element');
    }
    
      useEffect(()=>{ 
   const id =user.id;
      const data={user_id:id};
        axios.post('http://localhost/study/rest_api/E_ComercyAPI/API/readOrder.php',data)
         .then(({data})=>setOrders(data))
         .catch(()=>console.log('there is error in data base '));
     
      },[])
       
  return user ? (
   <>
   <section className='my-5 cart'>
        <div className="container">
            <Header Ftext='YOUR' Stext='CART'/>
         <hr/>
          {orders.length>0 ?
           (orders.map(product=><OrderItem product={product} Remove={RemoveItem}/>))
           :
           (<h3 className='text-center text-danger my-5 '>there is not orders for you </h3>)}
        </div>
    </section>
   
   </>
  ): navigate('/login');
}

export default Orders
