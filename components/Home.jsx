import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../pages';
import '../public/Vector.svg';



const Home = () => {
    const { theme, setTheme } = useTheme();    
    return (
        <div className='h-[40vh] my-5'>
            <div  className=' my-auto'>
                <h1 className={`text-center text-7xl font-bold text-transparent 
                    ${ theme === 'light' ?   lightTheme.head : darkTheme.head }`}>
                    Hi <span className='text-black'>👋</span>, I am<br/> Gaurish
                </h1>
                <p className={`text-center text-2xl  font-bold mt-7 text-transparent 
                    ${ theme === 'light' ?   lightTheme.head : darkTheme.head }`}>
                    A fullstack developer, currently working @
                    <span className={`text-black underline ${theme === 'light' ? lightTheme.decoration : darkTheme.decoration}`}>
                        <a
                            href='https://afourtech.com/'
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-transparent ${theme === 'light' ? lightTheme.link : darkTheme.link}`}
                        >Afour.</a>
                    </span><br/>
                    I work with Javascript, React, Node and a bunch of other things.
                </p>
            </div>
        </div>
    )
}


export default Home;