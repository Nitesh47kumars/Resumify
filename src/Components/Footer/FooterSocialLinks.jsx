import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterSocialLinks = () => {
  return (
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
  );
};

export default FooterSocialLinks;
