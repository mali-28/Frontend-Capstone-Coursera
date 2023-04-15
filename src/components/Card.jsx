import React from 'react'

export default function Card({ image, title, price, description }) {
    return (


        <div className=" bg-white   rounded-lg shadow  overflow-hidden">
            <div className='h-44 overflow-hidden'>
                <img className="mt-1 rounded-t-lg h-full w-full" src={image} alt={title || "image"} />

            </div>
            <div className="p-5 dark:bg-gray-100 dark:border-zinc-300 h-72">
                <div className='flex justify-between'>

                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title || ""}</p>

                    <p className='mt-1 text-gray-900 dark:text-rose-600'>{`${price || ""}`}</p>
                </div>
                <p className="mb-3 h-40 overflow-hidden font-normal text-gray-700 dark:text-gray-400">{description || ""}</p>
                <button name="order now" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    Order a delivery
                    <i className='fa fa-bicycle text-lg ml-2'></i>
                </button>
            </div>

        </div>

    )
}
