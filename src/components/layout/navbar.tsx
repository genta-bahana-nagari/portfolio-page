"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BiHome, BiUser, BiCodeAlt, BiBriefcase, BiEnvelope } from "react-icons/bi";

const navLinks = [
  { id: "hero", href: "#hero", icon: <BiHome />, label: "Home" },
  { id: "about", href: "#about", icon: <BiUser />, label: "About" },
  { id: "skills", href: "#skills", icon: <BiCodeAlt />, label: "Skills" },
  { id: "projects", href: "#projects", icon: <BiBriefcase />, label: "Projects" },
  { id: "contact", href: "#contact", icon: <BiEnvelope />, label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [hideNav, setHideNav] = useState(true);

  useEffect(() => {
    const sections = navLinks.map((link) => 
      document.getElementById(link.id)
    );

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

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect()
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setHideNav(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    if (hero) heroObserver.observe(hero);

    return () => heroObserver.disconnect()
  }, []);

  if (hideNav) return null;

  return (
    <>
      {/* Desktop Floating Capsule */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-8 px-8 py-3 rounded-full bg-black/70 backdrop-blur-lg border border-white/10 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                active === link.id
                  ? "text-yellow-400"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}

              {/* Active Dot */}
              {active === link.id && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Bottom Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center justify-between gap-6 px-6 py-3 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative text-2xl transition-colors duration-200 ${
                active === link.id
                  ? "text-yellow-400"
                  : "text-white/70"
              }`}
            >
              {link.icon}

              {/* Active Indicator */}
              {active === link.id && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
