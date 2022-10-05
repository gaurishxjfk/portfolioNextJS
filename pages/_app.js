import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  //bg-[#181818]
  return <ThemeProvider>
            <div className='bg-scroll w-full bg-cover bg-bg_image  py-20'><Component {...pageProps} /></div>
          </ThemeProvider>
}

export default MyApp
