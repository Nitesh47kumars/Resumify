export default function SummarySection({ data }) {
    if (!data.summary) return null;
  
    return (
      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b pb-1 mb-2">
          Professional Summary
        </h2>
        <p className="text-sm">{data.summary}</p>
      </section>
    );
  }
  