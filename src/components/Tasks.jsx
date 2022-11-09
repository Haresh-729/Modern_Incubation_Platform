import React from "react";
import { IconButton } from "rsuite";
import { Search, Send } from "@rsuite/icons";
import TFIM from "./../assets/tasks blue frame.png";
import TFIM1 from "./../assets/tasks image frame.png";
import TL1 from "./../assets/TL1.png";
import TL2 from "./../assets/TL2.png";
import TL3 from "./../assets/TL3.png";
import TL4 from "./../assets/TL4.png";
import TL5 from "./../assets/TL5.png";
import TL6 from "./../assets/TL6.png";
import TL7 from "./../assets/TL7.png";
import TL8 from "./../assets/TL8.png";
import TL9 from "./../assets/TL9.png";
import TL10 from "./../assets/TL10.png";
import TL11 from "./../assets/TL11.png";
import TL12 from "./../assets/TL12.png";
import { Link } from "react-router-dom";

function Tasks() {
  const data = [
    {
      id: "Create Account",
      img: TL1,
      h: "",
      d: "Complete your profile and then get started for modernvate ",
      l: ""
    
    },
    {
      id: "Get Yourself Verified",
      img: TL2,
      h: "",
      d: " Once you get any brilliant idea document it and upload it in ideas section",
      l: "/Verification"
    },
    {
      id: "Update Profile",
      img: TL3,
      h: "",
      d: "Complete your profile and then get started for modernvate",
      l: "/Profile-Edit"
    },
    {
      id: "Upload Idea",
      img: TL4,
      h: "",
      d: "Once you get any brilliant idea document it and upload it in ideas section",
      l: "/Idea-Upload"
    },
    {
      id: "Verify your Idea",
      img: TL5,
      h: "",
      d: "Try and get your idea verified.",
      l: "/Idea-Review"
    },
    {
      id: "Enroll for a session",
      img: TL6,
      h: "",
      d: "Enroll yourself in a Session to learn more",
      l: "/session"
    },
    {
      id: "Check Your Maturity level",
      img: TL7,
      h: "",
      d: "Perform Maturity test and Get your Score",
      l: "/Maturity"
    },
    {
      id: "Check posts",
      img: TL8,
      h: "",
      d: "check posts of verified users",
      l: "Post"
    },
    {
      id: "Use TOdo List",
      img: TL9,
      h: "",
      d: "Add task to your list and complete it.",
      l: "/To-Do-List"
    },
    {
      id: "Current Projects",
      img: TL10,
      h: "",
      d: "Check the current projects of modernvate",
      l: "/Current-Projects"
    },
    {
      id: "Complete Sessions",
      img: TL11,
      h: "",
      d: "Complete sessions to gain knowledge about the respective session",
      l: "/Session"
    },
    {
      id: "FAQs",
      img: TL12,
      h: "",
      d: "Search for quesions and get the answers accordingly",
      l: "/FAQs"
    },
  ];
  return (
    <div data-aos="fade-right" className="select-none px-2   ">
      <div className="flow-root flex-col items-center xl:justify-center pt-2   xl:mx-3">
        <div className=" scrollbar-hide overflow-y-scroll h-[34rem]  items-center mt-[4rem] xl:...float-center xl:flex xl:flex-col xl:items-center bg-white/30 rounded-[2rem]  xl:h-[40rem] lg:h-[40rem]  md:h-[36rem] xl:rounded-[5rem] border-1 border-offwhite shadow-lg md:mx-8 md:mt-4 ">
          <div className="mb-4  md:mb-[2rem] flex items-center justify-between w-full text-[#EF4A37] text-right  bg-gradient-to-tr to-blue-500 via-[#7CD4FD] from-[#0589c7]  ">
            <div className=" ">
              <img
                src={TFIM1}
                className="w-[8rem] sm:w-[10rem] md:w-[12rem] ml-4 my-4  md:ml-[2rem] lg:mt-[4rem] lg:w-[16rem]  xl:w-[16rem] "
                alt="Task-imgage"
              />
            </div>
            <div className="text-right mr-2 sm:mr-4 md:mr-10 mb-4">
              <h1 className="  text-[0.6rem]  xl:text-2xl  font-bold poppins  pt-10  sm:text-base md:text-[1rem] md:font-bold lg:text-2xl">
                Do not pray for tasks equal to your <br /> powers. Pray for
                powers equal to your tasks
              </h1>
              <h1 className="mt-1 xl:mt-[4\2rem] xl:text-2xl sm:text-base text-[0.6rem] text-[#8794ac] font-poppins  md:text-sm lg:text-2xl lg:mt-[2rem] ">
                Complete Tasks and Earn badges & Win
                <br />
                Exciting Prizes
              </h1>
            </div>
            
          </div>

          <div
            className="grid grid-cols-1 place-items-center sm:grid-cols-2 text-center gap-4
            md:grid md:grid-cols-2 md:place-items-center  md:text-center  
            xl:grid  xl:place-items-center xl:grid-cols-2 lg:gap-[2rem] lg:gap-x-[8rem] "
          >
            {data.map((item) => (
              <Link to={item.l}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-[#99B0E1]/40 border-2 border-offwhite shadow-lg
                   flex w-[17rem] h-[6rem]  lg:w-[20rem] rounded-[2rem]
                   xl:w-[25rem] xl:h-[9rem] xl:rounded-[5rem]  "
              >
                <div className="flex-none w-48 relative">
                  <img
                    src={item.img}
                    className="float-left align-left w-[4rem] mt-2 ml-2 xl:w-[5rem] xl:mt-7 xl:ml-8 "
                    alt="TL1"
                  />
                </div>
                <form className="float-center text-left ml-[-7rem] xl:ml-[-4rem] mt-1 ">
                  <div className="items-center flex flex-wrap">
                    <h1 className="flex text-[1rem] font-extrabold poppins xl:text-xl mt-1 text-[#667A9B]">
                      {item.id}
                    </h1>
                  </div>
                  <div className="flex-center place-items-left flex-wrap">
                    <h1 className="float-left xl:text-lg text-[0.7rem] xl:mr-[2rem] pl-[-2rem]  font-poppins mt-1   text-[#667A9B]">
                      {item.d}
                    </h1>
                  </div>
                </form>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
