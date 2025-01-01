import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../Components/Spinner'
import products from '../../product.json';
const ListItem =()=> {
  const URL='http://localhost/study/rest_api/E_ComercyAPI/API';
const [list,setList]=useState([])
const [load,setLoad]=useState(true);
const styleTr=(item)=>{
  if(item.includes('das')){
     return 'bg-warning'
  }
  else if(item.includes('der')){
   return 'bg-primary'
  }
  else{
    return 'bg-danger'
  }
}
const fetchData=async ()=>{
 await axios.get(`${URL}/readProduct.php`)
 .then(({data})=>{setList(data);setLoad(false)}).catch(e=>{toast.error('there is error hier');setLoad(false)});
}
const removeProduct=async(id)=>{
 const remove= confirm('are your sure ?') ;
 if(remove){
  try{
  
     const respons=await axios.delete(`${URL}/deleteProduct.php`,{data:{id:id}});
    console.log(respons.data);
     if(respons.data.message){
      console.log('delete');
        setList(list.filter(item=>item.id!=id));
        toast.success('delete the data now')
    }else{console.log('not delete')}
     
    
  }catch(e){

  }};
}
  useEffect(()=>{
     //send request to server to get the data list items by axios
      fetchData();
      console.log('fetch data now ')

  },[])
  useEffect(()=>{
    console.log(list);
  },[list])
  return load ? <Spinner loading={load} /> : (
   <Container>  
     <p className='my-3 text-center'>All Products List</p>
{  list.length<=0 ? (<><h5 className='text-center text-danger'>there is not product in database !!!</h5></>):(<table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>


    </tr>
  </thead>
  <tbody>
    { list.map((item,index)=>(
         <tr key={index} className={styleTr(item.title)}>
         <td className='image' scope="row">
          <img src={`${URL}/${item.image1}`} /></td>
         <td>{item.title}</td>
         <td>{item.category}</td>
         <td>${item.price}</td>
         <td  onClick={()=>removeProduct(item.id)}><botton className="btn bg-orange">X</botton></td>
       </tr>
    ))}
  </tbody>
</table>
)}

   </Container>

  )
}

export default ListItem
