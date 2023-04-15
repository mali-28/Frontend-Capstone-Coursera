import React, { useEffect } from 'react';
import './BookingConfirmation.css';
import { useDetails } from '../hooks/useDetails';
import { useNavigate } from 'react-router-dom';

const BookingConfirmation = () => {
  const navigate = useNavigate()
  const { details , resetForm} = useDetails();
  useEffect(() => {
    if(!details.no_seat) navigate("/booking")
    
  },[details.no_seat])
  return (
    <main>
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      >
        <h1>Thank you for your booking</h1>
        <p>
          We confirm your reservation for {details.date} at {details.time} for {details.no_seat}
          {`guest${details > 1 ? 's' : ''}`}
        </p>
        {details.occasion && (
          <p>
            We noticed that you want to celebrate{' '}
            {details.occasion === 'birthday' ? 'a' : 'an'} {details.occasion}. Thank you for
            your trust in us, we will handle your request with priority!{' '}
          </p>
        )}
        { (
          <p>
            You also sent some specific message. Our team will definetely
            consider your message. In case of necessity we will send you an
            email.
          </p>
        )}
      </section>
    </main>
  );
};

export default BookingConfirmation;
