import React, { useRef } from "react";
import { useStep } from "../Context/StepContext";
import ResumeTemplate1 from "../ResumeTemplates/Template1/ResumeTemplate1";
import ResumeTemplate2 from "../ResumeTemplates/Template2/ResumeTemplate2";
import ResumeTemplate3 from "../ResumeTemplates/Template3/ResumeTemplate3";
import ResumeTemplate4 from "../ResumeTemplates/Template4/ResumeTemplate4";
import htmlToImage from "html-to-image";
import { jsPDF } from "jspdf";

const ExportResume = ({ template }) => {
  const { formData } = useStep();
  const exportRef = useRef();

  const header = formData.header || {};
  const mergedData = {
    name: `${header.firstName || ""} ${header.lastName || ""}`.trim(),
    email: header.email || "",
    phone: header.phone || "",
    address: `${header.city || ""} ${header.state || ""} ${header.country || ""} ${header.pin || ""}`.trim(),
    summary: formData.summary || "",
    skills: formData.skills || [],
    experience: formData.experience || [],
    education: formData.education || [],
    header: {
      linkedin: header.linkedin || "",
      website: header.website || "",
      github: header.github || "",
    }
  };

  const handleExportPNG = async () => {
    if (!exportRef.current) return;
    const dataUrl = await htmlToImage.toPng(exportRef.current, { quality: 1, pixelRatio: 2 });
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "resume.png";
    link.click();
  };

  const handleExportPDF = async () => {
    if (!exportRef.current) return;
    const dataUrl = await htmlToImage.toPng(exportRef.current, { quality: 1, pixelRatio: 2 });
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4"
    });
    const imgProps = pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <>
      {/* Hidden full-size resume for export */}
      <div
        ref={exportRef}
        style={{
          position: "absolute",
          left: "-9999px",
          width: "794px", // A4 width at 96dpi
          minHeight: "1123px", // A4 height at 96dpi
          padding: "40px",
          background: "white"
        }}
      >
        {template === "template1" && <ResumeTemplate1 data={mergedData} />}
        {template === "template2" && <ResumeTemplate2 data={mergedData} />}
        {template === "template3" && <ResumeTemplate3 data={mergedData} />}
        {template === "template4" && <ResumeTemplate4 data={mergedData} />}
      </div>

      {/* Export buttons */}
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleExportPNG}
        >
          Export PNG
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={handleExportPDF}
        >
          Export PDF
        </button>
      </div>
    </>
  );
};

export default ExportResume;
