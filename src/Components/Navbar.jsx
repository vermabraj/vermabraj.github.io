import { ReactNode } from 'react';
import {
 
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';


import React, { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
 

  const menuLinks = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] "
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl ">
            verma<span className="text-blue-400">_braj</span>
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-blue-400"
          }  md:block hidden px-7 py-2 font-medium  rounded-bl-full `}
        >
          <ul className="flex items-center gap-1 py-2 text-md">
         
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-white ">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            <Button onClick={toggleColorMode} >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          </ul>
          
        </div>
        
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-black top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-blue-400 "
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
