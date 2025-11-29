import React from "react";

export default function HeaderSection({ data }) {
  const {
    name = "Your Name",
    header = {},
    email = "example@gmail.com",
    phone = "+91 00000 00000",
    address = "City, State, Country - PIN",
  } = data;

  return (
    <header className="text-center mb-6">
      <hr className="border-gray-300" />

      <h1 className="text-xl sm:text-2xl md:text-3xl my-1 font-serif font-bold text-gray-900">
        {name?.trim() || "Your Name Here"}
      </h1>

      <hr className="border-gray-300 mb-1" />

      <div className="flex flex-col items-center gap-1 text-[11px] sm:text-[12px] md:text-[13px] text-gray-700 leading-relaxed">
        <p>{address?.trim() || "Your Address Here"}</p>

        <p>
          <a href={`tel:${phone}`} className="hover:underline hover:text-blue-600">
            Phone: {phone || "+91 00000 00000"}
          </a>{" "}
          |{" "}
          <a href={`mailto:${email}`} className="hover:underline hover:text-blue-600">
            Email: {email || "example@gmail.com"}
          </a>
        </p>

        <p>
          {header?.linkedin && (
            <>
              <a
                href={header.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                LinkedIn
              </a>{" "}
              |{" "}
            </>
          )}

          {header?.website && (
            <>
              <a
                href={header.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Portfolio
              </a>{" "}
              |{" "}
            </>
          )}

          {header?.github && (
            <a
              href={header.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              GitHub
            </a>
          )}
        </p>
      </div>
    </header>
  );
}
