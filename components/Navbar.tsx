"use client";
import { Link as ScrollLink } from 'react-scroll';
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-screen h-[65px] bg-['#111'] fixed backdrop-blur-sm z-[51] px-2 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/ICON.svg"
            alt="logo"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto p-1"
          />
        </a>

        <div className="flex flex-row gap-5">

          <div
            onClick={() => window.open("mailto:aby@consultant.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5 hidden"
          >
            Contact
          </div>
          <div className="navbar-end">
            <div className="dropdown backdrop-blur-md">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[51] p-2 shadow bg-base-100/50 backdrop-blur-xl rounded-box w-52  relative right-0 [&>*]:target:bg-orange-600/25 ">
                <li><ScrollLink spy={true} smooth={true} offset={-70} duration={600} to="home">Homepage</ScrollLink></li>
                <li><ScrollLink spy={true} smooth={true} offset={-70} duration={500} to="about">About</ScrollLink></li>
                <li><ScrollLink spy={true} smooth={true} offset={-70} duration={600} to="experience">Experience</ScrollLink></li>
                <li><ScrollLink spy={true} smooth={true} offset={-70} duration={700} to="projects">Project</ScrollLink></li>
                <li><ScrollLink spy={true} smooth={true} offset={-70} duration={700} to="skills">Hard Skill</ScrollLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
