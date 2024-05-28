// Projects.jsx
import React from 'react';
import Card from './Card';

const Projects = () => {

    const projects = [
        {
            projectName: 'SESPHR',
            description: 'Secure Sharing of Personal Health records in cloud.This Project aims to develop a secure and efficient system for sharing personal health records (PHRs) in Cloud',
            checkoutLink: 'https://github.com/SevakulaNaveen/SESPHR',
        },
        {
            projectName: 'Anime Hub',
            description: 'Developed Anime Haven Hub, a dynamic platform for anime fans where they can explore different categories of animes using MERN Stack',
            checkoutLink: 'https://github.com/SevakulaNaveen/animestore',
        },
        {
            projectName: 'Scoops of Joy',
            description: "Discover Scoops of Joy: an online ice cream parlour presenting a delightful array of unique flavors, inviting you to indulge in a scoop of happiness",
            checkoutLink: 'https://sevakulanaveen.github.io/scoopsofjooy/flavours.html',
        },
        {
            projectName: 'Groceries Store',
            description: "Welcome to our Groceries Store: Your ultimate destination for fresh, organic products, catering to all your grocery essentials.",
            checkoutLink: 'https://sevakulanaveen.github.io/Groceriesstore/',
        },
        {
            projectName: 'Expense Tracker',
            description: "Manage your finances effortlessly with our React-based Expense Tracker, simplifying your budgeting and spending habits.",
            checkoutLink: 'https://github.com/SevakulaNaveen/ExpenseTracker',
        },
        {
            projectName: 'Myntra Clone',
            description: "Experience the style revolution with our Myntra clone, offering a seamless shopping experience with the latest fashion trends at your fingertips.",
            checkoutLink: 'https://github.com/SevakulaNaveen/MyntraClone',
        },
    ];

    return (
        <section id="projects" className="py-6 bg-gradient-to-r from-blue-300 to-blue-500"> {/* Gradient from blue-200 to blue-100 */}
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-white font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            projectName={project.projectName}
                            description={project.description}
                            checkoutLink={project.checkoutLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
