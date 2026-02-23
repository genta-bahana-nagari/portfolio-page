"use client";

import { useState, useEffect } from "react";
import {
  BiHome,
  BiUser,
  BiBriefcase,
  BiEnvelope,
} from "react-icons/bi";

const navLinks = [
  { id: "home", icon: <BiHome />, label: "Home" },
  { id: "about", href: "#about", icon: <BiUser />, label: "About" },
  { id: "resume", href: "#resume", icon: <BiBriefcase />, label: "Resume" },
  { id: "contact", href: "#contact", icon: <BiEnvelope />, label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");

  const handleNavigation = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("home");
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setActive(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-10">
        <nav className="flex items-center gap-8 px-12 py-5 rounded-full bg-black/70 backdrop-blur-lg border border-white/10 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`relative text-md md:text-base font-medium transition-colors duration-200 cursor-pointer ${
                active === link.id
                  ? "text-yellow-400"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}

              {active === link.id && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-10">
        <nav className="flex items-center justify-between gap-6 px-6 py-3 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`relative text-2xl transition-colors duration-200 ${
                active === link.id ? "text-yellow-400" : "text-white/70"
              }`}
            >
              {link.icon}

              {active === link.id && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
