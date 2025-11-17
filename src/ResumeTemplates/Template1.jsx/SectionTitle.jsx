export default function SectionTitle({ title }) {
    return (
      <div className="relative flex items-center justify-center w-full my-2">
        {/* Background line */}
        <div className="absolute inset-x-0 h-px bg-gray-400"></div>
  
        {/* Title */}
        <h2 className="relative bg-white px-4 text-lg font-serif font-semibold text-gray-800">
          {title}
        </h2>
      </div>
    );
  }