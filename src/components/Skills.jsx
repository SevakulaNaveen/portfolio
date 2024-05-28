import React from 'react';

import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.png';
import jsLogo from '../assets/jsLogo.png';
import javaLogo from '../assets/javaLogo.png';
import springLogo from '../assets/springBoot.png';
import reactLogo from '../assets/reactLogo.png';
import nodeLogo from '../assets/nodeLogo.png';
import expressLogo from '../assets/expressLogo.png';
import mongoLogo from '../assets/mongoLogo.png';
import mysqlLogo from '../assets/mysqlLogo.png';
import awsLogo from '../assets/awsLogo.png';
import gitLogo from '../assets/gitLogo.png';



const Skills = () => {

    const skills = [
        { name: 'Java', logo: javaLogo },
        { name: 'SpringBoot', logo: springLogo },
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: jsLogo },
        { name: 'React Js', logo: reactLogo },
        { name: 'Node.js', logo: nodeLogo },
        { name: 'Express.js', logo: expressLogo },
        { name: 'MongoDB', logo: mongoLogo },
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'AWS', logo: awsLogo },
        { name: 'Git', logo: gitLogo },

    ];

    return (
        <section id="skills" className="py-10 ring-1 ring-slate-900/5 shadow-lg space-y-6 bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {skills.map((skill, index) => (
                        <div key={index} className="text-center">
                            <img src={skill.logo} alt={skill.name} className="w-16 h-16 mx-auto mb-2" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
