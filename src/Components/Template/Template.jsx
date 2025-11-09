import React from "react";
import TemplateContent from "./TemplateContent";
import TemplateImage from "./TemplateImage";

const Template = () => {
  return (
    <section id="templates" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        <TemplateContent />
        <TemplateImage />
      </div>
    </section>
  );
};

export default Template;
