import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md p-7 flex justify-between items-center sticky top-0 z-10">
            <div className="text-2xl font-bold text-blue-500 ml-8">
                Naveen Shevakula
            </div>
            <nav className="hidden md:flex md:flex-grow md:justify-center font-semibold text-lg ">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 px-4 cursor-pointer"
                >
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 px-4 cursor-pointer"
                >
                    About
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 px-4 cursor-pointer"
                >
                    Projects
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 px-4 cursor-pointer"
                >
                    Skills
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 px-4 cursor-pointer"
                >
                    Contact
                </Link>
            </nav>
            <div className="hidden md:block">
                <a
                    href="https://drive.google.com/file/d/18Y7cwXo_jTidlub_41Mon1WiuGCM-0DI/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                    Resume
                </a>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                    </svg>
                </button>
            </div>
            <nav className={`absolute top-full left-0 w-full bg-white flex flex-col items-start md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 py-2 px-4 cursor-pointer"
                    onClick={toggleMenu}
                >
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 py-2 px-4 cursor-pointer"
                    onClick={toggleMenu}
                >
                    About
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 py-2 px-4 cursor-pointer"
                    onClick={toggleMenu}
                >
                    Projects
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 py-2 px-4 cursor-pointer"
                    onClick={toggleMenu}
                >
                    Skills
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="block text-gray-700 hover:text-blue-500 py-2 px-4 cursor-pointer"
                    onClick={toggleMenu}
                >
                    Contact
                </Link>
                <a
                    href="https://drive.google.com/your-resume-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-500 py-2 px-4 mr-6"
                >
                    Resume
                </a>
            </nav>
        </header>
    );
};

export default Header;
