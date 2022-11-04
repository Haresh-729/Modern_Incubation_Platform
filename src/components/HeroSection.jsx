import { useEffect } from "react";
import {Link} from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css"


export default function HeroSection() {
    useEffect(() =>{
        Aos.init({duration:2000})
    },[]);
    return (
        <div className="w-screen md:relative h-full lg:h-screen lx:w-screen md:w-screen sm:w-screen">
            <img 
            data-aos="fade-right" className="  absolute will-change-scroll" src="https://i.ibb.co/BjHYqT0/cloud4.png" alt="clouds"/>
            <div className="mx-auto max-w-7xl">
                <div className=" md:relative z-2 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl  lg:pb-28 xl:pb-32 ">

                    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-28 ">
                        <div className="sm:text-center lg:text-left">
                            <h1 data-aos="zoom-in" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">We</span>{' '}
                                <span className="block text-indigo-600 xl:inline">Incubate,</span>{' '}
                                <span className="block text-redish xl:inline">Nourish</span>{' '}
                                <span className="block xl:inline">and Grow</span>{' '}
                                <span className="block text-orange xl:inline">Ideas</span>
                            </h1>
                            <p data-aos="zoom-out" className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                World's largest digital incubation plateform. We help startups in acceleration and business growth.
                            </p>
                            <div data-aos="flip-up" data-aos-duration="4000" className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/register"
                                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                                    >
                                        Get started
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        to="/know-more"
                                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                                    >
                                        Know more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div data-aos="fade-left" className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2  hidden lg:block ">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-auto lg:w-full"
                    src="https://i.ibb.co/gmypWwr/heroImg.png"
                    alt=""
                />
            </div>
        </div>
    )
}
