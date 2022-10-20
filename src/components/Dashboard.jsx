import React from "react";

const Dashboard = () => {
  return (
    <div>
      {/* div 1 - containing image */}
      <div className="flex-col h-2/4 w-4/5 mb-7 ml-36  bg-[url('https://i.ibb.co/LYQ3cs3/bg.png')] bg-cover rounded-lg">
        <div className="flex gap-3">
          <div className="">
            <img
              src="https://i.ibb.co/Qn2WBYW/cuate.png"
              alt="cuate"
              border="0"
              className="h-72 w-80"
            />
          </div>
          <div className="grid justify-items-center  pr-3">
            <h1 className="text-[#EF4A37] text-5xl p-5 font-semibold ">
              Welcome Back Name
            </h1>
            <p className="text-[#7587A4] text-2xl font-semibold place-items-center p-3 ">
              Your this week’s progress is Awesome. Keep it up and get rewards.
            </p>
            <button className="bg-[#013BBA] text-[#FFFFFF] py-1 px-8 rounded font-extrabold text-2xl mb-4">
              SEE TASKS
            </button>
          </div>
        </div>
      </div>

{/* div 2 - to show numbers for each categories */}
      <div className=" h-2/4 w-4/5 mb-7 ml-36 s">
        <div className="grid grid-cols-4 gap-4 ">
          <div className=" bg-blue-200 rounded-lg drop-shadow-lg">
            <div className="flex ">
              <img
                src="https://i.ibb.co/ydDx4Qg/progress.png"
                alt="progress"
                border="0"
                className="h-16 w-16 pl-3 pt-3 "
              />
              <h1 className="text-[#EF4A37] font-bold text-4xl pl-5 pt-5">
                56123
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium text-xl text-center pb-2">
              Progress
            </h1>
          </div>

          <div className=" bg-blue-200 rounded-lg drop-shadow-lg">
            <div className="flex ">
              <img
                src="https://i.ibb.co/HPDV5Sb/mpoints.png" alt="mpoints" 
                border="0"
                className="h-16 w-16 pl-3 pt-3 "
              />
              <h1 className="text-[#EF4A37] font-bold text-4xl pl-5 pt-5">
                654
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium text-xl text-center pb-2">
            MPoints
            </h1>
          </div>

          <div className=" bg-blue-200 rounded-lg drop-shadow-lg">
            <div className="flex ">
              <img
                src="https://i.ibb.co/pdzfkTW/session.png" alt="session"
                border="0"
                className="h-16 w-16 pl-3 pt-3 "
              />
              <h1 className="text-[#EF4A37] font-bold text-4xl pl-5 pt-5">
                120
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium text-xl text-center pb-2">
            Sessions Completed</h1>
          </div>


          <div className=" bg-blue-200 rounded-lg drop-shadow-lg">
            <div className="flex ">
              <img
                src="https://i.ibb.co/3FYzLzH/maturity.png" alt="maturity"
                border="0"
                className="h-16 w-16 pl-3 pt-3 "
              />
              <h1 className="text-[#EF4A37] font-bold text-4xl pl-5 pt-5">
                569
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium text-xl text-center pb-2">
            Maturity</h1>
          </div>

          <div className=" bg-blue-200 rounded-lg drop-shadow-lg">
            <div className="flex ">
              <img
                src="https://i.ibb.co/3p7Wc6s/hours-Spent.png" alt="hours-Spent" 
                border="0"
                className="h-16 w-16 pl-3 pt-3 "
              />
              <h1 className="text-[#EF4A37] font-bold text-4xl pl-5 pt-5">
                928
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium text-xl text-center pb-2">
            Hours Spent</h1>
          </div>

          <div className=" bg-blue-200 rounded-lg drop-shadow-lg">
            <div className="flex ">
              <img
                src="https://i.ibb.co/WPjyQrF/live-Session.png" alt="live-Session"
                border="0"
                className="h-16 w-16 pl-3 pt-3 "
              />
              <h1 className="text-[#EF4A37] font-bold text-4xl pl-5 pt-5">
                390
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium text-xl text-center pb-2">
            Live Sessions</h1>
          </div>


          
          <div className=" bg-blue-200 rounded-lg drop-shadow-lg">
            <div className="flex ">
              <img
                src="https://i.ibb.co/MpPR7hP/coming-Session.png" alt="coming-Session"
                border="0"
                className="h-16 w-16 pl-3 pt-3 "
              />
              <h1 className="text-[#EF4A37] font-bold text-4xl pl-5 pt-5">
                928
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium text-xl text-center pb-2">
            Upcoming Sessions</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
