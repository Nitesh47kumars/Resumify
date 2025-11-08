import React from "react";

const templates = [
  {
    id: 1,
    title: "Modern Resume",
    img: "https://via.placeholder.com/300x400.png?text=Modern+Template",
  },
  {
    id: 2,
    title: "Classic Resume",
    img: "https://via.placeholder.com/300x400.png?text=Classic+Template",
  },
  {
    id: 3,
    title: "Creative Resume",
    img: "https://via.placeholder.com/300x400.png?text=Creative+Template",
  },
  {
    id: 4,
    title: "Minimal Resume",
    img: "https://via.placeholder.com/300x400.png?text=Minimal+Template",
  },
];

const Template = () => {
  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Choose Your Resume Template
        </h2>
        <p className="text-gray-600 mb-10">
          Select from a variety of professionally designed templates to kickstart your career.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={template.img}
                alt={template.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {template.title}
                </h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Template;
