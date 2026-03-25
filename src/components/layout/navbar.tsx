"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHome, BiUser, BiBriefcase, BiEnvelope } from "react-icons/bi";
import { GoProjectRoadmap } from "react-icons/go";

const navLinks = [
  { href: "/", icon: <BiHome />, label: null },
  { href: "/about", icon: <BiUser />, label: "About" },
  { href: "/project", icon: <GoProjectRoadmap />, label: "Projects" },
  { href: "/experience", icon: <BiBriefcase />, label: "Experience" },
  { href: "/contact", icon: <BiEnvelope />, label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex pt-12 fixed left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center px-2 py-2 gap-1 rounded-full bg-black/70 backdrop-blur-lg border border-gray-800 shadow-lg">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className={`flex items-center gap-2 px-3 py-1 text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "text-amber-300 bg-white/10 border border-white/20 rounded-full"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>

              {index === 0 && <span className="mx-3 h-5 w-px bg-white/20" />}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 mb-2">
        <nav className="flex items-center gap-4 px-5 py-3 rounded-full bg-black/70 backdrop-blur-lg border border-gray-800 shadow-xl">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-4">
              <Link
                href={link.href}
                className={`relative text-base font-semibold transition-colors duration-200 ${
                  pathname === link.href ? "text-amber-300" : "text-white/70"
                }`}
              >
                {link.icon}
              </Link>

              {index === 0 && <span className="h-5 w-px bg-white/20" />}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
