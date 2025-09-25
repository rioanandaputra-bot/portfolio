import Education from "@/components/main/Education";
import Breadcrumb from "@/components/sub/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education - Rio Ananda Putra",
  description: "Educational background and certifications of Rio Ananda Putra.",
  keywords: "education, certifications, academic background, learning, portfolio",
};

export default function EducationPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-16 pt-20">
        <Breadcrumb />
        <Education />
      </div>
    </main>
  );
}