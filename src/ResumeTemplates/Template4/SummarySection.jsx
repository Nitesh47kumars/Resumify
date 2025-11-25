import React from "react";
import { SectionTitle } from "./SectionTitle";

export default function SummarySection({ summary }) {
  return (
    <section>
      <SectionTitle title="Profile Summary" />

      <p className="text-sm text-gray-700">
        {summary ||
          "A brief description about your background, strengths, and career goals."}
      </p>
    </section>
  );
}
