const NavLogo = () => {
    return (
      <div className="flex items-center space-x-3">
        <img
          src="/Logo.png"
          alt="Logo"
          className="h-10 w-10 object-cover rounded-full"
        />
        <span className="uppercase font-semibold text-xl text-gray-800 tracking-wide">
          Resumify
        </span>
      </div>
    );
  };
  
  export default NavLogo;
  