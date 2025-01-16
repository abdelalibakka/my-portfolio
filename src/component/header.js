import React from 'react';

import banner from './images/banner.png';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <div className="">
      {/* Background Image */}
      <img
        src={banner}
        alt="Banner"
        className="object-cover w-screen h-screen object-center"
      />
     

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-5 z-10">
        {/* Logo */}
        
        <img 
    src="/logo.png" 
    alt="Web Development" 
    className="h-10 w-auto object-contain" 
  />

        {/* Navigation */}
        <nav className="p-4 mr-11">
          <ul className="  flex gap-10 list-none mt-3 p-0">
            <li>
              <a href="#accueil" className="text-white px-4 py-2 rounded-md font-semibold hover:bg-[#e1d4f4] transition duration-300">
                Accueil
              </a>
            </li>
            <li>
              <a href="#service" className="text-white px-4 py-2 rounded-md font-semibold hover:bg-[#e1d4f4] transition duration-300">
                Service
              </a>
            </li>
            <li>
              <a href="#blog" className="text-white px-4 py-2 rounded-md font-semibold hover:bg-[#e1d4f4] transition duration-300">
                My Projects
              </a>
            </li>
            <li>
              <a href="#nos-realisations" className="text-white px-4 py-2 rounded-md font-semibold hover:bg-[#e1d4f4] transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center  text-white px-4 md:px-8">
    <div className="mb-30">
      <h2 className="text-4xl font-bold justify-center">
        Hello, <span className="rounded-xl text-black bg-white p-1">I'm Abdelali</span>
      </h2>
      <h3 className="text-2xl font-semibold mt-2 ">Front-End Developer</h3>
      <p className="rounded-xl text-lg mt-4 max-w-xl mx-auto p-4 bg-white/10 flex items-center justify-end">
          I earned a Front-End Development certificate from ALX, where I gained hands-on experience with HTML, CSS, JavaScript, 
          and modern frameworks. The program enhanced my problem-solving skills and prepared me for real-world web development challenges. 
          This certification strengthened my ability to create responsive, user-friendly websites.
        </p>
          <div className="flex justify-center space-x-10 mt-8">
            <a
              href="https://github.com/abdelalibakka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-600 transition duration-300"
            >
              <FaGithub className="text-6xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaFacebook className="text-6xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              <FaLinkedin className="text-6xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
