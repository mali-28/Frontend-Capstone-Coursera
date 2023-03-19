import React, { useState } from 'react'
import constant from "../utils/constant.json"
import { useDetails} from "../hooks/useDetails"

export default function BookingForm() {
    const {timeSlot,details, setDetails,availableSlot} = useDetails()
    console.log(details,"constant")
console.log(new Date())
    const handleChange = (e) => {
        const { name, value } = e?.target
        console.log({ name, value })
        setDetails((preVal) => {
            return {...preVal, [name]: value}
        })
    }
    return (
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label htmlFor="res-date">Choose date</label>

            <input type="date" name="date" value={details.date} onChange={handleChange} id="res-date" />
            <label htmlFor="res-time">Choose time</label>

            <select id="res-time " name="time" value={details.time} onChange={handleChange}> 
                {availableSlot?.map((value,ind) => <option key={ind}>{value}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" name="no_seat" value={details.no_seat} onChange={handleChange} placeholder="1" min="1" max="10" id="guests" />

            <label htmlFor="occasion">Occasion</label>
            <select name="occasion" id="occasion" value={details.occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation"  />
        </form>
    )
}
