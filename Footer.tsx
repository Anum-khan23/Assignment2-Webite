import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com" passHref>
            <span className="hover:text-gray-400 cursor-pointer">
              <FaFacebook size={20} />
            </span>
          </Link>
          <Link href="https://www.twitter.com" passHref>
            <span className="hover:text-gray-400 cursor-pointer">
              <FaTwitter size={20} />
            </span>
          </Link>
          <Link href="https://www.linkedin.com" passHref>
            <span className="hover:text-gray-400 cursor-pointer">
              <FaLinkedin size={20} />
            </span>
          </Link>
          <Link href="https://www.github.com" passHref>
            <span className="hover:text-gray-400 cursor-pointer">
              <FaGithub size={20} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
