import { useTheme } from 'next-themes';
import '../public/Vector.svg';

const Home = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className='h-[50vh] my-10'>
            <div  className=' my-auto'>
                <h1 className={`text-center text-7xl font-bold text-transparent  ${theme === 'dark' ?'bg-clip-text bg-gradient-to-r from-green-300 to-purple-400' :'bg-clip-text bg-gradient-to-tl from-orange-500 to-yellow-300'}`}>
                    Hi <span className='text-black'>👋</span>, I am<br/> Gaurish
                </h1>
                <p className={`text-center text-2xl  font-bold mt-7 text-transparent ${theme === 'dark' ?'bg-clip-text bg-gradient-to-r from-green-300 to-purple-400' :'bg-clip-text bg-gradient-to-tl from-orange-500 to-yellow-300'}`}>
                    I am a fullstack developer, currently working as a SDE @
                    <span className={`text-black underline ${theme === 'dark' ? 'decoration-purple-400 hover:decoration-blue-400' : 'decoration-orange-400 hover:decoration-orange-700'}`}>
                        <a
                            href='https://afourtech.com/'
                            target='_blank'
                            className={`text-transparent ${theme === 'dark' ?' hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-500': ' hover:bg-clip-text hover:bg-gradient-to-r from-orange-600 to-yellow-500 '}`}
                        >Afour.</a>
                    </span><br/>
                    I play around with Javascript, React, Node and a bunch of other things.<br/>
                    This site is currently under development!!
                </p>
            </div>
        </div>
    )
}


export default Home;