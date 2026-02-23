import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Contact />
    </>
  );
}
