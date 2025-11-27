import React, { useRef } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import ExportResume from "../../Utils/ExportResume";

export default function Finalize() {
  const resumeRef = useRef(null);

  return (
    <CreateLayout resumeRef={resumeRef}>
      <ExportResume resumeRef={resumeRef} />
    </CreateLayout>
  );
}
