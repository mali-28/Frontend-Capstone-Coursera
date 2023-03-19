import React from 'react'
import { useDetails } from "../hooks/useDetails"
import { submitAPI } from '../utils/apiMock'
import { events } from '../utils/constant';

// export default function BookingForm() {
//     const {timeSlot, details,resetForm, setDetails } = useDetails()
//     const handleChange = (e) => {
//         const { name, value } = e?.target
//         console.log({ name, value })
//         setDetails((preVal) => {
//             return { ...preVal, [name]: value }
//         })
//     }
//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         const isSubmit = await submitAPI(details)
//         console.log(isSubmit,"isDinmit")
//         if(isSubmit) resetForm()
//     }
//     return (
//         <>
//             <h1>Book Now</h1>
//             <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
//                 <label htmlFor="res-date">Choose date</label>

//                 <input type="date" name="date" value={details.date} onChange={handleChange} id="res-date" />
//                 <label htmlFor="res-time">Choose time</label>

//                 <select id="res-time " name="time" value={details.time} onChange={handleChange}>
//                     {timeSlot?.map((value, ind) => <option key={ind}>{value}</option>)}
//                 </select>

//                 <label htmlFor="guests">Number of guests</label>
//                 <input type="number" name="no_seat" value={details.no_seat} onChange={handleChange} placeholder="1" min="1" max="10" id="guests" />

//                 <label htmlFor="occasion">Occasion</label>
//                 <select name="occasion" id="occasion" value={details.occasion} onChange={handleChange}>
//                     <option>Birthday</option>
//                     <option>Anniversary</option>
//                 </select>

//                 <input type="submit" value="Reserve a Table" />
//             </form>
//         </>
//     )
// }


const options = ['Option 1', 'Option 2', 'Option 3']; // array of options for select

function Form() {
    const { timeSlot, details, resetForm, setDetails } = useDetails()
    const handleChange = (e) => {
        const { name, value } = e?.target
        console.log({ name, value })
        setDetails((preVal) => {
            return { ...preVal, [name]: value }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isSubmit = await submitAPI(details)
        console.log(isSubmit, "isDinmit")
        if (isSubmit) resetForm()
    }
    return (

        <form onSubmit={handleSubmit} className="my-10 mx-auto md:w-1/2 w-8/12 flex flex-col space-y-4">
            <label htmlFor="res-date">Date:</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={details.date}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="time"
                value={details.time}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {timeSlot?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="no_seat"
                value={details.no_seat}
                onChange={handleChange}
                placeholder="1"
                min="1"
                max="10"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="occasion">Occasion</label>

            <select
                id="occasion"
                name="occasion"
                value={details.occasion}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {events?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Submit
            </button>
        </form>
    );
}

export default Form;



