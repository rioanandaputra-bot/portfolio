import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col h-full w-full"
      id="about-me"
      aria-label="Hero section with personal introduction"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
        aria-hidden="true"
      >
        <source src="/blackhole.webm" type="video/webm" />
        <track kind="captions" srcLang="en" label="English" />
      </video>
      <HeroContent />
    </section>
  );
};

export default Hero;
