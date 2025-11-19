import React from "react";

export default function ResumeTemplate3() {
  return (
    <div className="w-[800px] mx-auto bg-white text-gray-800 p-10 font-sans border border-gray-300 shadow-sm">
      {/* HEADER */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-wide">FULL NAME</h1>
          <p className="text-sm mt-1">Job Title / Role</p>
        </div>
        <div className="text-right text-xs leading-relaxed">
          <p>Email: example@mail.com</p>
          <p>Phone: +91 9999999999</p>
          <p>Location: City, Country</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="col-span-1 space-y-6">
          {/* Profile */}
          <section>
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">PROFILE</h2>
            <p className="text-sm leading-relaxed">
              A short professional summary that highlights strengths, experience,
              and career goals.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">SKILLS</h2>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Skill One</li>
              <li>Skill Two</li>
              <li>Skill Three</li>
              <li>Skill Four</li>
            </ul>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-lg font-semibold border-b pb-1 mb-2">LANGUAGES</h2>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>English</li>
              <li>Hindi</li>
            </ul>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-2 space-y-6">
          {/* Experience */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">WORK EXPERIENCE</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm">Job Title — Company Name</h3>
                <p className="text-xs text-gray-500 mb-1">Jan 2023 - Present</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>Responsibility or achievement 1.</li>
                  <li>Responsibility or achievement 2.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Job Title — Company Name</h3>
                <p className="text-xs text-gray-500 mb-1">2021 - 2023</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>Responsibility or achievement 1.</li>
                  <li>Responsibility or achievement 2.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">EDUCATION</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-sm">Degree — College Name</h3>
                <p className="text-xs text-gray-500">2020 - 2023</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Higher Secondary — School Name</h3>
                <p className="text-xs text-gray-500">2018 - 2020</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">CERTIFICATIONS</h2>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Certification Name</li>
              <li>Certification Name</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
