import AboutText from "./AboutText";
import AboutImage from "./AboutImage";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-gray-50 py-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">
        <AboutText />
        <AboutImage />
      </div>
    </section>
  );
}
