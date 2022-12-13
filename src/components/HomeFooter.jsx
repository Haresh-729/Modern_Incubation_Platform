import React from 'react';
// import { Link } from 'react-router-dom';

const HomeFooter = () => {
    return (
    
        <div data-aos="fade-up" className=" w-full  h-full lg:h-full p-1">
               
            <h1 className='mt-2  lg:mt-10 lg:px-20 text-center text-base sm:text-lg md:text-xl lg:text-2xl  text-redish font-extrabold tracking-normal sm:tracking-wide md:tracking-wide lg:'>
                The collaborative platform that brings you one step closer to success!</h1>
            <div className="px-10 sm:px-20 md:px-28 " >
                <ul className="flex flex-col space-y-4 justify-center py-5 md:px-28 my-5 lg:my-20 ">
                    <li className="rounded-md shadow">
                        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-full lg:py-2 items-center justify-center rounded border-2 lg:border-4 border-[#013BBA]  bg-white text-base font-extrabold text-[#013BBA] 
                                    hover:text-white hover:border-blue hover:bg-blue">
                            <a href="/register">
                                GET STARTED
                            </a>
                        </button>
                    </li>
                    <li className="rounded-md shadow ">
                        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-full lg:py-2 items-center justify-center rounded border-2 lg:border-4 border-[#013BBA]  bg-blue  text-base font-extrabold text-white 
                                    hover:text-blue hover:bg-white">
                            <a href="/register">
                                SIGN UP
                            </a>
                        </button>
                    </li>
                    <li className="rounded-md shadow">
                        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-full lg:py-2 items-center justify-center rounded border-2 lg:border-4 border-[#013BBA]  bg-white  text-base font-extrabold text-[#013BBA] 
                                     hover:text-white  hover:border-blue hover:bg-blue">
                            <a href="/know-more">
                                KNOW MORE
                            </a>

                        </button>
                    </li>
                </ul>
            </div >
            <footer className="lg:m-4 bg-[#C5D4F2] md:p-3 sm:p-2 rounded-3xl">
                <div className="md:flex md:justify-between">
                    <div>
                        <img src="https://i.ibb.co/NNgmSDY/footer-img.png" className="hidden lg:block md:block lg:px-8 md:pr-5 lg:h-60 lg:w-96 md:h-48 md:w-96" alt="footer-img" />
                    </div>
                    <div className="lg:h-full lg:w-full md:w-full md:h-full">
                        <img src="https://i.ibb.co/R9cKZRv/Group-27.png" className="lg:w-64 md:w-48 w-32 px-3" alt="logo"></img>
                        <div className="lg:pb-1 md:pb-4 mx-auto">
                            <div className="select-none lg:text-lg md:text-sm text-[11px] text-gray-500 px-5">
                                502 GPM, Bandra Kherwadi East
                                <p className="select-none lg:text-lg md:text-sm text-[11spx] text-gray-500">Mumbai -400001</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center justify-between pt-2">
                            <div>
                                <ul className="text-gray-600 lg:text-lg md:text-xs md:leading-5 text-[11px]">
                                    <li>
                                        <a href="/about" className="hover:underline">About Us</a>
                                    </li>
                                    <li >
                                        <a href="https://modernsolnhub.com/page/contact-h8km3" className="select-none hover:underline">Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://modernsolnhub.com/page/internship-r6npio" className="hover:underline">Internship</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-gray-600 lg:text-lg md:text-xs md:leading-5 text-[11px]">
                                    <li >
                                        <a href="https://modernsolnhub.com/page/microservices-certification-qw546f" className="hover:underline">Certification</a>                                   </li>
                                    <li >
                                        <a href="/Dashboard" className="hover:underline">Home</a>
                                    </li>
                                    <li>
                                        <a href="https://modernsolnhub.com/" className="hover:underline">ModernSolHub</a>                                   </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-gray-600 lg:text-lg md:text-xs md:leading-5 text-[11px]">
                                    <li>
                                        <a href="/know-more" className="hover:underline">Know More</a>
                                    </li>
                                    <li >
                                        <a href="https://modernsolnhub.com/page/our-leaders-h8km3" className="hover:underline">Leaders</a>
                                    </li>
                                    <li>
                                        <a href="https://modernsolnhub.com/page/student-to-smart-it-professional-masterclass" className="hover:underline">Course</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <hr className=" border-gray-200 sm:mx-auto lg:mb-2" /> */}
                    <div className=" mb-2 flex gap-2 sm:mt-3 lg:pr-5 md:pr-5 md:w-96 w-32 pb-2 h-8 pt-2 justify-center mx-auto">
                        <a href="https://www.instagram.com/haresh_kurade_729/" className="lg:mt-[11.5rem] md:mt-[9.5rem]">
                            <img
                                alt="instagram"
                                src="https://i.ibb.co/BwmjsLB/instagram.png"
                                className=" transition ease-in-out   hover:scale-75  duration-1"
                            ></img>
                            <span className="sr-only">instagram page</span>
                        </a>
                        <a href="https://www.facebook.com/haresh.kurade.729/" className="lg:mt-[11.5rem] md:mt-[9.5rem]">
                            <img
                                alt="Facebook"
                                src="https://i.ibb.co/c8nkskK/facebook.png"
                                className="transition ease-in-out   hover:scale-75  duration-10"
                            ></img>
                            <span className="sr-only">facebook page</span>
                        </a>
                        <a href="https://web.telegram.org/k/#@Haresh_Kurade_729" className="lg:mt-[11.5rem] md:mt-[9.5rem]">
                            <img
                                alt="telegram"
                                src="https://i.ibb.co/T8YTjmF/telegram.png"
                                className="transition ease-in-out   hover:scale-75  duration-10"
                            ></img>
                            <span className="sr-only">telegram page</span>
                        </a>
                        <a href="http://www.linkedin.com/in/haresh-kurade-22a04b241" className="lg:mt-[11.5rem] md:mt-[9.5rem]">
                            <img
                                alt="in"
                                src="https://i.ibb.co/YZBFK1h/in.png"
                                className="transition ease-in-out   hover:scale-75  duration-10"
                            ></img>
                            <span className="sr-only">in page</span>
                        </a>
                        <a href="https://twitter.com/" className="lg:mt-[11.5rem] md:mt-[9.5rem]">
                            <img
                                alt="twitter"
                                src="https://i.ibb.co/d0mY9Zp/twitter.png"
                                className="transition ease-in-out hover:scale-75  duration-10"
                            ></img>
                            <span className="sr-only">twitter page</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default HomeFooter;