import Link from "next/link";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold flex-grow">
          <Link href="/">
            <span className="hover:text-yellow-300 cursor-pointer">
              Anum Saeed
            </span>
          </Link>
        </h1>
        <nav className="flex space-x-6">
          <Link href="/">
            <span className="flex items-center text-yellow-100 hover:text-yellow-300 transition duration-200 cursor-pointer">
              <FaHome className="mr-2" />
            </span>
          </Link>
          <Link href="/about">
            <span className="flex items-center text-yellow-100 hover:text-yellow-300 transition duration-200 cursor-pointer">
              <FaUser className="mr-2" /> About
            </span>
          </Link>
          <Link href="/project">
            <span className="flex items-center text-yellow-100 hover:text-yellow-300 transition duration-200 cursor-pointer">
              <FaProjectDiagram className="mr-2" /> Project
            </span>
          </Link>
          <Link href="/contact">
            <span className="flex items-center text-yellow-100 hover:text-yellow-300 transition duration-200 cursor-pointer">
              <FaEnvelope className="mr-2" /> Contact
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
