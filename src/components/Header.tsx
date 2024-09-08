import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const navbars = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skill",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experiences",
  },
  {
    label: "Courses",
    href: "#courses",
  },
];

// {
//   label: "Education",
//   href: "#education",
// },

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-dark">
      <nav className="border-gray-200 lg:px-6 py-2.5 container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl">
          <a href="#" className="flex items-center">
            <span className="self-center text-3xl font-semibold whitespace-nowrap ">
              <span className="text-[#FFAF00]">Ratana</span>
            </span>
          </a>
          <div className="flex flex-row items-center lg:order-2">
            <div className="mt-1 flex">
              <a
                href="https://github.com/Ratana10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-purple-500 to-indigo-500 py-1 px-4 rounded-full hover:from-purple-600 hover:to-indigo-600 transform transition-transform hover:scale-105 flex items-center"
              >
                <FaGithub size={24} className="mr-2" />
                Github
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen}
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navbars.map((nav, index) => (
                <li key={index}>
                  <a
                    href={nav.href}
                    className={`block py-2 pr-4 pl-3 text-white text-right rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0`}
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
