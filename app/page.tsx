import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/porjects";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
