export default function ProjectsSection({ projects = [] }) {
    if (!projects.length) return null;
  
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">Projects</h2>
  
        {projects.map((proj, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-semibold text-sm">{proj.title}</h3>
            <p className="text-xs text-gray-600">{proj.link}</p>
            <p className="text-sm mt-1">{proj.description}</p>
          </div>
        ))}
      </section>
    );
  }
  