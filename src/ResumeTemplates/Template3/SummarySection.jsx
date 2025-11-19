export default function SummarySection({ summary }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
      <p className="text-gray-700 text-sm">
        {summary || "A brief professional summary highlighting your strengths, experience, and value."}
      </p>
    </section>
  );
}
