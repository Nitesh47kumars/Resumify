import React from "react";
import { toPng, toJpeg } from "html-to-image";
import jsPDF from "jspdf";

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

  const handlePDF = async () => {
    if (!resumeRef.current) return alert("Preview not ready");

    const canvasImage = await toPng(resumeRef.current, { quality: 1 });
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const img = new Image();
    img.src = canvasImage;

    img.onload = () => {
      const ratio = img.width / img.height;
      const height = pdfWidth / ratio;

      pdf.addImage(canvasImage, "PNG", 0, 0, pdfWidth, height);
      pdf.save("resume.pdf");
    };
  };

  return (
    <div
      className="
        flex flex-wrap gap-3 mt-5
        sm:flex-nowrap
      "
    >

      <button
        onClick={handlePNG}
        className="
          flex-1 sm:flex-none
          px-4 py-2 
          bg-indigo-600 text-white rounded
          text-sm sm:text-base
          w-full sm:w-auto
        "
      >
        Download PNG
      </button>

      <button
        onClick={handleJPG}
        className="
          flex-1 sm:flex-none
          px-4 py-2 
          bg-green-600 text-white rounded
          text-sm sm:text-base
          w-full sm:w-auto
        "
      >
        Download JPG
      </button>

      <button
        onClick={handlePDF}
        className="
          flex-1 sm:flex-none
          px-4 py-2 
          bg-red-600 text-white rounded
          text-sm sm:text-base
          w-full sm:w-auto
        "
      >
        Download PDF
      </button>

    </div>
  );
};

export default Export;
