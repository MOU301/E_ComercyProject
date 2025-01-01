import React from 'react'
import './App.css'
import MainLayOut from './Layout/MainLayOut';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CreacteAcount from './pages/CreateAcount';
import Product,{ProductLoader} from './Pages/Product';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayOut/>}>
       <Route index element={<Home/> } />
       <Route path='/about' element={<About/>} />
       <Route path='/collection' element={<Collection/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/createAcount' element={<CreacteAcount/>} />
       <Route path='/product/:id' element={<Product/>} loader={ProductLoader}/>
       <Route path='/cart' element={<Cart />} />
       <Route path='/place-order' element={<PlaceOrder/>}/>
       <Route path='/orders' element={<Orders/>} />
       <Route path='*' element={<NotFound/>} />
    </Route>))
return <RouterProvider router={router} />
}

export default App
