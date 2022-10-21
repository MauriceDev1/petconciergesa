import React from 'react'
import Nav from '../components/general/Nav'
import Footer from '../components/general/Footer'

export default function MainLayout({children}) {
  return (
    <>
        <div>
            <Nav />
        </div>
        {children}
        <Footer />
    </>
  )
}
