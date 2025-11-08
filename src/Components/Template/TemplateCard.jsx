import React from "react";

const TemplateCard = ({ title, img }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <img src={img} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition">
          Use Template
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
