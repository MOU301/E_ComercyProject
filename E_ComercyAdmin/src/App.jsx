import React, { startTransition } from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import MainLayOut from './MainLayOut/MainLayOut'
import './App.css'
import AddItems from './Pages/AddItems'
import Orders from './Pages/Orders'
import ListItem from './Pages/ListItem'
import { useState,useEffect } from 'react'
const App = () => {
  //setLogin from local storage or coockie
  const [login,setLogin]=useState(true);
// useEffect(()=>{
//   const stat= JSON.parse(localStorage.getItem('login'));
//   if(stat){
//     console.log('herre')
//   }
// },[])


  const router=createBrowserRouter(
    createRoutesFromElements(
      <> 
      
      <Route path='/' element={login ? <MainLayOut/>:''}>
      <Route index element={login ? <Home/>:<Login/>}/>
      <Route path='/add-item' element={login ? <AddItems/>:<Login/>} />
      <Route path='/orders' element={login ?  <Orders/>:<Login/>} />
      <Route path='/list-item' element={login ? <ListItem/>:<Login/>} />
      <Route path='*' element={<NotFound/>}/>
      </Route>
      </>

    )
  )
  return <RouterProvider router={router}/>
}

export default App
