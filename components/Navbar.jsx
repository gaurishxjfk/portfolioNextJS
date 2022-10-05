import Image from "next/image"
import { useTheme } from 'next-themes'
import { useRef, useState } from "react"
import insta from '../public/logos/instagram.svg'
import github from '../public/logos/github.svg'
import twitter from '../public/logos/twitter.svg'
import linkedin from '../public/logos/linkedin.svg'
import darkbulb from '../public/logos/dark-bulb.svg'
import lightbulb from '../public/logos/ligh-bulb.svg'


const Navbar = () => {

  const { theme, setTheme } = useTheme()
  const aRef = useRef(null)



  return (
    <nav className=" w-[70%] mx-auto flex justify-center gap-12 align-center">
      <a href="https://www.instagram.com/gaurishxjfk/" target="_blank">
        <Image
          src={insta}
          className="flex-1 scale-90 hover:scale-105"
        />
      </a>
      <a href="https://github.com/nerdgaurish" target="_blank">
        <Image
          src={github}
          className="flex-1 scale-90 hover:scale-105"
        />
      </a>
      <a href="https://twitter.com/gaurish0_0" target="_blank">
        <Image
          src={twitter}
          className="flex-1 scale-90 hover:scale-105"
        />
      </a>
      <a href="https://www.linkedin.com/in/gaurishnaik/" target="_blank">
        <Image
          src={linkedin}
          className="flex-1 scale-90 hover:scale-105"
        />
      </a>
      <a onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Image
          src={theme === 'light' ? lightbulb : darkbulb}
          className="flex-1 scale-90 hover:scale-105"
        />
      </a>
    </nav>
  )
}

export default Navbar