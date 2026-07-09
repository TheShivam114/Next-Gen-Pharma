import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Products",
    "Franchise",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-teal-600">
            Next Gen Pharma
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-medium text-slate-700 transition hover:text-teal-600"
            >
              {link}
            </a>
          ))}

          <button className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700">
            Get Quote
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white shadow-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block border-b px-6 py-4 hover:bg-slate-100"
            >
              {link}
            </a>
          ))}

          <div className="p-6">
            <button className="w-full rounded-lg bg-teal-600 py-3 font-semibold text-white">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;