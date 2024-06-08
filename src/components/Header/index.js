import React from 'react';
import DarkModeToggle from '../DarkModeToggle';

function Header() {
    return (
        <header className="bg-gray-300 dark:bg-gray-800 p-4 shadow-md">
            <nav className="container mx-auto flex flex-wrap justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-300 text-center w-full md:w-auto md:flex-1">WikiSearch</h1>
                <div className="w-full md:w-auto flex justify-end md:flex-none mt-2 md:mt-0">
                    <DarkModeToggle />
                </div>
            </nav>
        </header>
    );
}

export default Header;

