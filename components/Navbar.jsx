import Image from "next/image"
import { useTheme } from 'next-themes'
import insta from '../public/logos/instagram.svg'
import github from '../public/logos/github.svg'
import twitter from '../public/logos/twitter.svg'
import linkedin from '../public/logos/linkedin.svg'
import darkbulb from '../public/logos/dark-bulb.svg'
import lightbulb from '../public/logos/ligh-bulb.svg'

const socialLinks = [
  {
    "img": insta,
    "link": "https://www.instagram.com/gaurishxjfk/",
    "alt" : "instagram icon"
  },
  {
    "img": github,
    "link": "https://github.com/nerdgaurish",
    "alt" : "github icon"
  }
  ,
  {
    "img": twitter,
    "link": "https://twitter.com/gaurish0_0",
    "alt" : "twitter icon"
  }
  ,
  {
    "img": linkedin,
    "link": "https://www.linkedin.com/in/gaurishnaik/",
    "alt" : "linkedin icon"
  }
]

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  return (
    <nav className=" w-[70%] mx-auto flex justify-center gap-12 align-center">
      { socialLinks.map((ele,index) => (
          <a href={ele.link} target="_blank" rel="noopener noreferrer" key={index}>
            <Image
              src={ele.img}              
              alt={ele.alt}
              className="flex-1 scale-95 hover:scale-105 	"
            />
          </a>
      ))}
      
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Image
          src={theme === 'light' ? lightbulb : darkbulb}
          alt="dark mode bulb icon"
          className="flex-1 scale-95 hover:scale-105"
        />
      </button>
    </nav>
  )
}

export default Navbar