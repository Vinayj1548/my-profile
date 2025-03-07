import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";



export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-6 sm:px-12 flex flex-col gap-12 sm:gap-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
    </>
  );
}
