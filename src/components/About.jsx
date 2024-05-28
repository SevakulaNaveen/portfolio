import React from 'react';
import profileImage from '../assets/aboutpic.png';

const About = () => {
    return (
        <section id="about" className="py-6 space-y-10  bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h2 className="text-3xl font-bold  text-center mt-6 ">About Me</h2>
            <div className="container mx-auto py-10 px-4 flex flex-col md:flex-row items-center">

                <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                    <img src={profileImage} alt="Profile" className="w-64 h-64 rounded-full object-cover shadow-lg" />
                </div>
                <div className="md:w-1/3 px-8 mb-8 md:mb-0">
                    <h3 className="text-3xl font-bold  mb-4">Education</h3>
                    <p className='text-lg'>
                        <strong>Master of Computer Application</strong><br />
                        2021 - 2023
                    </p>
                    <p className="mt-4 text-lg">
                        <strong>Bachelor of Science</strong><br />
                        2018 - 2021
                    </p>
                </div>
                <div className="md:w-1/3 px-8">
                    <h3 className="text-3xl font-bold  mb-4">Interests</h3>
                    <ul className="list-disc list-inside text-lg">
                        <li>Coding and Programming</li>
                        <li>Learning New Technologies</li>
                        <li>Tech Content Creation</li>
                        <li>Playing Cricket</li>
                        <li>Hiking and Outdoor Activities</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
