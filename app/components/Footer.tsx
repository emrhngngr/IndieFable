import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black/40 backdrop-blur-sm border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">IndieFable</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-md">
              A hand-picked showcase of the best "hidden gem" indie games.
              Discover unique experiences worth your time.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://x.com/justEmrhn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://github.com/emrhngngr/IndieFable"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} IndieFable by Emirhan
            Güngör.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;