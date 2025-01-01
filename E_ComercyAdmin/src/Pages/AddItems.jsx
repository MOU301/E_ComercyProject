import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import axios from 'axios';
import { toast } from 'react-toastify';
import { BsDiscord } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const AddItems = () => {
  const navigate=useNavigate()
  const [image1,setImage1]=useState(false);
  const [image2,setImage2]=useState(false);
  const [image3,setImage3]=useState(false);
  const [image4,setImage4]=useState(false);

  const [name,setName]=useState('');
  const [description,setDescription]=useState('')
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('men')
  const [type,setType]=useState('topwear');
  const [bestseller,setBestseller]=useState(false)
  const [sizes,setSizes]=useState([]);
  const sizesStr=sizes.join(',');

const onSubmitHandler=async (e)=>{
  e.preventDefault();
  try{
    const formData = new FormData();
    formData.append("image1",image1);
    formData.append('image2',image2);
    formData.append('image3',image3);
    formData.append('image4',image4);
    formData.append('title',name);
    formData.append('description',description);
    formData.append('category',category);
    formData.append('type',type);
    formData.append('bests',bestseller);
    formData.append('price',price);
    formData.append('sizes',sizesStr);
   const response=await axios.post('http://localhost/study/rest_api/E_ComercyAPI/API/addProduct.php',formData,{headers:{
        'Content-Type': 'multipart/form-data'
   }});
   if(response.data.state){
    
    navigate('/list-item');
    toast.success('add product success');
    setName('');
    setDescription("");
    setPrice('');
    setBestseller(false);
    setImage1(false);
    setImage2(false);
    setImage3(false);
    setImage4(false);
    setSizes([])
  }else{
    toast.error("there is error in add product");
  }
  }
  catch(e){
    toast.error("there is error ich weis was is das");
  }}

  return (
   <>
   <Container>
     <form onSubmit={onSubmitHandler} enctype="multipart/form-data" >
      <div className='images my-2'>
        <p className=' py-3'> upload images :</p>
        <label htmlFor="image1" >
            <img src={!image1 ? './src/images/upload.jpg' : URL.createObjectURL(image1)}  />
            <input onChange={(e)=>setImage1(e.target.files[0])} id='image1' name='image1' type="file" hidden/>
        </label>
        <label htmlFor="image2" >
            <img src={!image2 ? './src/images/upload.jpg' : URL.createObjectURL(image2)}  />
            <input onChange={(e)=>setImage2(e.target.files[0])} id='image2' name='image2' type="file" hidden/>
        </label>
        <label htmlFor="image3" >
            <img src={!image3 ? './src/images/upload.jpg' : URL.createObjectURL(image3)}  />
            <input onChange={(e)=>setImage3(e.target.files[0])} id='image3' name='image3' type="file" hidden/>
        </label>
        <label htmlFor="image4" >
            <img src={!image4 ? './src/images/upload.jpg' : URL.createObjectURL(image4)} />
            <input onChange={(e)=>setImage4(e.target.files[0])} id='image4' name='image4' type="file" hidden/>
        </label>
      </div>

      <div className='my-3'>
        <p className='py-2'>product name :</p>
        <input className='mx-2' onChange={(e)=>setName(e.target.value)} value={name} type="text" name='product_name' placeholder='product name' required/>
      </div>
  
      <div className='my-3'>
        <p className='py-2'>product description :</p>
        <textarea className='mx-2' onChange={(e)=>setDescription(e.target.value)} value={description} name="product_desc" placeholder='product description'>
        </textarea>
      </div>
      <div className='d-flex justify-content-between align-content-center align-items-center'>
      <div className='my-3'>
          <p className='py-2'>product category :</p>
          <select className='mx-2' onChange={(e)=>setCategory(e.target.value)} name='product_category'>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className='my-3'>
          <p className='py-2'>product type :</p>
          <select className='mx-2' onChange={(e)=>setT(e.target.value)} name='product_type'>
            <option value="topwear">Topwear</option>
            <option value="winterwear">Winterwear</option>
            <option value="bottomwear">Bottomwear</option>
          </select>
        </div>
         <div className='my-3'>
          <p className='py-2'>product price :</p>
          <input className='mx-2' onChange={(e)=>setPrice(e.target.value)} value={price} type="number" name='price' placeholder='product price'/>
         </div>

      </div>
 
       
          <div className='my-3'>
            <p className='py-2'>prouduct Size :</p>
            <div className='mx-2 d-flex justify-content-start align-content-center align-items-center'>

              <div onClick={()=>setSizes(pre=>pre.includes('S') ? pre.filter(item=>item!='S') : [...pre,'S'])} className={sizes.includes("S") ? 'bg-orange border-radius p-2 m-2':'bg-gray border-radius p-2 m-2'}>
                <p>S</p>
              </div>
              <div  onClick={()=>setSizes(pre=>pre.includes('L') ? pre.filter(item=>item!='L') : [...pre,'L'])} className={sizes.includes("L") ? 'bg-orange border-radius p-2 m-2':'bg-gray border-radius p-2 m-2'}>
                <p>L</p>
              </div>
              <div  onClick={()=>setSizes(pre=>pre.includes('M') ? pre.filter(item=>item!='M') : [...pre,'M'])} className={sizes.includes("M") ? 'bg-orange border-radius p-2 m-2':'bg-gray border-radius p-2 m-2'}>
                <p>M</p>
              </div>
              <div  onClick={()=>setSizes(pre=>pre.includes('XL') ? pre.filter(item=>item!='XL') : [...pre,'XL'])} className={sizes.includes("XL") ? 'bg-orange border-radius p-2 m-2':'bg-gray border-radius p-2 m-2'}>
                <p>XL</p>
              </div>
              <div  onClick={()=>setSizes(pre=>pre.includes('XXL') ? pre.filter(item=>item!='XXL') : [...pre,'XXL'])} className={sizes.includes("XXL") ? 'bg-orange border-radius p-2 m-2':'bg-gray border-radius p-2 m-2'}>
                <p>XXL</p>
              </div>
            </div>
          </div>
          <div className='my-2'>
            <input type="checkbox" id='bestseller' onClick={()=>setBestseller(e=>!e)} checked={bestseller}/>
            <label className='mx-2' htmlFor="bestseller">Add to bestsellers</label>
          </div>
          <button type='submit' className='btn bg-orange'>Add pruduct</button>
     </form>
  



   </Container>
   </>
  )
}

export default AddItems
