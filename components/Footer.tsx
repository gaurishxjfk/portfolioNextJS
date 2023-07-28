"use client";
import { Github, Insta, LinkedIn, Twitter } from "./SVGIcons";

const socialLinks = [
  {
    img: <Insta fill="#ebebeb" />,
    link: "https://www.instagram.com/gaurishxjfk/",
  },
  {
    img: <Github fill="#ebebeb" />,
    link: "https://github.com/gaurishxjfk",
  },
  {
    img: <Twitter fill="#ebebeb" />,
    link: "https://twitter.com/gaurishxjfk",
  },
  {
    img: <LinkedIn fill="#ebebeb" />,
    link: "https://www.linkedin.com/in/gaurishnaik/",
  },
];

const Footer = () => {
  return (
    <footer className="w-[70%] mx-auto flex justify-center gap-12 align-center">
      {socialLinks.map((ele, index) => (
        <a
          href={ele.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="border p-1 rounded-md border-black hover:border-gray-200"
        >
          {ele.img}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
