import React from 'react';

const Card = ({ projectName, description, checkoutLink }) => {
    return (
        <div className="bg-white  p-6 mb-4 ring-1 ring-slate-900/5 shadow-lg rounded-md border border-transparent transition duration-300 hover:border-blue-950">
            <h3 className="text-xl text-center font-bold mb-2">{projectName}</h3>
            <p className="text-gray-700">{description}</p>
            <div className="flex justify-center mt-4">
                <a href={checkoutLink} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Check Out
                </a>
            </div>
        </div>
    );
};

export default Card;
