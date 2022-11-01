import React from "react";
import { Link } from 'react-router-dom';

function ActionsDiv() {
    return (

        <div className="  bg-[#6788D3] border rounded-3xl bg-opacity-30 shadow-lg">
            <h1 className="pl-6 pt-2 text-redish tracking-wider font-extrabold ">ACTIONS</h1>
            <div className="mx-6 my-4 border rounded-2xl h-full  bg-white bg-opacity-50 text-grey">
                <div>
                    <label for="details" className="pl-4 pt-2 font-bold text-sm tracking-wider">DETAILS</label>
                    <input type="text" placeholder="Idea wihich you have submitted is already in practice. Try something better." id="details" className="p-2 w-full px-10 text-black placeholder-slate-600 sm:text-xs focus:border-blue-500 bg-inherit border-b-2 border-gray-700" />
                    <textarea placeholder="Remarks" id="remarks" className="p-2 h-10 w-full px-10 text-black mt-10 placeholder-slate-600 sm:text-xs focus:border-blue-500 bg-inherit border-b-2 border-gray-700" />
                </div>

                <div className="flex flex-wrap space-x-10 justify-center">
                    {/* Buttons */}
                    <div className="lg:mt-20 md:mt-16 mt-12 flex">
                        <Link to='/null' className="font-bold mx-auto bg-green-500 lg:px-10 md:px-6 px-4 lg:py-1 md:py-1 py-1 text-white hover:border-white border-4">
                            Verify
                        </Link>
                    </div>

                    <div className="lg:mt-20 md:mt-16 mt-12 flex">
                        <Link to='/null' className="font-bold mx-auto bg-sky-500 lg:px-10 md:px-6 px-4 lg:py-1 md:py-1 py-1 text-white hover:border-white border-4">
                            Pin
                        </Link>
                    </div>

                    <div className="lg:mt-20 md:mt-16 mt-12 flex">
                        <Link to='/null' className="font-bold mx-auto bg-red-500 lg:px-10 md:px-6 px-4 lg:py-1 md:py-1 py-1 text-white hover:border-white border-4">
                            Reject
                        </Link>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default ActionsDiv;