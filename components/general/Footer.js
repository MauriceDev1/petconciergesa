import React from 'react'
import Image from 'next/image'
import WhiteLogo from '../../assets/images/white_logo.png'
import { 
  BsFacebook, 
  BsLinkedin,
  BsInstagram,
  BsMessenger,
  BsWhatsapp
} from 'react-icons/bs';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className='flex w-full bg-gray-blue py-10'>
          <div className='flex flex-wrap w-8/12 m-auto py-12'>
            <div className='w-full md:w-1/4 pr-8'>
              <Image
                src={WhiteLogo} 
                alt="Company Logo" 
                width={200} 
                height={70} />
              <p className='text-white pt-5 text-sm'>Pet Concierge is a registered institution registered with the </p>            
            </div>
            <div className='w-full md:w-1/4 mt-5'>
              <h3 className='text-white font-semibold'>Company</h3>
              <ul className='text-white pt-3'>
                <Link href="/">
                  <a>
                    <li>Home</li>
                  </a>
                </Link>
                <Link href="/about">
                  <a>
                    <li>About</li>
                  </a>
                </Link>
                <Link href="/services">
                  <a>
                    <li>Services</li>
                  </a>
                </Link>
                <Link href="/prices">
                  <a>
                    <li>Prices</li>
                  </a>
                </Link>
                <Link href="/contact">
                  <a>
                    <li>Contact</li>
                  </a>
                </Link>
              </ul>
            </div>
            <div className='w-full md:w-1/4 mt-5'>
              <h3 className='text-white font-semibold'>Services</h3>
              <ul className='text-white pt-3'>
                <li>Grooming</li>
                <li>Sitting</li>
                <li>Taxi</li>
                <li>Walking</li>
                <li>Training</li>
              </ul>
            </div>
            <div className='w-full md:w-1/4 mt-5'>
              <h3 className='text-white font-semibold'>Social Media</h3>
              <div className='flex text-white mt-5 text-lg'>
                <div className='pr-5 mt-1'>
                  <Link href="https://www.facebook.com/petconciergesa">
                    <BsFacebook /> 
                  </Link>
                </div>
                <div className='px-5 mt-1'>
                  <Link href="https://www.linkedin.com/company/pet-concierge-pty-ltd">
                    <BsLinkedin />
                  </Link>
                </div>
                <div className='px-5 mt-1'>
                  <Link href="https://www.instagram.com/petconciergeptyltdsa/">
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='flex w-full bg-gray-blue py-2'>
        <div className='flex w-10/12 m-auto text-white '>
            <div>

            </div>
            <div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Footer