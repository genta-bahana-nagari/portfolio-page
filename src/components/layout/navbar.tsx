"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHome, BiUser, BiBriefcase, BiEnvelope } from "react-icons/bi";
import { GoProjectRoadmap } from "react-icons/go";

const navLinks = [
  { href: "/", icon: <BiHome />, label: "Home" },
  { href: "/about", icon: <BiUser />, label: "About" },
  { href: "/project", icon: <GoProjectRoadmap />, label: "Projects" },
  { href: "/resume", icon: <BiBriefcase />, label: "Resume" },
  { href: "/contact", icon: <BiEnvelope />, label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-10">
        <nav className="flex items-center gap-8 px-12 py-5 rounded-full bg-black/70 backdrop-blur-lg border border-white/10 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}              
              className={`relative text-md md:text-base font-medium transition-colors duration-200 cursor-pointer ${
                pathname === link.href
                  ? "text-yellow-400"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}

              {pathname === link.href && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-10">
        <nav className="flex items-center justify-between gap-6 px-6 py-3 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}       
              className={`relative text-2xl transition-colors duration-200 ${
                pathname === link.href ? "text-yellow-400" : "text-white/70"
              }`}
            >
              {link.icon}

              {pathname === link.href && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
