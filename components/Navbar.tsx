"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "About", href: "/about" },
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
];
const Navbar = () => {
  const path = usePathname();
  return (
    <nav
      className="w-[90%] md:w-[75%] mx-auto hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-800 hover:to-gray-300 rounded-full p-[1px]
                bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 mt-[5vh]"
    >
      <div className="bg-black rounded-full">
        <span className="flex justify-around py-3 rounded-full bg-slate-50 bg-opacity-5">
          {navLinks.map((i) => (
            <Link
              href={i.href}
              key={i.href}
              className={`bg-clip-text text-transparent font-bold underline decoration underline-offset-8                      
                        hover:bg-gradient-to-r hover:from-white hover:via-gray-300 hover:to-white
                        bg-gradient-to-r from-gray-300 via-white to-gray-300 hover:decoration-gray-600                      
                        ${path === i.href && "decoration-gray-600 "}`}
            >
              &nbsp;&nbsp;&nbsp;{i.title}&nbsp;&nbsp;&nbsp;
            </Link>
          ))}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
