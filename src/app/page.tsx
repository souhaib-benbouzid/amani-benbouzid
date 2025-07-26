import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="pt-(--mobile-nav-height) flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
