export function HeaderSection({ data = {} }) {
  const name = data.name?.trim() || "Your Name";
  const profession = data.profession?.trim() || "Professional Title";

  const email = data.email?.trim() || "your.email@example.com";
  const phone = data.phone?.trim() || "+91 00000 00000";

  const address = data.address?.trim() || "City, State, Country - 000000";

  return (
    <header className="border-b-2 border-gray-300 pb-4 mb-6">

      {/* NAME */}
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
        {name}
      </h1>

      {/* PROFESSION */}
      <p className="text-sm text-gray-700 mt-1">{profession}</p>

      {/* CONTACT ROW */}
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">

        {/* Email */}
        <span>{email}</span>

        {/* Phone */}
        <span>{phone}</span>

        {/* Address */}
        <span>{address}</span>

        {/* LinkedIn */}
        {data.header?.linkedin && (
          <a
            href={data.header.linkedin}
            target="_blank"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
        )}

        {/* GitHub */}
        {data.header?.github && (
          <a
            href={data.header.github}
            target="_blank"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
        )}

        {/* Website */}
        {data.header?.website && (
          <a
            href={data.header.website}
            target="_blank"
            className="text-blue-600 underline"
          >
            Website
          </a>
        )}
      </div>
    </header>
  );
}
