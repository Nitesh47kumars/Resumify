// src/components/Template/TemplateContent.jsx
import React from "react";
import TemplateFeatures from "./TemplateFeatures";

const TemplateContent = () => {
  return (
    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
      <h2 className="text-4xl font-bold text-gray-800">
        Build Your Resume with Beautiful Templates
      </h2>

      <p className="text-gray-600 leading-relaxed">
        Choose from a range of modern and professional templates crafted by top
        designers. Each layout is carefully structured to highlight your skills,
        experience, and achievements — helping you stand out from the crowd.
      </p>

      <TemplateFeatures />

      <button className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition">
        Explore Templates
      </button>
    </div>
  );
};

export default TemplateContent;
