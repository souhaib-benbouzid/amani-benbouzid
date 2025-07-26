import Footer from "@/components/Footer";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background dark:bg-background-dark">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
