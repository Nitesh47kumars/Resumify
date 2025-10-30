export default function AboutText() {
    return (
      <div className="md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          About Me
        </h2>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto md:mx-0">
          Hi! I'm a passionate <span className="font-semibold">Frontend Developer </span> 
          specializing in building responsive and user-friendly web applications. I love turning design ideas into beautiful, functional websites.
        </p>
  
        {/* About Portfolio */}
        <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto md:mx-0">
          Check out my portfolio to see the projects I've worked on, including modern web apps, interactive interfaces, and custom UI components.
        </p>
  
        <div className="pt-2">
          <a
            href="https://portfolio-ten-jade-21.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Visit My Portfolio
          </a>
        </div>
  
      </div>
    );
  }
  