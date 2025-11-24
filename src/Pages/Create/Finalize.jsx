import React, { useRef } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import Export from "./Export";

export default function Finalize() {
  const resumeRef = useRef(null);

  return (
    <CreateLayout resumeRef={resumeRef}>
      <Export resumeRef={resumeRef} />
    </CreateLayout>
  );
}
