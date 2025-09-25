import { personalInfo } from "@/constants/personalData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="/#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            {personalInfo.name}
          </span>
        </Link>

        <div className="w-[900px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[15px] py-[10px] rounded-full text-gray-200 text-sm">
            <Link href="/#about-me" className="cursor-pointer hover:text-purple-400 transition-colors px-2">
              Home
            </Link>
            <Link href="/#about" className="cursor-pointer hover:text-purple-400 transition-colors px-2">
              About
            </Link>
            <Link href="/#skills" className="cursor-pointer hover:text-purple-400 transition-colors px-2">
              Skills
            </Link>
            <Link href="/experience" className="cursor-pointer hover:text-purple-400 transition-colors px-2">
              Experience
            </Link>
            <Link href="/projects" className="cursor-pointer hover:text-purple-400 transition-colors px-2">
              Projects
            </Link>
            <Link href="/#testimonials" className="cursor-pointer hover:text-purple-400 transition-colors px-2">
              Reviews
            </Link>
            <Link href="/blog" className="cursor-pointer hover:text-purple-400 transition-colors px-2">
              Blog
            </Link>
            <Link href="/contact" className="cursor-pointer hover:text-purple-400 transition-colors px-2">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {personalInfo.social.instagram && (
            <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </a>
          )}
          {personalInfo.social.github && (
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
              <Image
                src="/github-142-svgrepo-com.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </a>
          )}
          {personalInfo.social.discord && (
            <a href={personalInfo.social.discord} target="_blank" rel="noopener noreferrer">
              <Image
                src="/discord.svg"
                alt="Discord"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
