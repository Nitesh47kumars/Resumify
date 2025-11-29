export default function SectionTitle({ title }) {
    return (
      <div className="page-break relative flex items-center justify-center w-full my-2">
        <div className="absolute inset-x-0 h-px bg-gray-400"></div>
  
        <h2 className="relative bg-white px-4 
            text-base sm:text-lg md:text-xl 
            font-serif font-semibold text-gray-800">
          {title}
        </h2>
      </div>
    );
  }