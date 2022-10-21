import React from 'react'

export default function Hero({height,url}) {
  return (
    <div className={`w-full bg-gray-200 ${height}`}>
      <div 
        className='w-full h-full' 
        style={{backgroundImage: `url(${url})`, backgroundSize: 'cover'}}>

      </div>
    </div>
  )
}
