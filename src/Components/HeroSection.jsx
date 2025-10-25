export default function HeroSection() {
    return (
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-[-8rem] left-[-8rem] w-[300px] h-[300px] bg-indigo-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-8rem] right-[-8rem] w-[300px] h-[300px] bg-purple-300/30 rounded-full blur-3xl"></div>
  
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
          
          {/* LEFT SIDE */}
          <div className="md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Create a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Stunning Resume
              </span>{" "}
              That Gets You Hired
            </h1>
  
            <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto md:mx-0">
              Build, customize, and download your professional resume in minutes —
              no design skills required.
            </p>
  
            <div className="pt-2">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition">
                Create Resume
              </button>
            </div>
          </div>
  
          {/* RIGHT SIDE (Image) */}
          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <img
              src="/resume-preview.png"
              alt="Resume Preview"
              className="w-[90%] md:w-[80%] max-w-md rounded-xl shadow-2xl border border-gray-100"
            />
          </div>
        </div>
      </section>
    );
  }
  