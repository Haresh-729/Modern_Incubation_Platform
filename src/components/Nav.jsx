import { useState } from "react";
import { Popover} from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full shadow sticky top-0 z-50 bg-[url('https://i.ibb.co/Smq2X7B/background.png')] bg-cover xl:h-[5rem]">
            <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-4 xl:px-4 ">
                <div>
                    <div className="flex items-center justify-between md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-4 lg:w-48 lg:h-auto md:w-48 md:h-auto w-32 h-auto" src="https://i.ibb.co/R9cKZRv/Group-27.png" alt="img desc" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"} `}>
                        <ul className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0">
                            
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to="/Dashboard" className="text-gray-600 hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-base font-medium text-gray-500 hover:text-gray-900">
                                    Home
                                </Link>
                                </li>
                            
                            <li className="text-gray-600 hover:text-blue-600">
                                {/* <a href="javascript:void(0)">Services</a> */}
                                <Link to="/service" className="text-gray-600 hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-base font-medium text-gray-500 hover:text-gray-900">
                                    Services
                                </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                {/* <a href="javascript:void(0)">About Us</a> */}
                                <Link to="/about" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-base font-medium text-gray-500 hover:text-gray-900">
                                    About Us
                                </Link>
                            </li>
                            <li className="pt-3 lg:pt-0 md:pt-0">
                            <Link to='/login' className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 whitespace-nowrap text-base font-medium text-indigo-800 hover:text-indigo-900">Login</Link>

                            <Link to='/register' className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 lg:ml-8 lg:inline-flex items-center justify-center whitespace-nowrap md:rounded-md md:border md:border-transparent md:bg-indigo-600 lg:rounded-md lg:border lg:border-transparent lg:bg-indigo-600 px-4 py-2 text-base font-medium lg:text-white shadow-sm hover:bg-indigo-700 md:ml-3 ml-3">
                            Register
                        </Link>
                        </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}