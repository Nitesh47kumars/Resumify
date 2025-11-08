import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Resume<span className="text-blue-500">Builder</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm">
              Build your professional resume in minutes. Select a template, customize, and download.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-6">
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

            {/* Social Links */}
            <div className="flex flex-col space-y-2 text-center sm:text-left">
              <h3 className="text-white font-semibold mb-2">Follow Us</h3>
              <div className="flex justify-center sm:justify-start gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ResumeBuilder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
