export default function ProjectsSection({ data }) {
    if (!data.projects || data.projects.length === 0) return null;
  
    return (
      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b pb-1 mb-2">Projects</h2>
  
        {data.projects.map((proj, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{proj.title}</p>
            <p className="text-sm mb-1 text-gray-800">{proj.tech}</p>
            <p className="text-sm">{proj.description}</p>
          </div>
        ))}
      </section>
    );
  }
  