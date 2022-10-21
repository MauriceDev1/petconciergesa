import Link from 'next/link'
import React from 'react'
import LinkButton from '../../general/LinkButton'

export default function IntroPanel() {
  return (
    <div className='flex w-full bg-white text-gray-600 py-16 sm:py-20'>
        <div className='flex flex-wrap w-11/12 md:w-4/6 m-auto'>
          <h1 
            className='text-4xl md:text-6xl font-bold m-auto pb-7'
            style={{fontFamily: 'Blueberry'}}>
              Pet Care Service</h1>
          <h3 className='text-normal text-lg md:text-xl w-11/12 m-auto text-center pb-10'>We provide concierge service to pet parents and their fur babies. Making every experience stress free. We do all the running around for you, with the utmost love and respect for each pet we meet. Striving to always engage with them at their level in respect to their unique personalities, likes and preferences in mind.</h3>
          <LinkButton
            link="/about" 
            text="Get To Know Us" />
        </div>
    </div>
  )
}
