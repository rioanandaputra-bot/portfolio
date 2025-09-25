import Contact from "@/components/main/Contact";
import Breadcrumb from "@/components/sub/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Rio Ananda Putra",
  description: "Get in touch with Rio Ananda Putra for collaboration opportunities.",
  keywords: "contact, hire, collaboration, full stack developer, freelance",
};

export default function ContactPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-16 pt-20">
        <Breadcrumb />
        <Contact />
      </div>
    </main>
  );
}