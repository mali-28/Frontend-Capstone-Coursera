import React from 'react'
import BookingForm from '../components/BookingForm'
import { useDetails } from '../hooks/useDetails'
import { useNavigate } from 'react-router-dom';
export default function BookingPage() {
  const navigate = useNavigate()

  const { timeSlot, details, setDetails } = useDetails()

  return (
    <BookingForm navigate={navigate} timeSlot={timeSlot} details={details}  setDetails={setDetails } />
  )
}
