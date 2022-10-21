import React, { useState } from 'react'

export default function Button() {
  const [openModalState, setOpenModalState] = useState(false)

  const openModal = () => {
    setOpenModalState(!openModalState);
  }
  return (
    <button
      className='hidden md:flex rounded-md px-5 m-auto py-2 text-white md:mx-10 text-md bg-pink-600'
      onClick={openModal}>
        Book Now
    </button>
  )
}
