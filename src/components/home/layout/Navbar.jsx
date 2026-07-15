import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/logos/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Franchise", href: "#franchise" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <div className="flex items-center gap-3">

          {/* <img src={logo} className="h-12" alt="" /> */}

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white">
            NP
          </div>

          <div>
            <h1
              className={`text-2xl font-bold ${
                scrolled ? "text-slate-800" : "text-white"
              }`}
            >
              Next Gen Pharma
            </h1>

            <p
              className={`text-xs ${
                scrolled ? "text-slate-500" : "text-slate-200"
              }`}
            >
              Quality • Innovation • Trust
            </p>
          </div>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative font-medium transition duration-300 hover:text-teal-500 ${
                scrolled ? "text-slate-700" : "text-white"
              }`}
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-500 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}

          <button className="rounded-xl bg-teal-600 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-teal-700">
            Get Quote
          </button>

        </nav>

        {/* Mobile */}

        <button
          className={`text-2xl lg:hidden ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-white transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block border-b px-8 py-5 text-slate-700 transition hover:bg-slate-100"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <div className="p-6">
          <button className="w-full rounded-lg bg-teal-600 py-4 font-semibold text-white hover:bg-teal-700">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;