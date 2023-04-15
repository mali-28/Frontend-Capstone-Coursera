import React from 'react'
import Card from './Card'
import { specialsData } from '../utils/constant'
export default function Main() {
  return (
    <><section className='mb-10'>
    <div className='mt-28 mb-12'>
    <div className=' w-3/5 mx-auto flex justify-between items-center px-3'>
    <h1 className='text-5xl text-slate-700 text-center'>This week's specials!</h1>
    <button className='block py-2 px-4 text-2xl rounded-lg  bg-amber-400 text-white cursor-pointer '>Online Menu</button>
    </div>
    </div>
    <div className=' w-3/5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
    {
      specialsData?.map(({ img, title, price, description }, id) => {
        return <>
        <Card key={id + title} image={img} title={title} price={price} description={description} />
        </>
      })
    }
      </div>
      </section>
    </>
  )
}
