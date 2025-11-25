import { SectionTitle } from "./SectionTitle";

export function SummarySection({ summary }) {
  return (
    <section className="mb-6">
      <SectionTitle title="Professional Summary" />
      <p className="text-sm text-gray-700 leading-relaxed">
        {summary?.trim() || "Write a short professional summary here..."}
      </p>
    </section>
  );
}
