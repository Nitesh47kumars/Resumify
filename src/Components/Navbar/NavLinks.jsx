import { Link } from "react-scroll";

const NavLinks = ({ links, onClick }) => {
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
          onClick={onClick} // This will close the menu on mobile after clicking a link.
          className="cursor-pointer text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
