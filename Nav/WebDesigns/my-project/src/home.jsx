import logo from './Untitled.jpeg';
import backgroundImage from './homeBG.jpg';
"use client"; 

function Home() {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-900 border-black p-6 sticky top-0 z-50">
                <div className="flex items-center ml-3 flex-shrink-0 text-Black mr-6">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="font-semibold text-xl ml-3 text-white tracking-tight">IntelliLearn</span>
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
                            <h1>IntelliLearn - a personalized learning experience</h1>
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
                                <h3 className="text-xl ml-10 font-medium title-font mb-4">Personalized Quizzes</h3>
                                <p className="leading-relaxed">Our system generates quizzes tailored to your learning pace and areas of improvement.</p>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3">
                            <div className="h-full bg-gray-100 p-8 rounded shadow-md">
                                <h3 className="text-xl ml-10 font-medium title-font mb-4">The amazing GyanAI</h3>
                                <p className="leading-relaxed">Your personal learning assistent keeps tracks of your learning and solves all doubts</p>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3">
                            <div className="h-full bg-gray-100 p-8 rounded shadow-md">
                                <h3 className="text-xl ml-10 font-medium title-font mb-4">Endless study materials</h3>
                                <p className="leading-relaxed">Explore our collection of endless books and study materials. Enjoy and take a dive in the sea of knowledge</p>
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
                                    <img alt="testimonial" src="https://dummyimage.com/50x50" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
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
                                    <img alt="testimonial" src="https://dummyimage.com/50x50" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
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
                                    <img alt="testimonial" src="https://dummyimage.com/50x50" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
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



            <footer className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item">
                                    <a href="#!">About</a>
                                </li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item">
                                    <a href="#!">Contact</a>
                                </li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item">
                                    <a href="#!">Terms of Use</a>
                                </li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item">
                                    <a href="#!">Privacy Policy</a>
                                </li>
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-4">
                                    <a href="#!">
                                        <i className="bi-facebook fs-3"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item me-4">
                                    <a href="#!">
                                        <i className="bi-twitter fs-3"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <i className="bi-instagram fs-3"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
