export default function SummarySection({ summary }) {
    if (!summary) return null;
  
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Summary</h2>
        <p className="text-sm leading-relaxed">{summary}</p>
      </section>
    );
  }
  