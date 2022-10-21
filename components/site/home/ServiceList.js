import Link from 'next/link'
import React from 'react'

export default function ServiceList() {

    const ListServices = [
        'Pet Grooming',
        'Pet Sitting',
        'Pet Taxi',
        'Dog walking',
        'Pet Training'
    ]

  return (
    <div 
        className='flex flex-wrap w-full bg-pink-200 sm:h-[70vh] rounded-5xl m-auto'>
        <div 
        className='w-full w-11/12 m-auto -mt-5 sm:mt-0 md:w-1/2 h-full h-[40vh] md:h-[70vh]'
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1647641922521-86048be4898b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)', backgroundSize:"cover"}}>

        </div>
        <div className='flex w-full md:w-1/2 h-full pt-7 md:pt-0 md:mt-0 pb-10 md:pb-0'>
          <div className='m-auto text-gray-800'>
            <h1 
                className='text-4xl md:text-6xl font-bold m-auto mb-5 sm:mb-10 md:py-0 text-center'
                style={{fontFamily: 'Blueberry'}}>
                    Services Offered</h1>
            <ul className='mb-10 sm:mb-14'>
              {ListServices.map(ls=> <li className='text-xl py-1 font-semibold' key={ls}><i class="fa-solid fa-paw mr-5"></i>{ls}</li> )}
            </ul>
            <Link href="/services">
              <a
                className='rounded-md md:text-xl bg-pink-600 px-5 m-auto py-2 md:py-3 text-white hover:border-r-4 hover:border-b-4 hover:border-pink-500'>
                  Find Out More
              </a>
            </Link>
          </div>
        </div>
    </div>
  )
}
