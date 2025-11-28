import React, { useRef } from "react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { useStep } from "../Context/StepContext";

import ResumeTemplate1 from "../ResumeTemplates/Template1/ResumeTemplate1";
import ResumeTemplate2 from "../ResumeTemplates/Template2/ResumeTemplate2";
import ResumeTemplate3 from "../ResumeTemplates/Template3/ResumeTemplate3";
import ResumeTemplate4 from "../ResumeTemplates/Template4/ResumeTemplate4";
import ExportPage from "./ExportPage";

const Export = () => {
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
    },
  };

  const selectedTemplate = formData.template;

  // Export PNG
  const handleExportPNG = async () => {
    if (!exportRef.current) return alert("Resume not ready");
    const dataUrl = await toPng(exportRef.current, { quality: 1, pixelRatio: 2 });
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "resume.png";
    link.click();
  };

  // Export PDF (scale to fit width, height auto)
  const handleExportPDF = async () => {
    if (!exportRef.current) return alert("Resume not ready");
  
    const node = exportRef.current;
    const dataUrl = await toPng(node, { quality: 1, pixelRatio: 2 });
  
    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
  
    const img = new Image();
    img.src = dataUrl;
  
    img.onload = () => {
      const imgWidth = pageWidth;
      const imgHeight = (img.height * imgWidth) / img.width;
  
      let heightLeft = imgHeight;
      let topOffset = 0;
  
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
  
      canvas.width = img.width;
      canvas.height = (pageHeight * img.width) / pageWidth; // Visible slice height
  
      while (heightLeft > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, topOffset, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
  
        const slicedImg = canvas.toDataURL("image/png");
        const sliceHeightInPDF = (canvas.height * pageWidth) / canvas.width;
  
        pdf.addImage(slicedImg, "PNG", 0, 0, pageWidth, sliceHeightInPDF);
  
        heightLeft -= sliceHeightInPDF;
        topOffset += canvas.height;
  
        if (heightLeft > 0) {
          pdf.addPage();
        }
      }
  
      pdf.save("resume.pdf");
    };
  };
  

  return (
    <>
      <div 
        ref={exportRef}
        style={{
          position: "absolute",
          top: "110%",
          left: "50%",
          transform: "translate(-50%, 0)",
          pointerEvents: "none",
          width: "794px",
          padding: "40px",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          The Actual Resume That Will Be Exported
        </h2>
        {selectedTemplate === "template1" && <ResumeTemplate1 data={mergedData} />}
        {selectedTemplate === "template2" && <ResumeTemplate2 data={mergedData} />}
        {selectedTemplate === "template3" && <ResumeTemplate3 data={mergedData} />}
        {selectedTemplate === "template4" && <ResumeTemplate4 data={mergedData} />}
        {!selectedTemplate && <p>Please select a template.</p>}
      </div>


      <ExportPage
        handleExportPDF={handleExportPDF}
        handleExportPNG={handleExportPNG} 
      />
      
    </>
  );
};

export default Export;
