import { Experience } from "@/components/sections/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience as a web developer, including freelance work, collaborations, and technical roles in building scalable and responsive web applications.",
};
export default function Home() {
  return (
    <>
      <Experience />
    </>
  );
}
