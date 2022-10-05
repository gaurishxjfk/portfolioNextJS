import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import Navbar from '../components/Navbar'



export default function Landing() {
  return (
    <>
      <Head>
        <title>Gaurish</title>
        <meta
            name="Gaurish Naik"
            content="I am a fullstack developer currently working at Afour. I generally work with Javascript, React, Node and bunch of other things"
        />
      </Head>
      <Navbar />
      <Home />
      <footer className='text-center text-gray-500'>
      designed in figma, built with nextjs and tailwind
      </footer>
    </>    
  )
}
