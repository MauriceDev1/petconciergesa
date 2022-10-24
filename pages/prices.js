import Head from 'next/head'
import Hero from '../components/general/Hero'

export default function Prices() {
  return (
    <div>
      <Head>
        <title>Pet Concierge SA - Prices</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero height='h-72 sm:h-[55vh]' url="https://images.unsplash.com/photo-1559317245-d24c4c7f252b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
      <div className='w-full py-10'>
        <div className='w-10/12 m-auto border border-gray-300 rounded'>
          <div className='w-wull bg-gray-blue text-white py-2 text-center text-white'>
            <h2 className=' text-2xl font-bold'>Grooming</h2>
            <p className='text-normal'>Pricing dependent on size and grooming treatment</p>
          </div>
          <div className='flex w-full'>
            <div className='w-1/2 border-r border-gray-300'>
              <div className='w-full bg-light-blue py-2 text-lg text-center text-white'>
                Cat
              </div>
              <div className='flex w-full'>
                <div className='w-1/3 border-r bodre-gray-300 text-center'>
                  Small
                </div>
                <div className='w-1/3 border-r bodre-gray-300 text-center'>
                  Medium  
                </div>
                <div className='w-1/3 text-center'>
                  Large
                </div>
              </div>
            </div>
            <div className='w-1/2'>
              <div className='w-full bg-light-blue py-2 text-lg text-center text-white'>
                Dog
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
