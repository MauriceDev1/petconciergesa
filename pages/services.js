import Head from 'next/head'
import Hero from '../components/general/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pet Concierge SA - Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero height='h-72 sm:h-[55vh]' url="https://images.unsplash.com/photo-1615159517259-a48d184d7d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
      <div className='flex w-full py-10'>
        <div className='w-10/12 m-auto text-gray-800'>
          <div className='w-full'>
            <h1 className='text-6xl font-bold text-center pb-10'>Services That We Offer</h1>
          </div>
          <div className='flex flex-wrap w-11/12 m-auto'>
            <div className='w-full sm:w-1/2 p-4'>
              <div className='bg-gray-500 h-96'>

              </div>
              <div className=''>
              <h2>Pet Grooming</h2>
              <h3>Total time: 45 mins and up</h3>
              <p className=' text-lg'>Shampoo wash (specific to pets skin). Powder (dry) wash (specific to pets skin).Ear clean. Nail trim. Teeth clean. Brush of coat. Sun screen. Perfume spritz.<br></br>If you do not wish for a certain grooming treatment. Please do let us know.</p>
              </div>
            </div>
            <div className='w-full sm:w-1/2 p-4'>
              <div className='bg-gray-500 h-96'>

              </div>
              <div>
                <h2>Pet Sitting</h2>
                <h3>Total time: 30 mins and up</h3>
                <p className=' text-lg'>Morning ~ cuddles then breakfast, morning walk and play time. Afternoon ~ snack, late afternoon walk. <br></br>Evening ~ dinner, cuddles/play time and some undivided attention.</p>
              </div>
            </div>
            <div className='w-full sm:w-1/2 p-4'>
              <div className='bg-gray-500 h-96'>

              </div>
              <div>
                <h2>Pet Walking</h2>
                <h3>Total time: 30 mins</h3>
                <p className=' text-lg'>Pick-up from and drop-off from requested location. <br></br>Price may vary depending on distance to travel and number and duration of walk.</p>
              </div>
            </div>
            <div className='w-full sm:w-1/2 p-4'>
              <div className='bg-gray-500 h-96'>

              </div>
              <div>
                <h2>Pet Taxi</h2>
                <h3>Total time: 30 mins and up</h3>
                <p className=' text-lg'>R6 per kilometre. Pick-up from and drop-off from requested location. Price may vary depending on distance to travel and number of dogs and duration of walk.</p>
              </div>
            </div>
            <div className='w-full sm:w-1/2 p-4 m-auto'>
              <div className='bg-gray-500 h-96'>

              </div>
              <div>
                <h2>Pet Training</h2>
                <h3>Total time: 1 hr and up</h3>
                <p className=' text-lg'>According to what training is required and the training duration period need.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}