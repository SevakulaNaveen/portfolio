import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/picture.png';
import Typed from 'typed.js';

const Banner = () => {
  const ele = useRef(null);

  useEffect(() => {
    const typed = new Typed(ele.current, {
      strings: [
        "React.js",
        "MERN Stack",
        "Java Full Stack",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="p-6 bg-blue-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-6 px-4 md:px-0 md:ml-16 p-6 md:p-20 space-y-6">
          <h4 className="text-2xl font-bold text-gray-800 mb-3">Hi, I am</h4>
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Naveen Shevakula</h2>
          <h2 className="text-2xl">And I am Proficient in <span className="font-bold" ref={ele}></span></h2>
          <p className="text-lg text-gray-600 mt-4">
            Aspiring MCA fresher with a strong foundation in software engineering, eager to contribute technical expertise and collaborate on impactful projects within the software development sphere.
          </p>
          <div className="space-x-5 flex mt-6">
            <a href="https://www.linkedin.com/in/s-naveen45/" className="hover:bg-blue-400 border cursor-pointer px-2 py-3 w-12 h-12 bg-gray-100 flex justify-center items-center rounded-full">
              <i className="fa-brands text-2xl fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/SevakulaNaveen" className="hover:bg-blue-400 border cursor-pointer px-2 py-3 w-12 h-12 bg-gray-100 flex justify-center items-center rounded-full">
              <i className="fa-brands text-2xl fa-github"></i>
            </a>
            <a href="https://www.instagram.com/?hl=en" className="hover:bg-blue-400 border cursor-pointer px-2 py-3 w-12 h-12 bg-gray-100 flex justify-center items-center rounded-full">
              <i className="fa-brands text-2xl fa-instagram"></i>
            </a>
            <a href="https://x.com/Naveen_45__" className="hover:bg-blue-400 border cursor-pointer px-2 py-3 w-12 h-12 bg-gray-100 flex justify-center items-center rounded-full">
              <i className="fa-brands text-2xl fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 flex justify-center">
          <img
            src={profileImage}
            alt="Naveen Shevakula"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-blue-50 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
