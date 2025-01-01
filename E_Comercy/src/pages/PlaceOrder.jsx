import React, { useContext, useEffect } from 'react'
import Total from '../Components/Total'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { toast } from 'react-toastify'

import { ShopeConext } from '../Context/ShopContext'
import axios from 'axios'
const PlaceOrder = () => {
    const [pay,setPay]=useState('');
    const [isPay,setIsPay]=useState(true);
    const [payment,setPayment]=useState('')
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [city,setCity]=useState('');
    const [street,setStreet]=useState('');
    const [Zipcode,setZipcode]=useState('');
    const [country,setCountry]=useState('');
    const [phone,setPhone]=useState('');
    const {cartItems,setCartItems,user,setCount,quantiy,size,price,URL}=useContext(ShopeConext);
    const navigate=useNavigate()
    useEffect(()=>{
    },[user])
    const handling=()=>{
        if(user){
          //send request to server to add the order
          if(lastName!='' && firstName!='' && email!='' && street!='' && city!='' && Zipcode!='' && country!='' && phone!=''  ){
          const data={
            user_id:user.id,
            cartItems,
           totalPrice:price,
            payment,
            firstName, 
            lastName,
            email,
            street,
            city,
            Zipcode,
            country,
            phone
          }
          ///send the data to backend by json by axios if Ok go to orders on  show message ok pay 
        
           if(isPay){
               axios.post(`${URL}/addOrders.php`,data)
               .then(({data})=>{
                    console.log(data);
                    toast.success('ok pay');
                    setCartItems([]);
                    setCount(0);
                    navigate('/orders');
                    
            }).catch(e=>toast.error('please retry again now '));
             }
             else{
            toast.error('there is error in pay please retry');
             }}
        else{
            toast.error('plase fill the field ')
        }
        }else{
            toast.error('please login now to pay the product ');
            navigate('/login');
        }
       
     
    }
  return cartItems.length>0 ? (
   <>
   <section className='py-5'>
     <div className="container">
        <Header Ftext='DELIVERY' Stext='INFORMATION'/>
                <div className="row">
            <div className="col-6">
                <form >
                    <div className='d-flex my-2 half'>
                        <input className='mr-2' onChange={e=>setFirstName(e.target.value)} value={firstName} type="text" placeholder='First name'/>
                        <input type="text" onChange={e=>setLastName(e.target.value)} value={lastName} placeholder='Last name'/>
                    </div>
                    <input className='full' onChange={e=>setEmail(e.target.value)} value={email} type="email"  placeholder='Email address' />
                   <input className='full' type="text" onChange={e=>setStreet(e.target.value)} value={street}  placeholder='Street' />
                   <div className='d-flex my-2 half'>
                        <input className='mr-2' onChange={e=>setCity(e.target.value)} value={city} type="text" placeholder='City'/>
                        <input type="text"  placeholder='State'/>
                    </div>
                    <div className='d-flex my-2 half'>
                        <input className='mr-2' onChange={e=>setZipcode(e.target.value)} value={Zipcode} type="text" placeholder='Zipcode'/>
                        <input type="text" onChange={e=>setCountry(e.target.value)} value={country} placeholder='Country'/>
                    </div>
                    <input className='full' onChange={e=>setPhone(e.target.value)} value={phone} type="text" placeholder='Phone' />
                    
                </form>
            </div>
            <div className="col-6">
            <Total></Total>

            <div className="my-4 d-flex justify-content-end">
              <div >
                 <h6 className='my-3'><span className="text-gray">PAYMENT</span>METHOD <span className="line line1"></span></h6>
                 <div className="d-flex tow justify-content-start align-content-center align-items-center">
                    
                    <div className='d-flex justify-content-between'>
                        <input className='bg-green' id='stripe' type="radio" onClick={()=>setPayment('stripe')} checked={payment=='stripe' ? true:false}/>
                        <label htmlFor="stripe">
                        <div className='image mx-3'>
                            <img src="src/images/stripe.png" alt="" />
                        </div>
                        </label>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <input type="radio" id='ratzorpay' onClick={()=>setPayment('ratzorpay')} checked={payment=='ratzorpay' ? true:false}/>
                        <label htmlFor="ratzorpay">
                        <div className='image mx-3'>
                            <img src="src/images/ratzorpay.png" />
                        </div>
                        </label>
                    </div>

                    <div className='d-flex justify-content-between align-content-center align-items-center'>
                        <input type="radio" id='cash' onClick={()=>setPayment('cash')} checked={payment=='cash' ? true:false} />
                        <label htmlFor="cash"> <div className='cash'>cash on delevery</div></label>
                    </div>
                    
                    
                </div>
                <div className="d-flex justify-content-end">
                    <button className='explore my-3' onClick={handling}>PLACE ORDER</button>

                </div>
            </div>
            </div>
            
            </div>
        </div>
    </div>
   </section>


   </>
  ):navigate('collections')
}

export default PlaceOrder
