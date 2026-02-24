export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white pb-16 md:pb-0 md:mt-20">
      <div className="max-w-6xl mx-auto px-6 my-8 flex flex-col items-center items-center">
        <p className="text-sm text-white/70 text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Genta Bahana Nagari</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
