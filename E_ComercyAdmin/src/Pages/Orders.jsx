import React, { useEffect } from 'react'
import Container from '../Components/Container'
import { useState } from 'react'
import OrderItem from '../Components/OrderItem'
import axios from 'axios'
import { use } from 'react'
const Orders = () => {
const [orders,setOrders]=useState([]);
const [stateOrder,setStateOrder]=useState('');
useEffect(()=>{
 axios.post('http://localhost/study/rest_api/E_ComercyAPI/API/readOrders.php')
    .then(({data})=>setOrders(data)).catch(()=>console.log('es gibt error in database'));
},[])
useEffect(()=>console.log(orders),[orders]);
  
  return (
    <>
    <Container>
       <div className="container py-4 order">
        <h6>Order Page</h6>
         
         {orders.length>0 ?
           (orders.map((order,index)=><OrderItem order={order} key={index}/>)) 
             :
           (<h4 className=' text-center text-danger'>there is not orders now </h4>)
        }
        
       </div>
    </Container>
    
    </>
  )
}

export default Orders
