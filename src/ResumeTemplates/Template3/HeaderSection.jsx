export default function HeaderSection({ data }) {
  const {
    name = "Your Name",
    header = {},
    email = "example@gmail.com",
    phone = "+91 00000 00000",
    address = "City, State, Country - PIN",
  } = data;

  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold">{name || "Your Name"}</h1>

      <p className="text-gray-600 mt-1">{address || "City, Country"}</p>

      <div className="mt-2 text-sm text-gray-700 space-y-1">
        <p><strong>Phone:</strong> {phone || "+91 00000 00000"}</p>
        <p><strong>Email:</strong> {email || "example@gmail.com"}</p>

        <div className="flex gap-4 text-blue-600 underline mt-1">
          {(header.linkedin && <a href={header.linkedin}>LinkedIn</a>) || <span>LinkedIn</span>}
          {(header.website && <a href={header.website}>Portfolio</a>) || <span>Portfolio</span>}
          {(header.github && <a href={header.github}>GitHub</a>) || <span>GitHub</span>}
        </div>
      </div>

      <hr className="border-gray-300 mt-4" />
    </header>
  );
}
