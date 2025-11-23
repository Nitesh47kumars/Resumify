import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Export({ exportRef, jsonData, fileName = "resume" }) {
  const [message, setMessage] = useState("");

  const showMessage = () => {
    setMessage("🎉 Thank you for using our website!");
    setTimeout(() => setMessage(""), 2500);
  };

  const handleJSON = () => {
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.json`;
    link.click();
    showMessage();
  };

  const handleJPG = async () => {
    if (!exportRef?.current) {
      console.error("exportRef is missing!");
      return;
    }

    const canvas = await html2canvas(exportRef.current, { scale: 2 });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg");
    link.download = `${fileName}.jpg`;
    link.click();
    showMessage();
  };

  const handlePDF = async () => {
    if (!exportRef?.current) {
      console.error("exportRef is missing!");
      return;
    }

    const canvas = await html2canvas(exportRef.current, { scale: 2 });
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save(`${fileName}.pdf`);

    showMessage();
  };

  return (
    <div className="mt-4 bg-white shadow-md p-4 rounded space-y-2">
      <button onClick={handlePDF} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Download PDF
      </button>

      <button onClick={handleJPG} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Download JPG
      </button>

      <button onClick={handleJSON} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
        Download JSON
      </button>

      {message && <p className="text-center text-green-700">{message}</p>}
    </div>
  );
}
