import React from 'react';

function Display({ data }) {
    if (!data) {
        return null;
    }
    return (
        <div className="shadow-md rounded-lg p-6 mb-4 bg-white dark:bg-gray-800">
            <h1 className="text-blue-500 dark:text-blue-300 text-lg mb-2 result-title hover:underline">
                <a href={data.link} target="_self" rel="noopener noreferrer">{data.title}</a>
            </h1>
            <p className="text-green-700 dark:text-green-300 mb-2 result-url hover:underline">
                <a href={data.link} target="_self" rel="noopener noreferrer">{data.link}</a>
            </p>
            <p className="text-gray-700 dark:text-gray-300 link-description">{data.description}</p>
        </div>
    );
}

export default Display;
