import Link from 'next/link'
import React from 'react'
import LinkButton from '../../general/LinkButton'

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
        className='flex flex-wrap w-full bg-blue-100 rounded-5xl m-auto'>
        <div 
        className='w-full w-11/12 m-auto -mt-5 sm:mt-0 md:w-1/2 h-[29rem]'
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1647641922521-86048be4898b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)', backgroundSize:"cover"}}>

        </div>
        <div className='flex w-full md:w-1/2 h-full pt-7 md:pt-0 md:my-7 pb-10'>
          <div className='m-auto text-white'>
            <h1 
                className='text-4xl md:text-6xl font-bold m-auto mb-5 sm:mb-10 md:py-0 text-center'>
                    Services Offered</h1>
            <ul className='mb-10 sm:mb-14'>
              {ListServices.map(ls=> <li className='text-xl py-1 font-semibold' key={ls}><i class="fa-solid fa-paw mr-5"></i>{ls}</li> )}
            </ul>
            <LinkButton link="/services" text="Find Out More" />
          </div>
        </div>
    </div>
  )
}
