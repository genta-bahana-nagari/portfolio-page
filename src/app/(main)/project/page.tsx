import { Project } from "@/components/sections/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of web development projects including frontend, backend, and fullstack applications built with modern technologies like Next.js, React, and Node.js.",
};
export default function Home() {
  return (
    <>
      <Project />
    </>
  );
}
