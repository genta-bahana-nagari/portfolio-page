import { useState, useEffect } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { GoArrowDownRight } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#about", text: "About Me" },
    { href: "#skills", text: "Skills" },
    { href: "#porto", text: "Portfolio" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-30 w-full bg-black/90 py-4 px-6 md:px-12 flex justify-between items-center text-white shadow-md overflow-x-hidden">
      {/* Logo */}
      <a
        href="#"
        className="text-2xl text-white md:text-3xl font-bold tracking-wide"
      >
        GENTA.Porto
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 items-center text-base font-medium">
        {navLinks.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-white/80 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
            >
              {item.text}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:gentapossenti@gmail.com"
            target="_blank"
            className="px-5 py-2 rounded-full flex items-center gap-2 bg-white text-black font-semibold transition-transform duration-200 hover:scale-105 hover:bg-yellow-400"
          >
            Hire Me
            <GoArrowDownRight />
          </a>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      {!isOpen && (
        <div
          className="md:hidden text-3xl cursor-pointer z-40"
          onClick={toggleMenu}
        >
          <BiMenu />
        </div>
      )}

      {/* Dimmed Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-20 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 max-w-[100vw] bg-black/75 text-white px-6 py-8 z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <BiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <ul className="flex flex-col gap-8 text-md items-center mt-20">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white/80 hover:text-white transition-all duration-300 hover:underline"
                onClick={toggleMenu}
              >
                {item.text}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:gentapossenti@gmail.com"
              target="_blank"
              className="mt-4 px-4 py-2 rounded-full border bg-white text-black flex items-center gap-2 font-semibold transition-transform duration-200 hover:scale-105 hover:bg-yellow-400"
              onClick={toggleMenu}
            >
              Hire Me
              <GoArrowDownRight />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
