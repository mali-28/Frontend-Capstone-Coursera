import React from 'react'
import Card from '../components/Card'
import Content from '../components/Content'
import NavBar from '../components/NavBar'

export default function HomePage() {
    return (
      <>
    <NavBar />
    <Content/>
    <section className='my-28 w-8/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
      <Card />
      <Card />
      <Card />
    </section>
      </>
  )
}
