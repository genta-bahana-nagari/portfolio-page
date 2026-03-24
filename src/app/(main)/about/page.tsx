import { About } from "@/components/sections/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about me as a Fullstack Developer from Indonesia. My background, skills, technologies I use, and my journey in web development.",
};

export default function AboutMe() {
  return (
    <>
      <About />
    </>
  );
}
