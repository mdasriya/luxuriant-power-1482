import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ProductDetail from '../Pages/ProductDetail'
import Products from '../Pages/Products'
import RegisterPage from '../Pages/RegisterPage'
import Cart from '../Pages/Cart'
import Basket from '../Pages/Basket'
import Flower from '../Pages/Flower'
import SingleProduct from '../Pages/SingleProduct'



const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:id' element={<ProductDetail/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
   <Route path='/cart' element={<Cart />}></Route>
   <Route path='/flower' element={<Flower />}></Route>
   <Route path='/basket' element={<Basket />}></Route>
   <Route path='/singleProduct' element={<SingleProduct />}></Route>
    </Routes>
  )
}

export default AllRoutes
