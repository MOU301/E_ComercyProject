import React from 'react'

const OrderItem = ({order}) => {

  return (
   <>
    <div className='border row my-4'>
            <div className="col-6 d-flex justify-content-between">
              <span className='image'><img src="src/images/boxlogo.jpg" alt="" /></span>
              <div>
              {order.order.map(item=><p>{`${item.title} `}  : <strong className=' text-danger'>{item.size}</strong></p>)}
           
                <h6 className='my-4 text-primary'>{order.name}</h6>
                <p>{order.street}</p>
                 <p>{`${order.city} ${order.zipcode}`}</p>
                 <p>{order.phone}</p>
              </div>
              
            </div>
            <div className="col-6 d-flex justify-content-evenly">
                   <div>
                   </div>
                   <div>
                   <div className='mb-2'><strong >itmes :</strong><span> {order.order.length}</span>
                   </div>                  
                    <p>Method:{order.method}</p>
                    <p>Payment:{order.payment}</p>
                    <p>Date: {order.date}</p>
                   </div>
                   <div>{order.price}</div>
                   <div>
                    <select name="state" onChange={(e)=>setStateOrder(e.target.value)}>
                      <option value="0">to the storge</option>
                       {
                       //page for employy in storge update by him to if  I am employ in storge i can update the option
                       
                       }
                      <option value="1">out for delivery</option>
                      {
                        // page for delivery update by him to if I am employ als delevery i can update the option to recieved when i resevied it to costumer
                      }
                      <option value="3">recieved</option>

                    </select>
                   </div>
            </div>

         </div>
   </>
  )
}

export default OrderItem
