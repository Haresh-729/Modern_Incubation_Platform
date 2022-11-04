import React from "react";

function UpdateSession() {
    return (
        <div className="bg-[#6788D3]">
            <div className="flex justify-center">
                <div className="lg:pr-28 md:pr-20 pr-3">
                    <img
                        className="lg:h-32 lg:w-auto md:h-24 md:w-auto h-16 w-auto"
                        src="https://i.ibb.co/0XkM5mS/session.png"
                    />
                </div>
                <div className="lg:text-2xl md:text-xl text-base font-bold text-white lg:pt-10 md:pt-8 pt-4">
                    Update Session
                </div>
            </div>
            <div className="h-fit w-fit mx-auto">
                <form className="font-bold lg:mt-8 md:mt-4 mt-2 grid justify-items-end">
                    <label className="lg:ml-0 md:ml-0 sm:ml-0 xl:ml-0 ml-4">
                        Session Name:
                        <input type="text" name="sname" className="lg:ml-20 md:ml-16 text-white bg-offwhite bg-opacity-20 lg:rounded-xl md:rounded-xl rounded-md lg:w-72 md:w-64 w-56 lg:h-8 md:h-6 h-6 lg:p-3 md:p-2 p-1" />
                    </label>

                    <label className="lg:ml-0 md:ml-0 sm:ml-0 xl:ml-0 ml-4 mt-3">
                        Held By:
                        <input type="text" name="heldby" className="lg:ml-20 md:ml-16 text-white bg-offwhite bg-opacity-20 lg:rounded-xl md:rounded-xl rounded-md lg:w-72 md:w-64 w-56 lg:h-8 md:h-6 h-6 lg:mt-4 md:mt-3 lg:p-3 md:p-2 p-1" />
                    </label>

                    <label className="lg:ml-0 md:ml-0 sm:ml-0 xl:ml-0 ml-4 mt-3">
                        About The Host:
                        <input type="text" name="host" className="lg:ml-20 md:ml-16 text-white bg-offwhite bg-opacity-20 lg:rounded-xl md:rounded-xl rounded-md lg:w-72 md:w-64 w-56 lg:h-8 md:h-6 h-6 lg:mt-4 md:mt-3 lg:p-3 md:p-2 p-1" />
                    </label>

                    <label className="lg:flex md:flex lg:ml-0 md:ml-0 sm:ml-0 xl:ml-0 ml-4 mt-3">
                        <span className="lg:place-self-center md:place-self-center">Description:</span>
                        <textarea name="desc" className="lg:ml-20 md:ml-16 text-white lg:h-20 md:h-16 h-14 bg-offwhite bg-opacity-20 lg:rounded-xl rounded-md md:rounded-xl lg:w-72 md:w-64 w-56 lg:mt-4 md:mt-3 lg:p-3 md:p-2 p-1" />
                    </label>
                    <div className="flex mx-auto">
                        <button type="submit" value="Submit" className="lg:my-10 md:my-8 my-6 bg-white lg:px-6 md:px-3 px-2 lg:py-1 md:py-1 py-1 lg:rounded-lg md:rounded-lg rounded-md text-blue border-2 border-blue hover:bg-blue hover:text-white lg:mr-20 md:mr-16 mr-10">Cancel
                        </button>
                        <button type="submit" value="Submit" className="lg:my-10 md:my-8 my-6 bg-white lg:px-6 md:px-3 px-2 lg:py-1 md:py-1 py-1 lg:rounded-lg md:rounded-lg rounded-md text-blue border-2 border-blue hover:bg-blue hover:text-white">Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdateSession;