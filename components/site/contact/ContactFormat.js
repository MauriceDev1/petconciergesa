import React from 'react'
import Contact from '../../forms/Contact'

export default function ContactFormat() {
  return (
    <div className='flex flex-wrap w-full justify-center'>
        <div className='flex flex-wrap w-11/12 md:w-9/12 py-10'>
          <div className='w-full md:w-1/2'>
            <Contact />
          </div>
          <div className='w-full md:w-1/2 md:pl-10 mt-10 md:mt-0'>
            <div className='text-xl font-semibold'>
              Address
            </div>
            <div className='mt-5'>
              13 Myrtle Road<br></br> Rondebosch<br></br> Western Cape<br></br> Cape Town<br></br> 7700
            </div>
            <div className='text-xl font-semibold mt-10'>
              Contact
            </div>
            <div className='mt-5'>
              +27 67 642 0911 <br></br>+27 694 387 5111
            </div>
            <div className='w-full bg-gray-100 h-52 mt-10'>

            </div>
            </div>
          </div>
      </div>
  )
}
