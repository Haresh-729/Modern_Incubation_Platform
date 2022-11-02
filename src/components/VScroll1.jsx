import React from "react";
import { Link } from 'react-router-dom';

function VScroll1() {
    return (
        <div className=" rounded-xl">
        <div className="flex justify-start mt-[3rem] md:mt-[0rem] text-sky-900 font-bold font-serif lg:text-xl lg:pl-10 lg:pt-6 xl:text-xl xl:pl-10 xl:pt-6 md:text-xl md:pl-10 md:pt-6 sm:text-lg sm:pl-8 sm:pt-4 text-lg pl-6 pt-4">
            Verification
        </div>
        <div className="flex justify-center">
            <div className="w-3/4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 lg:mt-20 lg:mx-10 xl:mt-20 xl:mx-10 md:mt-16 md:mx-8 sm:mt-12 sm:mx-6 mt-10 mx-4">
                <div className="bg-blue-600 h-2.5 rounded-full"></div>
            </div>
    
            <div className="flex items-end justify-end lg:pr-10 md:pr-8 sm:pr-6 xl:pr-10 pr-4">
                <img src="https://i.ibb.co/ChGygvn/profile.jpg"
                    alt="profile"
                    className="lg:h-28 lg:w-auto md:h-16 md:w-auto h-8 w-auto rounded-full"
                />
                <img
                    src="https://i.ibb.co/6bfP2Yn/not-verified.png"
                    alt="not-verified"
                    className="lg:h-12 lg:w-auto md:h-8 md:w-auto h-4 w-auto lg:mr-6 lg:mt-2 absolute drop-shadow-xl "
                />
            </div>
        </div>
    
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10">
            <div className="bg-[#6788D3] bg-opacity-40 rounded-xl">
                <div className="flex items-end justify-end">
                    <img
                        src="https://i.ibb.co/jwd9RMq/image.png"
                        alt="account created"
                        className="px-12 pt-4"
                    />
    
                    <img
                        src="https://i.ibb.co/QMdf7x2/verified.png"
                        alt="verified"
                        className="lg:h-12 lg:w-auto md:h-8 md:w-auto h-8 w-auto lg:mr-6 lg:mt-2 absolute drop-shadow-xl pr-10"
                    />
    
                    {/* column 1 */}
                </div>
                <span className="lg:text-xl text-blue font-poppins font-bold flex justify-center pt-4">Account Created</span>
                <div>
                    <div className="flex justify-around items-center px-8 pt-6">
                        <span className="lg:text-lg text-blue font-bold h-8 w-8 text-center rounded-full border-blue border-2">
                            1
                        </span>
                        <span className="lg:text-md  text-gray-600 ">
                            Create Account
                        </span>
                    </div>
                    <div className="flex justify-around items-center px-8 pt-6 pb-2">
                        <span className="lg:text-lg text-blue font-bold h-8 w-8 text-center rounded-full border-blue border-2">
                            2
                        </span>
                        <span className="lg:text-md  text-gray-600">
                            Update Profile
                        </span>
                    </div>
                </div>
            </div>
    
            {/* column 2 */}
            <div className="bg-[#6788D3] bg-opacity-40 rounded-xl">
                <div className="flex items-end justify-end">
                    <img
                        src="https://i.ibb.co/5K0PWXt/image.png"
                        alt="passed maturity test"
                        className="px-12 pt-4"
                    />
                    <img
                        src="https://i.ibb.co/QMdf7x2/verified.png"
                        alt="verified"
                        className="lg:h-12 lg:w-auto md:h-8 md:w-auto h-8 w-auto lg:mr-6 lg:mt-2 absolute drop-shadow-xl pr-10"
                    />
                </div>
                <span className="lg:text-xl text-blue font-poppins font-bold flex justify-center pt-4">Passed Maturity Test</span>
                <div>
                    <div className="flex justify-around items-center px-8 pt-6">
                        <span className="lg:text-lg text-blue font-bold h-8 w-8 text-center rounded-full border-blue border-2">
                            1
                        </span>
                        <span className="lg:text-md text-gray-600">
                            Perform Test
                        </span>
                    </div>
                    <div className="flex justify-around items-center px-8 pt-6">
                        <span className="lg:text-lg text-blue mr-3 font-bold h-8 w-8 text-center rounded-full border-blue border-2">
                            2
                        </span>
                        <span className="lg:text-md text-gray-600">
                            Pass Test
                        </span>
                    </div>
                    <div className="pt-2">
                        <div className="flex mx-auto justify-center align-middle items-center lg:text-xl text-red-500 font-bold h-12 w-12 rounded-full border-green-500 border-4">
                            80%
                        </div>
                        <div className="flex justify-center text-green-500 font-bold">
                            Result
                        </div>
                    </div>
                </div>
            </div>
    
            {/* column 3 */}
            <div className="bg-[#6788D3] bg-opacity-40 rounded-xl">
                <div className="flex items-end justify-end">
                    <img
                        src="https://i.ibb.co/828jFbL/image.png"
                        alt="documents uploading"
                        className="px-12 pt-4"
                    />
                    <img
                        src="https://i.ibb.co/6bfP2Yn/not-verified.png"
                        alt="not-verified"
                        className="lg:h-12 lg:w-auto md:h-8 md:w-auto h-8 w-auto lg:mr-6 lg:mt-2 absolute drop-shadow-xl pr-10"
                    />
                </div>
                <span className="lg:text-xl text-blue font-poppins font-bold flex justify-center pt-4">Documents Uploading</span>
                <div>
                    <div className="flex justify-around items-center px-8 pt-6 pb-2">
                        <span className="lg:text-lg text-blue font-bold h-8 w-8 text-center rounded-full border-blue border-2">
                            1
                        </span>
                        <span className="lg:text-md text-gray-600">
                            Upload Documents
                        </span>
                    </div>
                    <div className="lg:mt-4 flex">
                        <Link to='' className="font-bold mx-auto bg-blue rounded-full lg:px-10 md:px-6 px-4 lg:py-1 md:py-1 py-1 text-white hover:border-white border-4">
                            Upload
                        </Link>
                    </div>
                    <div className="flex justify-around items-center px-8 pt-6 mb-2">
                        <span className="lg:text-lg text-blue mr-20 font-bold h-8 w-8 text-center rounded-full border-blue border-2">
                            2
                        </span>
                        <span className="lg:text-md text-gray-600 -ml-8">
                            Get Verified
                        </span>
                    </div>
                </div>
            </div>
    
            {/* column 4 */}
            <div className="bg-[#6788D3] bg-opacity-40 rounded-xl">
                <div className="flex items-end justify-end">
                    <img
                        src="https://i.ibb.co/mX0WPNb/image.png"
                        alt="verification"
                        className="px-12 pt-4"
                    />
                    <img
                        src="https://i.ibb.co/6bfP2Yn/not-verified.png"
                        alt="not-verified"
                        className="lg:h-12 lg:w-auto md:h-8 md:w-auto h-8 w-auto lg:mr-6 lg:mt-2 absolute drop-shadow-xl pr-10"
                    />
                </div>
                <span className="lg:text-xl text-blue font-poppins font-bold flex justify-center">Verification</span>
                <div>
                    <div className="flex justify-around items-center px-8 pt-6">
                        <span className="lg:text-lg text-blue font-bold h-8 w-8 text-center rounded-full border-blue border-2">
                            1
                        </span>
                        <span className="lg:text-md text-gray-600">
                            Upload Documents
                        </span>
                    </div>
                    <div className="flex justify-around items-center px-8 pt-6 mb-2">
                        <span className="lg:text-lg mr-[2.6rem] text-blue font-bold h-8 w-8 text-center rounded-full border-blue border-2">
                            2
                        </span>
                        <span className="lg:text-md text-gray-600">
                            Get Verified
                        </span>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
    
    )
}

export default VScroll1;
