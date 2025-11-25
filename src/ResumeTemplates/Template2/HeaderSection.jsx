export function HeaderSection({ data = {} }) {
  const name = data.name?.trim() || "Your Name";

  const email = data.email?.trim() || "your.email@example.com";
  const phone = data.phone?.trim() || "+91 00000 00000";

  const address = data.address?.trim() || "City, State, Country - 000000";

  return (
    <header className="border-b-2 border-gray-300 pb-4 mb-6">

      <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
        {name}
      </h1>


      <div className="flex flex-col gap-1 mt-3 text-sm text-gray-700">
        <div>
          <span>{email}</span>

          <span>{phone}</span>

          <span>{address}</span>
        </div>


        <div className="flex gap-3">
          {data.header?.linkedin && (
            <a
            href={data.header.linkedin}
            target="_blank"
            className="text-blue-600 underline"
            >
              LinkedIn
            </a>
          )}

          {data.header?.github && (
            <a
            href={data.header.github}
            target="_blank"
            className="text-blue-600 underline"
            >
              GitHub
            </a>
          )}

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
      </div>
    </header>
  );
}
