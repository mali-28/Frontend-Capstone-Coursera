import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetchAPI } from '../utils/apiMock';
import { initialState } from '../utils/constant';

export const DetailsContext = createContext(initialState)

export function DetailsProvider({ children }) {
    const [timeSlot, setTimeSlot] = useState([]);
    const [details, setDetails] = useState({
        date: (new Date()).toISOString().slice(0,10),
        time: "",
        no_seat: 0,
        occasion: ""
    })
    const resetForm = () => setDetails({
        date: (new Date()).toISOString().slice(0,10),
        time: "",
        no_seat: 0,
        occasion: ""
    })
    const contextValue = {
        timeSlot,
        setTimeSlot,
        details,
        setDetails,
        resetForm
    }

    useEffect(() => {
        if (details.date) setTimeSlot(fetchAPI(new Date(details.date)))
    }, [details?.date])
    
    return (
        <DetailsContext.Provider value={contextValue}>
            {children}
        </DetailsContext.Provider>
    )
}

export const useDetails = () => useContext(DetailsContext)

