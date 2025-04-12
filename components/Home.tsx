"use client";
import Image from "next/image";
import heroImg from "../public/static/images/main.jpg";

const Home = () => {
  return (
    <div className=" text-center text-white flex flex-col justify-center items-center mt-[5%]">
      <div className="bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 p-1 rounded-full mb-4">
        <Image
          src={heroImg}
          width={150}
          height={150}
          alt="gaurish image"
          className="rounded-full"
        />
      </div>

      <h1 className={`text-center text-xl font-bold `}>Hi 👋, I am Gaurish Naik</h1>
      <p className={`text-center text-lg px-10  mt-2 `}>
        Fullstack developer, currently working @
        <span className={`underline decoration-2 decoration-gray-400`}>
          <a
            href="https://zimetrics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={``}
          >
            Zimetrics.
          </a>
        </span>
      </p>
      <p className="mx-2 mb-4">
        🚀 Crafting digital experiences with <br /> React, NextJS, TypeScript,
        TailwindCSS, and NodeJS ✨
      </p>
    </div>
  );
};

export default Home;
