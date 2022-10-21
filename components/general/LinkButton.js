import Link from 'next/link'
import React from 'react'

export default function LinkButton({link,text}) {
  return (
    <Link href={link}>
        <a
        className='rounded-md md:text-lg bg-pink-600 px-5 m-auto py-2 md:py-2 text-white'>
            {text}
        </a>
    </Link>
  )
}
