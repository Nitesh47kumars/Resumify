import TemplatePreviewCanvas from "../Pages/Create/TemplatePreviewCanvas";
import { useStep } from "../Context/StepContext";

const ResumePreview = () => {
  const { formData } = useStep();

  return (
    <div className="scale-75 origin-top-left pointer-events-none">
      <TemplatePreviewCanvas data={formData} />
    </div>
  );
};

export default ResumePreview;
