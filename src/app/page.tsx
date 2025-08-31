import { About } from "@/components/custom/about";
import { BackgroundElem } from "@/components/custom/background-elem";
import { Experience } from "@/components/custom/experience";
import { FloatingCodeElements } from "@/components/custom/floating-code-elem";
import { Contact } from "@/components/custom/footer";
import { Hero } from "@/components/custom/hero";
import { Skill } from "@/components/custom/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <BackgroundElem />
      <FloatingCodeElements />
      {/* <WhoAmI /> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
