import React from "react";
import FooterBrand from "./FooterBrand";
import FooterNavLinks from "./FooterNavLinks";
import FooterSocialLinks from "./FooterSocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          <FooterBrand />

          <div className="flex flex-col sm:flex-row gap-6">
            <FooterNavLinks />
            <FooterSocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ResumeBuilder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
