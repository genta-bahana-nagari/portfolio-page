export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white pb-16 md:pb-0 md:mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-white/70 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Genta Bahana Nagari
          </span>
          . All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm text-white/60">
          <p>Visit me at {" "}
            <a href="https://github.com" className="hover:text-yellow-400 transition-colors duration-200">
            Github
            </a>
          </p>
          <a
            href="/about"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="/projects"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}