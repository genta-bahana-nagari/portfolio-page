import { Contact } from "@/components/sections/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for freelance projects, collaborations, or job opportunities. Let's build something great together in web development.",
};
export default function Home() {
  return (
    <>
      <Contact />
    </>
  );
}
