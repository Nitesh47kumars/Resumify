import SectionTitle from "./SectionTitle";

export default function SummarySection({ summary }) {
    return (
      <section style={{ marginBottom: "24px" }}>
        <SectionTitle title="Summary"/>
  
        <p style={{ fontSize: "15px", color: "#444" }}>
          {summary?.trim() || "Write a short professional summary here..."}
        </p>
      </section>
    );
  }
  