import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ArrowDownRight } from "lucide-react";

export default function AboutMe() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 pt-20">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 dark:text-gray-300">
        I&apos;m a creative and detail-oriented UI/UX designer with a passion
        for crafting intuitive, accessible, and user-centered digital
        experiences. Experienced in designing mobile and web applications across
        education, lifestyle, and healthcare sectors. I strongly believe in
        combining aesthetic design with functional problem-solving to deliver
        impactful, user-focused solutions. Guided by the principle: “Less is
        more.”
      </p>
      <a
        href="/resume"
        className="hover:underline text-blue-600 dark:text-blue-400 mt-4 inline-flex items-center gap-1"
      >
        <ArrowDownRight className="inline ml-1" />
        <span>My resume | CV</span>
      </a>
      <Footer />
    </main>
  );
}
export const metadata = {
  title: "About Me - Amani Benbouzid",
  description:
    "Learn more about Amani Benbouzid, her design philosophy, and her journey in the world of design.",
};
