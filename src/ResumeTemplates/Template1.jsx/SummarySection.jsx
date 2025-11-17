import SectionTitle from "./SectionTitle";

export default function SummarySection({ summary }) {
  return (
    <section className="mb-6">
      <SectionTitle title="Professional Summary" />

      <div className="text-sm text-gray-700 leading-relaxed space-y-2">
        <p>
          {summary?.trim() ||
            "Write a short professional summary here..."}
        </p>
      </div>
    </section>
  );
}
