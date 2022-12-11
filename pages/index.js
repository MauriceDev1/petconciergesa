import Head from 'next/head'
import Hero from '../components/general/Hero'
import IntroPanel from '../components/site/home/IntroPanel'
import ServiceList from '../components/site/home/ServiceList'
import SignUp from '../components/forms/SignUp'
import Testimonials from '../components/site/home/Testimonials'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pet Concierge SA - Home</title>
        <meta name="google-site-verification" content="2zdWGi5YYrv_Gy0NV20FmXbCwTzgJ9X4MWCR8W7NQl4" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero height='h-72 sm:h-screen' url="https://images.unsplash.com/photo-1524642603405-a7c76bcde7eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
      <IntroPanel />
      <ServiceList />
      {/* <Testimonials /> */}
      <SignUp />
    </div>
  )
}
