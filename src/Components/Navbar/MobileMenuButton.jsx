import { Menu, X } from "lucide-react";

const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileMenuButton;
