import React from 'react'

const Header = () => {

    const links = [
        {name: "About", link: "about"},
        {name: "Features", link: "features"},
        {name: "Templates", link: "templates"},
        {name: "Q & A", link: "qa"},
    ]

  return (
    <header className="flex justify-between items-center px-6 py-5 bg-transparent shadow-xl sticky top-0 z-1 backdrop-blur-xl">

        <div className="flex items-center space-x-2">
            <img src="/Logo.png" className="h-10 w-10 object-cover rounded-full" alt="Logo" />
            <span className="uppercase font-semibold text-xl text-gray-700">Resumify</span>
        </div>

        <div className="hidden md:flex space-x-10 pe-10">
            {links.map((link,idx)=>{
                return <button key={idx} className="cursor-pointer text-sm font-medium text-gray-700 hover:text-indigo-600">
                    {link.name}
                </button>
            })}
        </div>
    </header>

  )
}

export default Header
