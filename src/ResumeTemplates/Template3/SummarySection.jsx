import SectionTitle from "./SectionTitle";

export default function SummarySection({ summary }) {
  return (
    <section className="mb-6">
      <SectionTitle title="Professional Summary" />
      <p className="text-gray-700 text-sm">
        {summary || "A brief professional summary highlighting your strengths, experience, and value."}
      </p>
    </section>
  );
}
