import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center max-w-6xl mx-auto h-20 relative px-4">
      <h1 className="text-yellow-400 font-bold text-3xl">FreshMart</h1>
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col border-2 absolute top-[70%] right-[7%] border-gray-700 gap-y-8 rounded-lg p-6 md:flex md:flex-row md:border-none md:p-0 md:gap-x-8 md:static bg-black`}
      >
        <a
          href="#"
          className="text-gray-300 hover:text-yellow-400"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-300 hover:text-yellow-400"
        >
          About Us
        </a>
        <a
          href="#products"
          className="text-gray-300 hover:text-yellow-400"
        >
          Products
        </a>
        <a
          href="#services"
          className="text-gray-300 hover:text-yellow-400"
        >
          Services
        </a>
        <a
          href="#contact"
          className="text-gray-300 hover:text-yellow-400"
        >
          Contact Us
        </a>
      </nav>
      {!menuOpen && (
        <AiOutlineMenu
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
      {menuOpen && (
        <AiOutlineClose
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
    </header>
  );
};

export default Navbar;
