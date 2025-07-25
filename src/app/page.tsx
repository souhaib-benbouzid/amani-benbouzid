import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="pt-20">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
