import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import { links } from "@/lib/links";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white pb-16 md:pb-0 md:mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Genta Bahana Nagari</span>.
          All rights reserved.
        </p>

        <div className="flex items-center gap-8 text-sm text-white/60">
          {links.github && (
            <a
              href={links.github}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}

          {links.linkedin && (
            <a
              href={links.linkedin}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          )}

          {links.email && (
            <a
              href={links.email}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          )}

          {links.instagram && (
            <a
              href={links.instagram}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          )}

          {links.discord && (
            <a
              href={links.discord}
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
