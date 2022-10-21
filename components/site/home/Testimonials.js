import Image from 'next/image'
import React from 'react'
import Profile from '../../../assets/images/profile_image.png'

export default function Testimonials() {
  return (
    <div className='flex w-full md:h-[70vh] text-gray-600 pt-16 md:pt-0 pb-14 md:pb-0'>
        <div className='flex flex-wrap w-10/12 md:w-4/6 m-auto'>
          <h1 
            className='text-4xl md:text-6xl font-bold m-auto pb-10'
            style={{fontFamily: 'Blueberry'}}>What Our Clients Have To Say</h1>
          <div className='flex flex-wrap w-full justify-center'>
            <p className='italic px-30 text-xl text-gray-500'><span>
            &quot; It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as thei. &quot; ~ Name of person 
            </span>
            </p>
            <div 
              className='w-32 h-32 mt-10  bg-gray-100 justify-center rounded-full'>
                <Image src={Profile} alt="profile image" width={130} height={105} />
              </div>
          </div>
        </div>
    </div>
  )
}
