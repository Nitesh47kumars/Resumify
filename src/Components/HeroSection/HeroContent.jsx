import ResumeButton from "../ResumeButton"
export default function HeroContent() {
  return (
    <div className="md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Create a{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
          Stunning Resume
        </span>{" "}
        That Gets You Hired
      </h1>

      <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto md:mx-0">
        Build, customize, and download your professional resume in minutes —
        no design skills required.
      </p>
      <ResumeButton data="Create Resume" />
    </div>
  );
}
