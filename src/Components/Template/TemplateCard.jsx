import React from "react";

const TemplateCard = ({ title, img }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <img src={img} alt={title} className="w-full h-64 object-cover" />
      <div className="">
        <h3 className="bg-gray-50 py-3 text-lg font-semibold text-gray-700">{title}</h3>
        <button className="py-3 w-full h-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition">
          Use Template
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
