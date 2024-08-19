import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import CourseDetails from './pages/CourseDetails'
import Courses from './pages/Courses'
import About from './pages/About'
import CategoryDetails from './pages/CategoryDetails'
import ContactUs from './pages/ContactUs'
import BlogDetails from './pages/BlogDetails'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import ProductDetails from './pages/ProductDetails'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Payment from './pages/Payment'
// import Shop from './pages/Shop'
// import Cart from './pages/Cart'
// import Profile from './components/Profile'







const App = () => {
  return (
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/coursedetails" element={<CourseDetails />}/>
    <Route exact path="/courses" element={<Courses/>}/>
    <Route exact path="/categorydetails" element={<CategoryDetails />}/>
    <Route exact path="/blogdetails" element={<BlogDetails />}/>
    <Route exact path="/aboutus" element={<About/>}/>
    <Route exact path="/contactus" element={<ContactUs/>}/>
    {/* <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
 
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/payment" element={<Payment/>}/>
    <Route exact path="/shop" element={<Shop/>}/>
    <Route exact path="/productdetails" element={<ProductDetails/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/profile" element={<Profile/>}/> */}



    </Routes>
  )
}

export default App