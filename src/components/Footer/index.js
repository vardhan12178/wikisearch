import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-300 dark:bg-gray-800 p-4 shadow-inner">
            <div className="container mx-auto flex flex-wrap justify-center items-center">
      
                <div className="w-full md:w-auto text-center md:text-left">
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                        &copy; {new Date().getFullYear()} WikiSearch. All rights reserved.
                    </p>
                </div>
               
            </div>
        </footer>
    );
}

export default Footer;

