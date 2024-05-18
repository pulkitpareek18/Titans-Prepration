import logo from './Untitled.jpeg';
import backgroundImage from './homeBG.jpg';
"use client";

function Home() {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-white border-black p-6 sticky top-0 z-50">
                <div className="flex items-center ml-3 flex-shrink-0 text-black mr-6">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="font-semibold text-xl ml-3 text-black tracking-tight">IntelliLearn</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full ml-32 pb-2 block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm space-x-3 lg:flex-grow">
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:bg-teal-400 mt-4 lg:mt-0">
                            Home
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:bg-teal-400 mt-4 lg:mt-0">
                            Quiz
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:bg-teal-400 mt-4 lg:mt-0">
                            To-Do List
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:bg-teal-400 mt-4 lg:mt-0">
                            Ask any doubt
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:bg-teal-400 mt-4 lg:mt-0">
                            Profile
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:bg-teal-400 mt-4 lg:mt-0">
                            About
                        </a>
                        <a href="#responsive-header" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-black bg-white border-white hover:border-transparent duration-500 hover:text-white hover:bg-teal-400 mt-4 lg:mt-0">
                            Contact
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-lg px-4 py-2 leading-none border rounded-full text-white bg-teal-400 border-teal-400 hover:border-transparent hover:bg-teal-900 mt-4 lg:mt-0">Log In</a>
                    </div>
                </div>
            </nav>

            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-75 w-3/4 md:w-2/3 lg:w-1/2 p-8 rounded-lg shadow-lg">
                        <div className="text-center mb-6">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">IntelliLearn</h1>
                            <h2 className="text-xl md:text-2xl text-gray-700">A Personalized Learning Experience</h2>
                        </div>
                        <div className="text-base md:text-lg text-gray-600 text-center">
                            <p>Welcome to IntelliLearn, a revolutionary personalized learning environment where learning happens at your pace! Explore our endless learning materials or solve your doubts with our state-of-the-art A.I. assistant, Gyan AI. Never Stop Learning.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">Features</h2>
                        <p className="text-xl text-gray-500">Explore the amazing features we offer</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 w-full md:w-1/3">
                            <div className="h-full bg-gray-100 p-8 rounded shadow-md">
                                <h3 className="text-xl font-medium title-font mb-4">Personalized Quizzes</h3>
                                <p className="leading-relaxed">Our system generates quizzes tailored to your learning pace and areas of improvement.</p>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3">
                            <div className="h-full bg-gray-100 p-8 rounded shadow-md">
                                <h3 className="text-xl font-medium title-font mb-4">The Amazing GyanAI</h3>
                                <p className="leading-relaxed">Your personal learning assistant keeps track of your learning and solves all doubts.</p>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3">
                            <div className="h-full bg-gray-100 p-8 rounded shadow-md">
                                <h3 className="text-xl font-medium title-font mb-4">Endless Study Materials</h3>
                                <p className="leading-relaxed">Explore our collection of endless books and study materials. Enjoy and take a dive into the sea of knowledge.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">Testimonials</h2>
                        <p className="text-xl text-gray-500">What our users are saying</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 w-full md:w-1/3">
                            <div className="h-full bg-white p-8 rounded shadow-md">
                                <p className="leading-relaxed mb-6">IntelliLearn has transformed the way I study. The personalized quizzes and to-do list keep me on track!</p>
                                <div className="flex items-center">
                                    <img alt="testimonial" src="https://www.pikpng.com/pngl/m/417-4172348_testimonial-user-icon-color-clipart.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <div className="flex-grow pl-4">
                                        <h2 className="text-gray-900 font-medium title-font">John Doe</h2>
                                        <p className="text-gray-500">Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3">
                            <div className="h-full bg-white p-8 rounded shadow-md">
                                <p className="leading-relaxed mb-6">I love the ease of use and the comprehensive features IntelliLearn offers. It’s like having a tutor with me 24/7.</p>
                                <div className="flex items-center">
                                    <img alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cJTcGnUGeMPmAYlSxMCeoBYji2nZkiB24874s7Yrz0bXlxsQ5TPu5OhOj7bM82oEgLo&usqp=CAU" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <div className="flex-grow pl-4">
                                        <h2 className="text-gray-900 font-medium title-font">Jane Smith</h2>
                                        <p className="text-gray-500">Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3">
                            <div className="h-full bg-white p-8 rounded shadow-md">
                                <p className="leading-relaxed mb-6">The user-friendly interface and excellent customer support make IntelliLearn the best choice for our school.</p>
                                <div className="flex items-center">
                                    <img alt="testimonial" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1Zpo8P2zEkOl0OFQ3AB7q_NRmi8lNl_bBwKtzwGEeSF3VoaFxZYzsZ5uFdC31YQ4aNQ&usqp=CAU" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <div className="flex-grow pl-4">
                                        <h2 className="text-gray-900 font-medium title-font">Mark Johnson</h2>
                                        <p className="text-gray-500">Principal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
