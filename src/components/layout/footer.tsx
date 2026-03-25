"use client";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { links } from "@/lib/links";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 text-white pb-12 md:pb-0 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="text-xs md:text-sm text-white/60 text-center leading-relaxed">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Genta Bahana Nagari</span>.
            All rights reserved.
          </p>
        </div>

        <div className="flex justify-center gap-6 text-xs md:text-sm text-white/60">
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/project" className="hover:text-white transition-colors">
            Project
          </a>
          <a href="/project" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="flex justify-center md:justify-end gap-4 text-white/60">
          {links.github && (
            <a
              href={links.github}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          )}

          {links.linkedin && (
            <a
              href={links.linkedin}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          )}

          {links.email && (
            <a
              href={links.email}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope className="h-4 w-4" />
            </a>
          )}

          {links.instagram && (
            <a
              href={links.instagram}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          )}
          
          {links.discord && (
            <a
              href={links.discord}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
