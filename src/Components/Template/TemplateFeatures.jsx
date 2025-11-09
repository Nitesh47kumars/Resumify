import React from "react";

const TemplateFeatures = () => {
  const features = [
    "✅ Professionally designed templates",
    "✅ Easy customization in real-time",
    "✅ Perfect for any career level",
  ];

  return (
    <ul className="text-gray-700 space-y-2">
      {features.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TemplateFeatures;
