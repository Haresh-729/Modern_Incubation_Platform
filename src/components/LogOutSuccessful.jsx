import React from 'react'
import cloud1 from './../assets/cloud1.png'

// import toast, { Toaster } from 'react-hot-toast';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LogOutSuccessful(){
    const notify = () => toast('Here is your toast.');
    return(
        <div className="bg-cover mt-10 h-screen w-screen flex justify-center ">
            
            <img className="transition ease-in-out delay-100 w-[10rem] md:w-[20rem] lg:w-[30rem] md:float-left sm:mr-10 absolute hover:-translate-y-1 hover:scale-110 hover:invisible" src={cloud1} alt='cloud'/>
            <div className=" flex flex-col absolute w-full mx-10 justify-center items-center  h-auto">
                <div className=" mx-2 mt-10 bg-red w-full h-[5rem] sm:h-[7rem] md:h-[10rem] lg:h-[12rem] rounded-[1rem] md:rounded-[3rem] border-2 border-offwhite shadow-lg">
                    <h1 className="font-normal poppins text-[#013BBA] text-sm sm:text-xl lg:text-2xl my-5 sm:mx-10 px-10">You have been Successfully<br/> Logged Out</h1>
                </div>   
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 sm:text-lg lg:text-xl lg:py-2 lg:px-6 px-4 mt-4 font-extrabold font-poppins text-[0.7rem]  text-white bg-blue rounded-[0.3rem] hover:bg-lb focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                    LOGIN AGAIN
                </button>
            </div>
            
        </div>
    )
}

export default LogOutSuccessful;