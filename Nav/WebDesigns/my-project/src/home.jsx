import React from 'react';
import logo from './Untitled.jpeg';
import backgroundImage from './homeBG.jpg';  // Make sure you have a background image in your project

function Home() {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-white border-black p-6 sticky top-0 z-50">
                <div className="flex items-center ml-3 flex-shrink-0 text-Black mr-6">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="font-semibold text-xl ml-3 tracking-tight">IntelliLearn</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full ml-32 pb-2 block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm space-x-3 lg:flex-grow">
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:white hover:bg-teal-400 mt-4 lg:mt-0">
                            Home
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:white hover:bg-teal-400 mt-4 lg:mt-0">
                            Quiz
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:white hover:bg-teal-400 mt-4 lg:mt-0">
                            To-Do List
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:white hover:bg-teal-400 mt-4 lg:mt-0">
                            Ask any doubt
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:white hover:bg-teal-400 mt-4 lg:mt-0">
                            Profile
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:white hover:bg-teal-400 mt-4 lg:mt-0">
                            About
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:white hover:bg-teal-400 mt-4 lg:mt-0">
                            Contact
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-white bg-teal-400 border-teal-400 hover:border-transparent hover:white hover:bg-teal-900 mt-4 lg:mt-0">Log In</a>
                    </div>
                </div>
            </nav>
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-50 w-1/2 h-full">
                        {/* Additional content can be added here */}
                        <div className="text-5xl font-serif space-x-3 lg:flex-grow">
                            <h1>IntelliLearn- a personalized learning experience    </h1>
                        </div>
                        
                    </div>
                </div>
                <div className="relative z-10">
                    {/* Additional content can be added here */}
                    <h1></h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
