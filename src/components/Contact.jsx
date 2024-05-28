import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-12 bg-blue-100 text-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8 mt-0">Contact</h2>
            <div className="container mx-auto px-4 md:pl-16 lg:pl-24">
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                    <div className="flex-1 md:px-4">
                        <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
                        <div className="flex justify-start space-x-6">
                            <a href="https://www.linkedin.com/in/s-naveen45/" className="hover:text-blue-400">
                                <i className="fab fa-linkedin-in text-3xl"></i>
                            </a>
                            <a href="https://github.com/SevakulaNaveen" className="hover:text-gray-300">
                                <i className="fab fa-github text-3xl"></i>
                            </a>
                            <a href="https://www.instagram.com/im.naveen_45" className="hover:text-pink-500">
                                <i className="fab fa-instagram text-3xl"></i>
                            </a>
                            <a href="https://x.com/Naveen_45__" className="hover:text-blue-400">
                                <i className="fa-brands text-3xl fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:px-4">
                        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                        <div className="flex flex-col items-start space-y-2">
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-phone text-xl"></i>
                                <span>Phone</span>
                                <span>+91 6301976964</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-envelope text-xl"></i>
                                <span>Email</span>
                                <span>shevakulanaveen@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 md:px-4">
                        <h3 className="text-2xl font-bold mb-4">Address</h3>
                        <div className="flex flex-col items-start space-y-2">
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-map-marker-alt text-xl"></i>
                                <span>4-4-134/1 Attapur, Hyderabad, Telangana</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
