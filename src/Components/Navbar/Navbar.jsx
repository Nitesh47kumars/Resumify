import React, { useState } from "react";
import NavLinks from "./NavLinks.jsx";
import MobileMenuButton from "./MobileMenuButton";
import Logo from "./NavLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Features", link: "features" },
    { name: "Templates", link: "templates" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 shadow-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLinks links={links} />
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg shadow-md border-t border-gray-100">
          <NavLinks links={links} onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
