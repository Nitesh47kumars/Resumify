import { SectionTitle } from "./SectionTitle";

export function HeaderSection({ header }) {
  return (
    <header className="border-b-2 border-gray-300 pb-4 mb-6">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
        {header.firstName || "Your"} {header.lastName || "Name"}
      </h1>

      <p className="text-sm text-gray-700 mt-1">
        {header.profession || "Professional Title"}
      </p>

      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
        {header.email && <span>{header.email}</span>}
        {header.phone && <span>{header.phone}</span>}
        {(header.city || header.country) && (
          <span>
            {header.city}, {header.country}
          </span>
        )}
        {header.linkedin && (
          <a href={header.linkedin} target="_blank" className="text-blue-600">
            LinkedIn
          </a>
        )}
        {header.github && (
          <a href={header.github} target="_blank" className="text-blue-600">
            GitHub
          </a>
        )}
      </div>
    </header>
  );
}
