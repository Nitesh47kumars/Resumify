import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", link: "about" },
    { name: "Features", link: "features" },
    { name: "Templates", link: "templates" },
    { name: "Q & A", link: "qa" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 shadow-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="uppercase font-semibold text-xl text-gray-800 tracking-wide">
            Resumify
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.link}
              smooth={true}
              duration={600}
              offset={0}
              spy={true}
              activeClass="text-indigo-600"
              className="cursor-pointer text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg shadow-md border-t border-gray-100">
          <div className="flex flex-col items-center py-4 space-y-3">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.link}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
