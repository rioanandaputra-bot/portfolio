import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { personalInfo } from "@/constants/personalData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            {personalInfo.social.youtube && (
              <a
                href={personalInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
              >
                <FaYoutube />
                <span className="text-[15px] ml-[6px]">YouTube</span>
              </a>
            )}
            {personalInfo.social.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </a>
            )}
            {personalInfo.social.discord && (
              <a
                href={personalInfo.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
              >
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </a>
            )}
          </div>
          
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            {personalInfo.social.instagram && (
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
              >
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
            )}
            {personalInfo.social.twitter && (
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
              >
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </a>
            )}
          </div>
          
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">Email Me</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">Download CV</span>
            </a>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px]">{personalInfo.location}</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {personalInfo.name} {currentYear}. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;