export default function FinalResumeTemplate() {
    return (
      <div className="w-[800px] bg-white p-10 text-black">
        <h1 className="text-4xl font-bold">{formData.firstName || "Your Name"}</h1>
        <p>{formData.email || "example@gmail.com"}</p>
        <p>{formData.phone || "0000000000"}</p>
  
        <h2 className="text-xl font-semibold mt-6 border-b">Summary</h2>
        <p>{formData.summary || "Your summary goes here…"}</p>
  
        {/* Education, Experience, Skills same as your export layout */}
      </div>
    );
  }
  