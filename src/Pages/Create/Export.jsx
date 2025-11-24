import React from "react";
import { toPng, toJpeg } from "html-to-image";

const Export = ({ resumeRef }) => {

  const handlePNG = async () => {
    if (!resumeRef.current) return alert("Preview not ready");

    const dataUrl = await toPng(resumeRef.current);

    const link = document.createElement("a");
    link.download = "resume.png";
    link.href = dataUrl;
    link.click();
  };

  const handleJPG = async () => {
    if (!resumeRef.current) return alert("Preview not ready");

    const dataUrl = await toJpeg(resumeRef.current, { quality: 1 });

    const link = document.createElement("a");
    link.download = "resume.jpg";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex gap-3 mt-5">
      <button
        onClick={handlePNG}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Download PNG
      </button>

      <button
        onClick={handleJPG}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Download JPG
      </button>
    </div>
  );
};

export default Export;
