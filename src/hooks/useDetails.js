import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { availableTime } from '../constant';

export const DetailsContext = createContext(null)

function AvailableTimeReducer(state, action) {
    console.log(state,"state",action,"action")
    switch (action.type) {
        case 'UpdateSlot':   
      const {date,reserveTime} = action.payload      
        return availableTime.filter((val)=> !reserveTime[date].includes(val))
      default:
        return availableTime;
    }
  }


export function DetailsProvider({ children }) {
    const [availableSlot, dispatch] = useReducer(AvailableTimeReducer, availableTime);
    const [timeSlot, setTimeSlot] = useState(availableTime);
    const [reserveTime, setReserveTime] = useState({});
    const [details, setDetails] = useState({
        date: (new Date()).toISOString().slice(0,10),
        time: "",
        no_seat: 0,
        occasion: ""
    })
    console.log(reserveTime,"reserveTime")
    const contextValue = {
        timeSlot,
        setTimeSlot,
        reserveTime,
        setReserveTime,
        details,
        setDetails,
        availableSlot
    }
    const initializeTimes = (date, reserveTimeArr) =>  availableTime.filter((val)=> !reserveTimeArr[date].includes(val) )

    useEffect(() => {
        if (details.time) {
            if (details.date in reserveTime) setReserveTime((pre) => {
                return { ...pre, [details.date]: [...pre[details.date], details.time] }
            })
            else setReserveTime((pre) => {
                return { ...pre, [details.date]: [details.time] }
            })
        }
    }, [details.date,details.time ])
    
    // useEffect(() => {
    //     if(details.date in reserveTime) setTimeSlot(initializeTimes(details.date,reserveTime))
    // }, [details.date, reserveTime])
    
    useEffect(() => {
        if (details.date in reserveTime) dispatch({ type: "UpdateSlot", payload: { date: details.date, reserveTime } })
    }, [reserveTime])
    
    return (
        <DetailsContext.Provider value={contextValue}>
            {children}
        </DetailsContext.Provider>
    )
}

export const useDetails = () => useContext(DetailsContext)

