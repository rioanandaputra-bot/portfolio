"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { personalInfo } from "@/constants/personalData";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            {personalInfo.title} & Technical Innovator
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}<br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {personalInfo.name}
            </span>
          </span>
          {/* <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
            {personalInfo.title}
          </span> */}
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {personalInfo.bio}
        </motion.p>
        
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4"
        >
          <a
            href="#contact"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
          >
            Start Collaboration
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 border border-[#7042f861] text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:border-purple-500 transition-colors"
          >
            View Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
