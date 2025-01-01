import { createContext } from "react";
import { useState,useEffect } from "react";
import axios  from "axios";
// import products from '../../products.json';


export const ShopeConext=createContext(null);
const ShopeConextProvider=({children})=>{
   const URL='http://localhost/study/rest_api/E_ComercyAPI/API';
   
    const [products ,setProducts]=useState([]);
    const [user,setUser]=useState(false)
    const [isClose,setIsClose]=useState(false);
    const [order,setOrder]=useState([]);
    const [size,setSize]=useState(null);
    const [price,setPrice]=useState();
    const [quantity,setQuantity]=useState(0);
    const [idItem,setIdItem]=useState();
    const [search,setSearch]=useState('');
    const [cartItems,setCartItems]=useState([]);
    const [productData,setProductData]=useState(false);
    const [count,setCount]=useState(0)
    const currency='$';
    const delivery_fee=10;
    useEffect(()=>{
        axios.get(`${URL}/readProduct.php`)
        .then(({data})=>{
            setProducts(data);
        }).catch(e=>{
          console.log('es gibt  error in fetch the data')
        })
      },[])
   
const value={
products,setProducts,currency,delivery_fee,isClose,setIsClose,URL,
search,setSearch,count,setCount,setQuantity,
cartItems,setCartItems,price,setPrice,
setProductData,quantity,
size,setSize,idItem,setIdItem,productData
,order,setOrder,user,setUser
}
return ( 
<ShopeConext.Provider value={value}>
{children}
</ShopeConext.Provider>)
}
export default ShopeConextProvider;
