import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookingPage from '../page/BookingPage'
import HomePage from '../page/HomePage'
import About from '../page/About'
import NavBar from '../components/NavBar'
import Login from '../page/Login'
import BookingConfirmation from '../page/BookingConfirmation'

export default function All() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/bookingConfirmation" element={<BookingConfirmation />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}
