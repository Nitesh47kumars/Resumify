import React from "react";

export default function HeaderSection({ data }) {
  const { name, email, phone, address, header } = data;

  return (
    <header className="border-b-4 border-gray-800 pb-4 mb-6">
      <h1 className="text-4xl font-bold tracking-tight">{name || "Your Name"}</h1>

      <div className="mt-3 space-y-1 text-gray-700 text-sm">
        <p>{email || "your.email@example.com"}</p>
        <p>{phone || "+91 00000 00000"}</p>
        <p>{address || "City, State, Country — 000000"}</p>

        <div className="flex gap-4 text-blue-700 underline mt-1">
          {header?.linkedin && <a href={header.linkedin}>LinkedIn</a>}
          {header?.github && <a href={header.github}>GitHub</a>}
          {header?.website && <a href={header.website}>Portfolio</a>}
        </div>
      </div>
    </header>
  );
}
