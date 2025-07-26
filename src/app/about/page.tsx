import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ArrowDownRight } from "lucide-react";

export default function AboutMe() {
  return (
    <main className="pt-(--mobile-nav-height) flex flex-col min-h-screen bg-background dark:bg-background-dark">
      <Navbar />
      <section className="py-20 max-w-5xl mx-auto px-4 ">
        <h1 className="text-3xl font-bold mb-4 text-neutral-500 dark:text-neutral-300">
          About me
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          I&apos;m a creative and detail-oriented UI/UX designer with a passion
          for crafting intuitive, accessible, and user-centered digital
          experiences. Experienced in designing mobile and web applications
          across education, lifestyle, and healthcare sectors. I strongly
          believe in combining aesthetic design with functional problem-solving
          to deliver impactful, user-focused solutions.
        </p>
        <p className="mb-8 mt-6 text-neutral-500 dark:text-neutral-400">
          Guided by the principle: “Less is more.”
        </p>
        <a
          href="./resume.pdf"
          download="Amani_Benbouzid_Resume.pdf"
          className="hover:underline text-red-500 dark:text-red-400 inline-flex items-center gap-1"
        >
          <ArrowDownRight className="inline ml-1" />
          <span>My resume | CV</span>
        </a>
      </section>
      <Footer />
    </main>
  );
}
export const metadata = {
  title: "About Me - Amani Benbouzid",
  description:
    "Learn more about Amani Benbouzid, her design philosophy, and her journey in the world of design.",
};
