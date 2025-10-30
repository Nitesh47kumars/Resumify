import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      
      {/* Decorative Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-indigo-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 right-32 w-[300px] h-[300px] bg-purple-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
