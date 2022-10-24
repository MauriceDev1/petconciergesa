import { Fragment, useState } from 'react'
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Logo from '../../assets/images/logo.png'

import Image from 'next/image';
import Button from './Button';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Prices', href: '/prices', current: false },
  // { name: 'Blog', href: '/blog', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const [open1, setOpen1] = useState(false)

  const openModal = () => {
    setOpen1(!open1);
  }

  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <div className=" bg-white shadow mx-auto px-2 sm:px-6 lg:px-8 w-full">
            <div className="relative flex h-16 items-center justify-between">
              <div className="sticky top-0 absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setOpen1(true)}/>
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center mx-10">
                <Image
                  src={Logo} 
                  alt="Company Logo" 
                  width={120} 
                  height={40} />
                </div>
                <div className="hidden sm:ml-6 sm:block m-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                            className={classNames(
                            item.current ? 'bg-blue-gray text-white' : 'text-gray-600 hover:bg-gray-blue hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Button />
              </div>
            </div>
          </div>
          <div className={open1 ? 'absolute top-0 left-0 w-full duration-300 h-screen bg-red-500 z-50 overflow-hidden': 'absolute top-0 left-[-100%] w-full duration-300 h-screen bg-red-500 z-50'} style={{zIndex:1500}}>
            <div className='flex w-full h-full bg-light-blue'>
              <div className='text-white absolute top-5 right-5' onClick={() => setOpen1(false)}>
              <XMarkIcon className="block h-6 w-6 cursor-pointer" aria-hidden="true" />
              </div>
              <div className='w-full h-full flex flex-wrap'>
                <ul className='m-auto w-full flex flex-wrap text-center'>
                  {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                            onClick={() => setOpen1(false)}
                            className={classNames(
                            item.current ? 'text-white w-full text-5xl' : ' text-6xl w-full text-gray-600 hover:bg-gray-700 hover:text-white',
                            'px-3 py-5 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <p className='text-3xl'>{item.name}</p>
                        </a>
                      </Link>
                ))}               
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
