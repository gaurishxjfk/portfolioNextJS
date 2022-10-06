import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'

export const darkTheme = {
  'head': 'bg-clip-text bg-gradient-to-r from-green-300 to-purple-400',
  'link': ' hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-500',
  'decoration': 'decoration-purple-400 hover:decoration-blue-400'
};
export const lightTheme = { 
  'head': 'bg-clip-text bg-gradient-to-tl from-orange-500 to-yellow-300',
  'link': ' hover:bg-clip-text hover:bg-gradient-to-r from-orange-600 to-yellow-500 ',
  'decoration': 'decoration-orange-400 hover:decoration-orange-700'
};


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
      <div className='mt-[8vh]'>
        <Tabs />
      </div>      
      <footer className='text-center text-gray-500 mt-[5vh]'>
      designed in figma, built with nextjs and tailwind
      </footer>
    </>    
  )
}
