import React from 'react'
import Banner from './shared/Hero/Banner'
import Pricing from './shared/Hero/Pricing'
import ShowDemo from './shared/Hero/ShowDemo'

export default function Hero() {
  return (
    <section className='pt-4'>
      <Banner/>
      <Pricing/>
      <ShowDemo/>
    </section>
  )
}
