import React from "react";
import TemplateCard from "./TemplateCard";

const TemplateGrid = ({ templates }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {templates.map((template) => (
        <TemplateCard key={template.id} title={template.title} img={template.img} />
      ))}
    </div>
  );
};

export default TemplateGrid;
