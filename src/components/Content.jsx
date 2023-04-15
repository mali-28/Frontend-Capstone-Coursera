import React from 'react'
import { Link } from "react-router-dom";
import Food from "../assets/Food.jpg"
export default function Content() {
    return (
        <section className='py-6 ' style={{backgroundColor: "#495f56"}}>
            <div className='w-3/5 mx-auto grid lg:grid-cols-3  grid-cols-1 '>
                <div className='my-auto px-3 '>
                    <h1 className='text-yellow-400 text-4xl font-serif'>Little Lemon</h1>
                    <h5 className='text-2xl text-white'>Chicago</h5>
                    <p className='text-lg mt-2  text-white'>We are a family owned <tr/> Medditerranean restaurant, <br/> focused on triditional <br/> recipes served with a modern <br/>twist.</p>
                    <Link to="/booking">
                    <button className="bg-yellow-500 my-2 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
                    Reserve a Table
                    </button>
                    </Link>
                </div>
                <div className=' md:col-start-3 col-span-6 h-64 w-72 relative top-10  rounded-3xl '>
                    <div className='h-80 absolute overflow-hidden rounded-3xl '>
                    <img className=' w-full bg-sky-900' src={Food} alt="Food" />
                    </div>
                </div>

            </div>
        </section>
    )
}
