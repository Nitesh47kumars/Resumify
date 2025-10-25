import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 bg-gray-50 border-b">
        {/* Left: Logo or App Name */}
        <div className="flex items-center space-x-2">
            <img src="/logo.svg" className="h-6" alt="Logo" />
            <span className="font-semibold text-gray-700">ResumeCraft</span>
        </div>

        {/* Middle: Steps or Progress */}
        <div className="hidden md:flex space-x-6">
            <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">Personal Info</button>
            <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">Education</button>
            <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">Experience</button>
            <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">Skills</button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
            <button className="text-gray-600 hover:text-indigo-600 text-sm">Preview</button>
            <button className="bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700 text-sm">
            Export PDF
            </button>
            <img
            src="/user-avatar.jpg"
            className="h-8 w-8 rounded-full border cursor-pointer"
            alt="User"
            />
        </div>
    </header>

  )
}

export default Header
