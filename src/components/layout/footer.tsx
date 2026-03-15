export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white pb-16 md:pb-0 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">
          <p className="text-lg font-semibold tracking-wide">
            Genta Bahana Nagari
          </p>
          <p className="text-sm text-white/60">
            Building modern web experiences.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/project" className="hover:text-white transition">Projects</a>
          <a href="/experience" className="hover:text-white transition">Experience</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="text-sm text-white/60 text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Genta Bahana Nagari</span>
          <br />
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}