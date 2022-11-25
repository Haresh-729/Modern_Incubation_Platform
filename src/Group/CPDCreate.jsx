import React from "react";
import { curProDetails } from "./curProDetails";

const CPDCreate = () => {
  return (
   <div className=" flex justify-center  w-screen h-screen">
      <div className="mx-[1rem]  flex-wrap bg-slate-100 border-b-8 border-r-8 border-gray-300  transperant-4 md:w-4/5  xl:mt-14 mb-14 mt-14  xl:mx-10 h-fit xl:w-4/5 rounded-[2rem] xl:rounded-[4rem]  flex items-center justify-center">
        <div className="xl:flex xl:flex-row my-10  xl:mx-[4rem] mx-[1rem] ">
          <div className="xl:flex xl:flex-col xl:mt-14  xl:px-10 xl:py-8 xl:text-2xl xl:gap-[4rem] xl:mr-4 xl:font-semibold md:flex   md:flex-col md:px-10 md:gap-[2rem] md:mr-4 md:font-semibold">
            <div className="md:flex lg:flex xl:flex ">
              <h1 className="xl:flex xl:flex-col  xl:text-2xl xl:gap-[7rem] xl:mt-[-1rem] xl:mr-10 xl:font-semibold md:flex   md:flex-col md:text-lg md:gap-[4rem] md:mr-4 md:font-semibold">
                Project Title :
              </h1>
              <div className="xl:w-10/12 mt-2 xl:flex text-blue-800  xl:mt-[-1rem] md:flex ml-2  xl:ml-24 border-b-4 border-r-4 bg-white py-2 rounded-xl  pl-6 pr-6 text-xs xl:text-xl">
                {curProDetails.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-wrap xl:break-all "
                  >
                    {item.curProDetails.map((link) => (
                      <h1 to={`/${link.title}`} key={link.title} className=" ">
                        <span className="capitalize ">{link.title}</span>
                      </h1>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:flex lg:flex xl:flex">
              <h1 className="mt-4 xl:flex xl:flex-col xl:text-2xl xl:gap-[7rem] xl:mt-[-1rem]  xl:font-semibold md:flex   md:flex-col md:text-lg md:gap-[7rem] md:mr-4 md:font-semibold">
                Team Members :
              </h1>
              <div className="xl:w-10/12 mt-2 xl:flex text-blue-800  xl:mt-[-1rem] md:flex ml-2  xl:ml-24 border-b-4 border-r-4 bg-white py-2 rounded-xl  pl-6 pr-6 text-xs xl:text-xl">
                {curProDetails.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-wrap xl:break-all  "
                  >
                    {item.curProDetails.map((link) => (
                      <h1 to={`/${link.title}`} key={link.title} className=" ">
                        <span className="capitalize ">{link.members}</span>
                      </h1>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:flex lg:flex xl:flex xl:gap-4">
              <h1 className="mt-4 xl:mr-10 xl:flex xl:flex-col xl:text-2xl xl:gap-[7rem] xl:mt-[-1rem] xl:font-semibold md:flex   md:flex-col md:text-lg md:gap-[7rem] md:mr-4 md:font-semibold">
                Held By :
              </h1>

              <div className="mt-2 xl:10/12 xl:flex text-blue-800  xl:mt-[-1rem] md:flex ml-2 xl:ml-24  border-b-4 border-r-4 bg-white py-2 rounded-xl  pl-6 pr-6 text-xs xl:text-xl">
                {curProDetails.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-wrap xl:break-all  "
                  >
                    {item.curProDetails.map((link) => (
                      <h1 to={`/${link.title}`} key={link.title} className=" ">
                        <span className="capitalize ">{link.heldBy}</span>
                      </h1>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:flex lg:flex xl:flex">
              <h1 className="mt-4 xl:flex xl:flex-col xl:text-2xl xl:gap-[7rem] xl:mt-[-1rem] xl:mr-6 xl:font-semibold md:flex   md:flex-col md:text-lg md:gap-[7rem] md:mr-4 md:font-semibold">
                Description:
              </h1>
              <div className="mt-2 xl:w-10/12  xl:flex text-blue-800  xl:mt-[-1rem] md:flex ml-2  xl:ml-24 border-b-4 border-r-4 bg-white py-2 rounded-xl  pl-6 pr-6 text-xs xl:text-xl">
                {curProDetails.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-wrap xl:break-all  "
                  >
                    {item.curProDetails.map((link) => (
                      <h1 to={`/${link.title}`} key={link.title} className=" ">
                        <span className="capitalize ">{link.description}</span>
                      </h1>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPDCreate;
