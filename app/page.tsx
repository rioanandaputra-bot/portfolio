import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import ProjectsPreview from "@/components/main/ProjectsPreview";
import Skills from "@/components/main/Skills";
import ExperiencePreview from "@/components/main/ExperiencePreview";
import EducationPreview from "@/components/main/EducationPreview";
import Testimonials from "@/components/main/Testimonials";
import BlogPreview from "@/components/main/BlogPreview";
import ContactPreview from "@/components/main/ContactPreview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12">
        <Hero />
        <About />
        <Skills />
        <ExperiencePreview />
        <EducationPreview />
        <ProjectsPreview />
        <Testimonials />
        <BlogPreview />
        <Encryption />
        <ContactPreview />
      </div>
    </main>
  );
}
