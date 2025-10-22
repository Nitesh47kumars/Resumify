export default function ResumePreview({ data }) {
    return (
      <div className="resume-preview">
        <h1>{data.name}</h1>
        <p>{data.email}</p>
        <p>{data.summary}</p>
        {/* Display other fields nicely */}
      </div>
    );
  }
  