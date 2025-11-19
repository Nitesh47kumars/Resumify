export default function ProjectsSection({ projects }) {
  const placeholder = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio built with React.js.",
    },
  ];

  const list = projects?.length ? projects : placeholder;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Projects</h2>

      {list.map((proj, index) => (
        <div key={index} className="mb-3">
          <h3 className="font-semibold">{proj.name}</h3>
          <p className="text-sm text-gray-700">{proj.description}</p>
        </div>
      ))}
    </section>
  );
}
