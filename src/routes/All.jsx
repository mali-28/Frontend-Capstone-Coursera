import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookingPage from '../page/BookingPage'
import HomePage from '../page/HomePage'

export default function All() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
