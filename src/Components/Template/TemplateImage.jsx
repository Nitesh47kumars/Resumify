import React from "react";

const TemplateImage = () => {
  const images = [
    "/template1.jpg",
    "/template2.jpg",
    "/template3.jpeg",
    "/template4.png",
  ];

  return (
    <div className="lg:w-1/2 flex justify-center items-center relative h-[350px] md:h-[450px]">
      <div className="relative w-[260px] md:w-[320px] h-full">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Template ${index + 1}`}
            className={`
              absolute top-0 left-0 w-full h-auto rounded-xl shadow-xl object-cover transition-transform duration-500
              ${index === 0 ? "-rotate-6 z-10" : ""}
              ${index === 1 ? "-rotate-2 translate-x-[15px] translate-y-[15px] z-20" : ""}
              ${index === 2 ? "rotate-2 translate-x-[30px] translate-y-[30px] z-30" : ""}
              ${index === 3 ? "rotate-6 translate-x-[45px] translate-y-[45px] z-40" : ""}
              hover:scale-105
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateImage;
