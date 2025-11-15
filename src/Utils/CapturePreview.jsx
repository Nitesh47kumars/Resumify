import html2canvas from "html2canvas";

export async function capturePreview(setPreviewImage) {
  const element = document.getElementById("resume-canvas");
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 1,
    backgroundColor: null,
    useCORS: true,
  });

  setPreviewImage(canvas.toDataURL("image/png"));
}
