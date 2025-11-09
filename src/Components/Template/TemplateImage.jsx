// src/components/Template/TemplateImage.jsx
import React from "react";

const TemplateImage = () => {
  return (
    <div className="lg:w-1/2 flex justify-center">
      <img
        src="/template1.jpg"
        alt="Resume Templates Preview"
        className="rounded-lg shadow-xl w-full max-w-md hover:scale-[1.02] transition-transform duration-300"
      />
    </div>
  );
};

export default TemplateImage;
