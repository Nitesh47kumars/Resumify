import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-5 bg-gray-50 shadow-xl">

        <div className="flex items-center space-x-2">
            <img src="/Logo.png" className="h-10 w-10 object-cover rounded-full" alt="Logo" />
            <span className="uppercase font-semibold text-xl text-gray-700">Resumify</span>
        </div>

        <div className="hidden md:flex space-x-10 pe-10">
            <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">Personal Info</button>
            <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">Education</button>
            <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">Experience</button>
            <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">Skills</button>
        </div>
    </header>

  )
}

export default Header
