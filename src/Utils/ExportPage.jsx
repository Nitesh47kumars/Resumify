import React, { useState } from "react";

export default function ExportPage({ handleExportPNG, handleExportPDF }) {
  const [loadingFormat, setLoadingFormat] = useState(null);

  const handleDownload = async (format) => {
    setLoadingFormat(format);

    setTimeout(() => {
      if (format === "png") handleExportPNG();
      if (format === "pdf") handleExportPDF();
      setLoadingFormat(null);
    }, 600);
  };

  return (
    <div className="w-full h-full bg-white shadow-sm flex flex-col items-center justify-center px-5 text-center">
      <h1 className="text-3xl font-bold text-gray-900">
        Thank You For Visiting Us
      </h1>

      <p className="text-gray-600 mt-3 max-w-xl">
            I hope this resume builder helped you. If you’d like to connect or explore my
            work, visit my Portfolio and LinkedIn —
        <br />
            <a
                href="https://portfolio-ten-jade-21.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
                Portfolio
            </a>
                {"  |  "}
            <a
                href="https://www.linkedin.com/in/nitesh-kumar-b18348346/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
                LinkedIn
            </a>
        </p>


      <h2 className="text-xl font-semibold text-gray-800 mt-8">
        Choose Download Format
      </h2>

      <div className="flex flex-wrap gap-3 mt-5 sm:flex-nowrap">
        <button
          onClick={() => handleDownload("png")}
          className={`flex-1 sm:flex-none px-6 py-3 rounded w-full sm:w-auto text-white font-medium transition 
          ${loadingFormat === "png" ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}
          `}
          disabled={loadingFormat === "png"}
        >
          {loadingFormat === "png" ? "Processing..." : "Download PNG"}
        </button>

        <button
          onClick={() => handleDownload("pdf")}
          className={`flex-1 sm:flex-none px-6 py-3 rounded w-full sm:w-auto text-white font-medium transition
          ${loadingFormat === "pdf" ? "bg-red-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}
          `}
          disabled={loadingFormat === "pdf"}
        >
          {loadingFormat === "pdf" ? "Processing..." : "Download PDF"}
        </button>
      </div>
    </div>
  );
}
