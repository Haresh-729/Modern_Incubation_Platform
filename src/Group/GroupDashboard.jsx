import React from "react";

const GroupDashboard = () => {
  return (
    <div>
      <div className="flex-col h-2/4 lg:w-4/5 md:w-4/5 xl:w-4/5 sm:w-4/5 mb-7 lg:ml-36 md:ml-24  bg-[url('https://i.ibb.co/LYQ3cs3/bg.png')] bg-cover rounded-lg">
        <div className="flex gap-3">
          <div className="grid justify-items-center mx-auto">
            <h1 className="text-[#EF4A37] lg:text-5xl md:text-4xl p-5 lg:font-semibold md:font-semibold font-bold">
              Welcome Back GPM
            </h1>
            <p className="text-[#7587A4] lg:text-2xl md:text-xl font-semibold place-items-center p-3 ">
              Complete tasks and get rewards.
            </p>
            <button className="bg-[#013BBA] text-[#FFFFFF] py-1 px-8 rounded font-extrabold lg:text-2xl md:text-lg mb-4">
              SEE TASKS
            </button>
          </div>
        </div>
      </div>

      {/* div 2 - to show numbers for each categories */}
      <div className="h-2/4 lg:w-4/5 md:w-4/5 xl:w-4/5 sm:w-4/5 mb-7 lg:ml-36 md:ml-24">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-2 xl:gap-6 sm:gap-4 lg:gap-6 md:gap-4 gap-6 mx-auto px-2">
          <div className="border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex">
              <img
                src="https://i.ibb.co/ydDx4Qg/progress.png"
                alt="progress"
                border="0"
                className="lg:h-16 lg:w-16 md:h-14 md:w-14 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5">
                5612
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0 pb-2">
              Progress
            </h1>
          </div>

          <div className=" border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex ">
              <img
                src="https://i.ibb.co/HPDV5Sb/mpoints.png"
                alt="mpoints"
                border="0"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5">
                654
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium pb-2 lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0">
              MPoints
            </h1>
          </div>

          <div className=" border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex ">
              <img
                src="https://i.ibb.co/pdzfkTW/session.png"
                alt="session"
                border="0"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5">
                120
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium pb-2 lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0">
              Sessions Completed
            </h1>
          </div>

          <div className=" border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex ">
              <img
                src="https://i.ibb.co/3FYzLzH/maturity.png"
                alt="maturity"
                border="0"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5">
                569
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium pb-2 lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0">
              Maturity
            </h1>
          </div>

          <div className=" border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex ">
              <img
                src="https://i.ibb.co/3p7Wc6s/hours-Spent.png"
                alt="hours-Spent"
                border="0"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5 ">
                928
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium pb-2 lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0">
              Hours Spent
            </h1>
          </div>

          <div className=" border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex ">
              <img
                src="https://i.ibb.co/WPjyQrF/live-Session.png"
                alt="live-Session"
                border="0"
                className="lg:h-16 lg:w-16 md:h-12 md:w-12 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5">
                390
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium pb-2 lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0">
              Live Sessions
            </h1>
          </div>

          <div className=" border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex ">
              <img
                src="https://i.ibb.co/MpPR7hP/coming-Session.png"
                alt="coming-Session"
                border="0"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5">
                928
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium pb-2 lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0">
              Upcoming Sessions
            </h1>
          </div>

          <div className=" border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex ">
              <img
                src="https://i.ibb.co/yPzngB7/Picture1.png"
                alt="new-ideas"
                border="0"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5">
                5611
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium pb-2 lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0">
              New Ideas
            </h1>
          </div>

          <div className=" border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex ">
              <img
                src="https://i.ibb.co/MpPR7hP/coming-Session.png"
                alt="current-projects"
                border="0"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5">
                5566
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium pb-2 lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0">
              Current Projects
            </h1>
          </div>

          <div className=" border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex ">
              <img
                src="https://i.ibb.co/pdQ6rkL/Picture2.png"
                alt="current-projects-comp"
                border="0"
                className="lg:h-16 lg:w-16 md:h-12 md:w-12 h-14 w-14 pl-3 pt-3"
              />
              <h1 className="text-[#EF4A37] font-bold lg:text-4xl md:text-3xl pl-5 lg:pt-5 md:pt-5">
                613
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium pb-2 lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0">
              Current Projects Completed
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDashboard;
