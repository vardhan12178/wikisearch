import React, { useState } from 'react';
import Display from '../Display';

function Main() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const handleClick = async () => {
        const response = await fetch("https://apis.ccbp.in/wiki-search?search=" + searchInput);
        const data = await response.json();
        setSearchResults(data.search_results);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleClick();
        }
    }

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <div className="h-screen flex flex-col">
            <div className="flex-shrink-0 p-6 bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center mb-4 w-full md:w-auto">
                        <input 
                            className="w-full md:w-auto border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 mb-2 md:mb-0 md:mr-4 dark:bg-gray-800 dark:text-white" 
                            type="text" 
                            onChange={handleChange} 
                            onKeyDown={handleKeyPress} 
                            placeholder="Search on Wikipedia" 
                        />
                        <button 
                            type="button" 
                            className="bg-teal-600 hover:bg-teal-800 dark:bg-teal-300 dark:hover:bg-teal-500 text-white dark:text-black font-bold py-2 px-4 rounded" 
                            onClick={handleClick}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-y-auto bg-gray-100 dark:bg-gray-900 flex-1 p-6">
                {searchResults &&
                    <div className="flex flex-col gap-4">
                        {searchResults.map(each => <Display key={each.id} data={each} />)}
                    </div>
                }
            </div>
        </div>
    );
}

export default Main;
