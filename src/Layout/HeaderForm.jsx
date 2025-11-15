import { useStep } from "../Context/StepContext";
import html2canvas from "html2canvas";
import { useEffect } from "react";

export default function HeaderForm() {
  const { formData, setFormData, setPreviewImage } = useStep();

  const regeneratePreview = async () => {
    const element = document.getElementById("resume-template");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const image = canvas.toDataURL("image/png");
    setPreviewImage(image);
  };

  useEffect(() => {
    regeneratePreview();
  }, [formData]);

  return (
    <div>
      {/* your input fields */}
    </div>
  );
}
