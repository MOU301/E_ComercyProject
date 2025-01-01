import React, { useContext } from 'react'
// import products from '../../products.json';
import Product from '../Components/Product'
import { useState,useEffect } from 'react';
import Header from '../Components/Header';
import { ShopeConext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
const Collection = () => {
   
    const [category,setCategory]=useState([]);
    const [type,setType]=useState([]);
    const [sort,setSort]=useState('relavent');
    const [pFilter,setPFilter]=useState([]);
   const {search,user,products}=useContext(ShopeConext);
 

   const navigate=useNavigate();
    const toggalCategory=(e)=>{
       if(category.includes(e.target.value)){
          setCategory(pre=>pre.filter(item=>item!==e.target.value))
        }
       else{
          setCategory(pre=>[...pre,e.target.value])
        }
       }
    const toggalType=(e)=>{
        if(type.includes(e.target.value)){
        setType(pre=>pre.filter(item=>item!==e.target.value))
        }
        else{
        setType(pre=>[...pre,e.target.value])
        }
    }
const applayFilter=()=>{
    let productsCopy=products.slice();
    if(category.length>0){
        productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }
    if(type.length>0){
        productsCopy=productsCopy.filter(item=>type.includes(item.type));
    }
    if(search.length>0){
        productsCopy=productsCopy.filter(item=>item.title.includes(search));
    }
  
    setPFilter(productsCopy);
}
const sortProduct=()=>{
    const pCopy=pFilter.slice();
  
    switch(sort){
        case 'low-high':
           setPFilter(pCopy.sort((a,b)=>a.price-b.price));
            break;
        case 'high-low':
            setPFilter(pCopy.sort((a,b)=>b.price-a.price));
            break;
        default :
          applayFilter();
        break;
    }
}

useEffect(()=>{
    sortProduct();
},[sort])
 useEffect(()=>{
    applayFilter();
},[type,category,search,products]);
useEffect(()=>{console.log(products)},[])
  return products.length>0 ? (
   <>
   <section className='my-3'> 
    <div className="container">
        <div className="row">
        <div className="col-md-3 slid">
            <h4>FILTERS</h4>
            <div className='my-3 p-2'>
                <h6>CATEGORIES</h6>
                <input onChange={(e)=>toggalCategory(e)} value={'men'} type="checkbox" id='Men' /> <label className='mx-2' htmlFor="Men"> Men</label><br/>
                <input onChange={(e)=>toggalCategory(e)} value={'women'} type="checkbox" id='Women' /> <label  className='mx-2' htmlFor="Women"> Women</label><br/>
                <input onChange={(e)=>toggalCategory(e)} value={'kids'}  type="checkbox" id='Kids' /> <label className='mx-2' htmlFor="Kids"> Kids</label>

            </div>
            <div className='my-3 p-2' >
            <h6>TYPE</h6>
                <input onChange={(e)=>toggalType(e)} value={'topwear'} type="checkbox" id='Topwear' /> <label className='mx-2' htmlFor="Topwear"> Topwear</label><br/>
                <input onChange={(e)=>toggalType(e)} value={'bottomwear'}  type="checkbox" id='Bottomwear' /> <label className='mx-2' htmlFor="Bottomwear">Bottomwear</label><br/>
                <input onChange={(e)=>toggalType(e)} value={'winterwear'} type="checkbox" id='Winterwear' /> <label className='mx-2' htmlFor="Winterwear"> WinterWear</label>

            </div>
        </div>
        <div className='col-md-9'>
            <div className="d-flex justify-content-between">
                   <Header Ftext='ALL' Stext='COLLECTIONS'/>
                 <div className='select'><span className='fs-5'>sort by :</span>
                    <select onChange={(e)=>setSort(e.target.value)}>
                        <option value="relavent">Relavent</option>
                        <option value="low-high">Low To High</option>
                        <option value="high-low">High To Low</option>
                    </select>
                </div>
            </div>
            <div className='row product'>
            {pFilter.map(product=>{
               return ( <div className="col-md-3 p-2">
                 <Product product={product}/>
                </div> )
        })}

            </div>
        </div>
    </div>
    </div>
   </section>
   
   </>
  ):(<h3>there is not product please retry  </h3>)
}

export default Collection
