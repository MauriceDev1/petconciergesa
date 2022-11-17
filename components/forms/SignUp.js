import axios from 'axios';
import React, { useState } from 'react'

export default function SignUp() {
  const [email,setEmail] = useState();
  const [loading,setLoading] = useState(false);

  const subscribe = async() => {
    setLoading(!loading)
    if(email){
        let config = {
          method: 'post',
          url: 'https://spontaneous-gaufre-7ed8de.netlify.app/api/subscribers',
          headers: {
            'Content-TYpe': 'application/json'
          },
          data: email,
        };
        
        try {
          const response = await axios(config);
          console.log(response);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }

      } else {
        setLoading(false);
    }
  }

  return (
    <div 
    className='flex bg-powder-blue flex-wrap w-full py-6 md:py-9'>
    <div className='flex flex-wrap w-10/12 md:w-7/12 m-auto'>
      <div className='flex w-full'>
        <h1 
            className='text-[23px] md:text-[54px] font-bold m-auto pb-5 sm:pb-3 text-gray-800'>
              Subscribe to Pet Concierge</h1>
      </div>
      <div className='flex w-full md:w-10/12 m-auto'>
      <input
       type="email" 
       name="email"
       onChange={(e) => setEmail(e.target.value)} 
       placeholder="your@emai.com" 
       value={email} 
       className='text-center outline-none border text-normal md:text-lg w-9/12 sm:h-12 rounded-l-lg'/>
      <button 
        className='w-4/12 md:w-3/12 h-10 sm:h-12 rounded-r-lg text-white text-md md:text-lg sm:text-xl bg-blue-gray hover:bg-gray-me'
        onClick={subscribe}
      >
        {loading ? <div className='flex w-full'><div className="loader m-auto"></div></div> : 'Subscribe'}</button>
      </div>
    </div>
  </div>
  )
}