import React from "react";
import TemplateGrid from "./TemplateGrid";

const templates = [
    {
      id: 1,
      title: "Modern Resume",
      img: "/template1.jpg",
    },
    {
      id: 2,
      title: "Classic Resume",
      img: "/template2.jpg",
    },
    {
      id: 3,
      title: "Creative Resume",
      img: "/template3.jpeg",
    },
    {
      id: 4,
      title: "Minimal Resume",
      img: "/template4.png",
    },
  ];
  

const Template= () => {
  return (
    <section id="templates" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Choose Your Resume Template
        </h2>
        <p className="text-gray-600 mb-10">
          Select from a variety of professionally designed templates to kickstart your career.
        </p>

        <TemplateGrid templates={templates} />
      </div>
    </section>
  );
};

export default Template
