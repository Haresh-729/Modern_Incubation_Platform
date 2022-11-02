import React from "react";
import images4 from "../assets/icon5.png";
import images5 from "../assets/icon6.png";
import images6 from "../assets/icon7.png";
import images7 from "../assets/icon8.png";
import { useNavigate } from "react-router-dom";

function Std() {
    const navigate = useNavigate();
  const handleRoute = () => {

    navigate("/Switchi");
  };
    return (
        <div className=" mt-[3rem] md:mt-[0rem]">
      <div className="px-6">
       <h1 className="text-center font-bold text-sm md:text-base xl:text-xl text-blue-800 leading-2 ">
        <br />
        "Now your work will be too easy while just adding your to-do list of
        daily tasks"
      </h1>
      <p className="text-center py-2   leading-sung  mb-2 ">
        <h1 className="text-base lg:text-2xl font-bold">
          Say{" "}
          <a className="text-[#EF4A37] text-xl md:text-2xl lg:text-3xl text-extrabold"> Goodbye </a>
        </h1>
        <h1 className="text-base lg:text-2xl font-bold">
          {" "}
          to handwritten to-do lists with missing details, &{" "}
        </h1>{" "}
        <h1 className="text-base lg:text-2xl font-bold">
          {" "}
          Say <a className="text-[#EFA451] text-xl  md:text-2xl lg:text-3xl text-extrabold">
            Hello{" "}
          </a>{" "}
        </h1>{" "}
        <h1 className="text-base lg:text-2xl font-bold">
          to an Exciting and Simplest way of keeping your stats of tasks
        </h1>
      </p>
     </div>
      <div class=" flex md:gap-16  gap-4  justify-center lg:my-8  mt-18 py-0 px-2 ">
        <img src={images4} className="w-[4rem] lg:w-[6rem] " alt="icon" />
        <img src={images5} className="w-[4rem] lg:w-[6rem]" alt="icon" />
        <img src={images6} className="w-[4rem] lg:w-[6rem]" alt="icon" />
        <img src={images7} className="w-[4rem] lg:w-[6rem]" alt="icon" />
      </div>
      <div className="  py-6">
        <div className="rounded-md shadow-2xl mx-16 md:mx-32 lg:mx-[25rem]">
          <button onClick={handleRoute}
            className="flex w-full items-center justify-center transition ease-in-out delay-150 hover:shadow-2xl hover:scale-110  rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base lg:text-2xl text-white hover:bg-indigo-700 md:py-2 md:px-10 md:text-lg font-bold"
          >
            Explore Now
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-4 md:gap-2 lg:mx-5 md:grid md:grid-cols-4 justify-center   text-center mt-1 mx-1 py-2  ">
        <div className=" rounded-[3rem] border-4 shadow-2xl py-2 px-2 bg-white bg-opacity-20 ">
          <h1 className="font-extrabold text-base lg:text-xl py-1 px-8 text-blue-800  lg:leading-relaxed ">
            Organize your work
          </h1>
          <br />
          <p className="leading-2 md:leading-6 text-sm lg:text-lg font-semibold  text-black">
            Keep your to-do list organized. tasks with sections and sort complex
            project task lists by date, assignee, or even custom fields.
          </p>
        </div>

        <div class="  rounded-[3rem] border-4 shadow-2xl bg-white bg-opacity-20 py-2 px-2">
          <h1 className="font-extrabold text-base lg:text-xl text-blue-800  py-1 px-8  leading-relaxed">
            Never Miss any Details
          </h1>
          <br />
          <p className="leading-2 md:leading-6  text-sm lg:text-lg  font-semibold  text-black">
            Include descriptions, attachments, assignees, and due dates with new
            tasks so instructions and deadlines are clear to team members
          </p>
        </div>

        <div class=" rounded-[3rem]  border-4 py-2 px-2 shadow-2xl bg-white bg-opacity-20  ">
          <h1 className="font-extrabold text-base lg:text-xl text-blue-800  py-1 px-8  leading-relaxed">
            List at your finger tips
          </h1>
          <br />
          <p className="leading-2  md:leading-6 text-sm lg:text-lg  font-semibold  text-black">
            Access everything you need to do for the day in My Tasks. Available
            on the web, desktop, and iOS or Android mobile devices, prioritize
            and plan your day on a simple user interface.
          </p>
        </div>
        <div class="rounded-[3rem]  border-4 py-2 px-2 shadow-2xl bg-white bg-opacity-20  ">
          <h1 className="font-extrabold text-base lg:text-xl text-blue-800  py-1 px-8 leading-relaxed">
            Never miss a deadline
          </h1>
          <br />
          <p className="leading-2 md:leading-6  text-sm lg:text-lg  tracking-tight  font-semibold  text-black">
            Set reminders and get notified when important tasks on your to-do
            list are approaching their due dates. With My Tasks, you can view
            project tasks assigned to you and create private tasks just for you
            so nothing slips through the cracks.
          </p>
        </div>
      </div>
      
    </div>

    )
}

export default Std;