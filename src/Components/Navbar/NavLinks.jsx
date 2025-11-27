import { Link } from "react-scroll";

const NavLinks = ({ links, onClick, isMobile }) => {
  return (
    <>
      {links.map((link, idx) => (
        <Link
          key={idx}
          to={link.link}
          smooth={true}
          duration={600}
          offset={-160}
          spy={true}
          activeClass="text-indigo-600"
          onClick={onClick}
          className={`cursor-pointer text-base font-medium transition-colors duration-200
            ${isMobile
              ? "block w-full text-center py-4 mb-2 rounded-md hover:bg-indigo-50"
              : "text-gray-700 hover:text-indigo-600"
            }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
