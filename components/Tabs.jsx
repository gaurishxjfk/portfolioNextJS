import Image from 'next/image'
import React, { useState } from 'react'
import { darkTheme, lightTheme } from '../pages';
import reactlogo from '../public/logos/react.svg'
import jslogo from '../public/logos/js.svg'
import html from '../public/logos/html5.svg'
import csslogo from '../public/logos/css.svg'
import tailwindlogo from '../public/logos/tailwind.svg'
import bootstrap from '../public/logos/bootstrap.svg'
import postgresql from '../public/logos/postgresql.svg'
import typescript from '../public/logos/typescript.svg'
import mongodb from '../public/logos/mongodb.svg'
import mysql from '../public/logos/mysql.svg'
import nextjslogo from '../public/logos/nextjs.svg'
import redux from '../public/logos/redux.svg'
import { useTheme } from 'next-themes';

const logoArr = [
  { logo: reactlogo, alt: "react logo", text: 'React'},
  { logo: jslogo, alt: "javascript logo", text: 'Javascript' },
  { logo: html, alt: "html logo", text: 'HTML 5' },
  { logo: csslogo, alt: "css logo", text: 'CSS 3'},
  { logo: tailwindlogo, alt: "tailwind logo", text: 'Tailwind Css' },
  { logo: bootstrap, alt: "bootstrap logo", text: 'Bootstrap' },
  { logo: typescript, alt: "typescript logo", text: 'Typescript' },
  { logo: nextjslogo, alt: "next js logo", text: 'Next JS' },
  { logo: redux, alt: "redux logo", text: 'Redux' },
  { logo: postgresql, alt: "postgresql logo", text: 'Postgresql' },
  { logo: mongodb, alt: "mongodb logo", text: 'MongoDB' },
  { logo: mysql, alt: "mysql logo", text: 'Mysql' }
] 
//bg-slate-100/[0.9]
const Tabs = () => {
  const { theme, setTheme } = useTheme(); 
  return (
    <div className={` h-[540px] w-[75%] lg:w-[30%] md:w-[45%] sm:w-[60%] mx-auto rounded-3xl px-3 pb-3 text-center  ${theme === 'light' ? 'bg-white border-black drop-shadow-2xl stroke-black' : 'bg-stone-900/[0.9]'}`}>
      <div className=" h-[15%]  pt-7">
        <h5 className={`font-bold text-xl flex-1 text-transparent ${theme === 'light' ? lightTheme.head : darkTheme.head}`}>things i&#39;ve worked on...</h5>
      </div>      
      <div className='bg-gradient-to-tl from-yellow-200/[0.2] to-cyan-200/[0.2] h-[85%] rounded-3xl shadow-inner grid grid-cols-3'>
        {logoArr.map((logo, index) => (
          <div key={index} className="pt-5 group transition duration-700 ease-in-out ">
            <Image
              src={logo.logo}              
              alt={logo.alt}
              width={'50px'}
              height={'50px'}              
              className="mt-5 transition duration-700 ease-in-out"
            />
            <span className='hidden  group-hover:block transition duration-700 ease-in-out'>{logo.text}</span>
          </div>            
          ))}
      </div>
    </div>
  )
}

export default Tabs