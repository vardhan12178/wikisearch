import React from 'react';
import DarkModeToggle from '../DarkModeToggle';

function Header() {
    return (
        <header className="bg-gray-300 dark:bg-gray-800 p-4 shadow-md">
            <nav className="container mx-auto flex justify-centeritems-center">
                <h1 className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-300 text-center md:text-left w-full md:w-auto">WikiSearch</h1>
                <div className="flex justify-end w-full md:w-auto">
                    <DarkModeToggle />
                </div>
            </nav>
        </header>
    );
}

export default Header;
