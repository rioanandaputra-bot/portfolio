import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";
import About from "@/components/main/About";

// Lazy load components that are below the fold
const Skills = dynamic(() => import("@/components/main/Skills"), {
  loading: () => <div className="h-screen w-full bg-transparent" />
});

const ExperiencePreview = dynamic(() => import("@/components/main/ExperiencePreview"), {
  loading: () => <div className="h-96 w-full bg-transparent" />
});

const EducationPreview = dynamic(() => import("@/components/main/EducationPreview"), {
  loading: () => <div className="h-96 w-full bg-transparent" />
});

const ProjectsPreview = dynamic(() => import("@/components/main/ProjectsPreview"), {
  loading: () => <div className="h-96 w-full bg-transparent" />
});

const Testimonials = dynamic(() => import("@/components/main/Testimonials"), {
  loading: () => <div className="h-96 w-full bg-transparent" />
});

const BlogPreview = dynamic(() => import("@/components/main/BlogPreview"), {
  loading: () => <div className="h-96 w-full bg-transparent" />
});

const Encryption = dynamic(() => import("@/components/main/Encryption"), {
  loading: () => <div className="h-screen w-full bg-transparent" />
});

const ContactPreview = dynamic(() => import("@/components/main/ContactPreview"), {
  loading: () => <div className="h-96 w-full bg-transparent" />
});

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
