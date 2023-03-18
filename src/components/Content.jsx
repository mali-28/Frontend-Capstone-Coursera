import React from 'react'

export default function Content() {
    return (
        <section className='bg-gray-800 py-4 h-72 '>
            <div className='w-8/12 mx-auto grid grid-cols-3 gap-4'>
                <div>
                    <h1 className='text-yellow-400 text-4xl font-serif'>Little Lemon</h1>
                    <h5 className='text-2xl text-white'>Chicago</h5>
                    <p className='text-lg mt-2  text-white'>We are a family owned Medditerranean restaurant, focused on triditional recipes served with a modern twist.</p>
                    <button class="bg-yellow-500 my-2 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
                        Reserve a Table
                    </button>
                </div>
                <div className='bg-white col-start-3 col-span-6 h-80 w-80 relative right-2 top-8 rounded-3xl overflow-hidden'>
                    <img className='h-full w-full bg-sky-900' src="/logo512.png" /></div>

            </div>
        </section>
    )
}
