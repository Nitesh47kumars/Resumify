import React from "react";

export default function ResumeForm({ onChange }) {
  return (
    <form className="resume-form">
      <input type="text" placeholder="Full Name" onChange={(e) => onChange("name", e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => onChange("email", e.target.value)} />
      <textarea placeholder="Summary" onChange={(e) => onChange("summary", e.target.value)} />
      {/* Add sections for Experience, Education, etc */}
    </form>
  );
}
