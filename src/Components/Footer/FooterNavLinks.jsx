import React from "react";
import { Link } from "react-scroll";

const FooterNavLinks = () => {
  return (
    <div className="flex flex-col space-y-2 text-center sm:text-left">
      <h3 className="text-white font-semibold mb-2">Navigate</h3>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 cursor-pointer"
      >
        About
      </Link>
      <Link
        to="features"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 cursor-pointer"
      >
        Features
      </Link>
      <Link
        to="templates"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 cursor-pointer"
      >
        Templates
      </Link>
    </div>
  );
};

export default FooterNavLinks;
