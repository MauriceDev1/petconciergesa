import axios from 'axios';
import React, { useState } from 'react'

export default function SignUp() {
  const [email,setEmail] = useState();
  const [loading,setLoading] = useState(false);

  const subscribe = async() => {
    setLoading(!loading)
    if(email){
        console.log('Maurice')
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }else{
        setLoading(false);
    }
    await axios.post("http://localhost:5000/subscribe",{email:email})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div 
    className='flex bg-pink-200 flex-wrap w-full py-6 md:py-9'>
    <div className='flex flex-wrap w-10/12 md:w-7/12 m-auto'>
      <div className='flex w-full'>
        <h1 
            className='text-[23px] md:text-6xl font-bold m-auto pb-5 sm:pb-10 text-gray-800'>
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
        className='w-4/12 md:w-3/12 h-10 sm:h-12 rounded-r-lg text-white text-md md:text-xl sm:text-xl bg-pink-600'
        onClick={subscribe}
      >
        {loading ? <div className='flex w-full'><div className="loader m-auto"></div></div> : 'Subscribe'}</button>
      </div>
    </div>
  </div>
  )
}