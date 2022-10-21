import Head from 'next/head'
import Hero from '../components/general/Hero'

export default function About() {
  return (
    <div>
      <Head>
        <title>Pet Concierge SA - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero height='h-[60vh]' />
    </div>
  )
}