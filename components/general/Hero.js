import React from 'react'

export default function Hero({height,url}) {
  return (
    <div className={`w-full bg-gray-100 ${height}`}>
      <div 
        className='w-full h-full' 
        style={{backgroundImage: `url(${url})`, backgroundSize: 'cover'}}>

      </div>
    </div>
  )
}
