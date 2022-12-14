import React from 'react'
import Nav from '../components/general/Nav'
import Footer from '../components/general/Footer'

export default function MainLayout({children}) {
  return (
    <>
        <div 
          className='sticky top-0'
          style={{zIndex:1000}}>
            <Nav />
        </div>
        {children}
        <Footer />
    </>
  )
}
