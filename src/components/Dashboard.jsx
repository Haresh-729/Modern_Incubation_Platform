import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


function Dashboard({username,maturityResult}){


    const navigate = useNavigate();

  return (


    <div className='select-none flex flex-col justify-center items-center' >
      {/* div 1 - containing image */}
      <div className="flex-col mt-20 md:mt-8 mx-4 h-2/4 lg:w-4/5 md:w-4/5 xl:w-4/5 sm:w-4/5 mb-7 lg:ml-20   bg-[url('https://i.ibb.co/LYQ3cs3/bg.png')] bg-cover rounded-lg">
        <div className="xl:flex xl:gap-3 lg:flex lg:gap-3 ">
          <div className="flex items-center justify-center">
            <img
              src="https://i.ibb.co/Qn2WBYW/cuate.png"
              alt="cuate"
              border="0"
              className="h-38 w-48 mt-4 md:h-48 md:w-52 lg:h-52 lg:w-80 xl:h-72 xl:w-80"
            />
          </div>
          <div className="grid justify-items-center  mx-auto">
            <h1 className="text-[#EF4A37] text-xl lg:text-4xl xl:font-extrabold xl:mt-4 md:text-3xl p-5 lg:font-semibold  font-extrabold">
              Welcome  <span>{username}</span>!
            </h1>
            <p className="text-[#7587A4] sm:px-10 lg:text-2xl md:text-xl font-semibold place-items-center pb-3 text-center lg:text-right">
              Your this week’s progress is Awesome. Keep it up and get rewards.
            </p>
            <button onClick={()=>{navigate("/Tasks")}} className="bg-[#013BBA] text-[#FFFFFF] py-1 xl:py-0 xl:rounded-2xl px-8 rounded hover:-translate-y-1 hover:scale-110 font-extrabold lg:text-xl md:text-lg mb-4">
              SEE TASKS
            </button>
          </div>
        </div>
      </div>

{/* div 2 - to show numbers for each categories */}
      <div className=" select-none h-2/4 ml-6 mr-6 lg:w-4/5 md:w-4/5 xl:w-4/5 sm:w-4/5 mb-7 lg:ml-20 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-2 xl:gap-6 sm:gap-4 lg:gap-6 md:gap-4 gap-6 mx-auto px-2">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-2 bg-sky-300 bg-opacity-30 rounded-lg  drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex sm:items-center sm:gap-2 ">
              <img
                src="https://i.ibb.co/ydDx4Qg/progress.png"
                alt="progress"
                border="0"
                className="lg:h-14 lg:w-14 md:h-14 md:w-14 h-14 w-14 pl-2 pt-3"
              />
              <h1 className="select-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 lg:flex lg:flex-wrap text-[#EF4A37] font-bold lg:text-2xl sm:text-2xl pl-2 lg:pt-5 md:pt-5">
                5612
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0 lg:pt-2">
              Progress
            </h1>
          </div>

          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex sm:items-center sm:gap-2">
              <img
                src="https://i.ibb.co/HPDV5Sb/mpoints.png" alt="mpoints" 
                border="0"
                className="lg:h-14 lg:w-14 md:h-14 md:w-14 h-14 w-14 pl-2 pt-3"
              />
              <h1 className="lg:flex lg:flex-wrap text-[#EF4A37] font-bold lg:text-2xl sm:text-2xl md:text-2xl pl-2 lg:pt-5 md:pt-5">
                110
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0 lg:pt-2">
            MPoints
            </h1>
          </div>

          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex sm:items-center sm:gap-2">
              <img
                src="https://i.ibb.co/pdzfkTW/session.png" alt="session"
                border="0"
                className="lg:h-14 lg:w-14 md:h-14 md:w-14 h-14 w-14 pl-2 pt-3"
              />
              <h1 className="lg:flex lg:flex-wrap text-[#EF4A37] font-bold lg:text-2xl sm:text-2xl md:text-2xl pl-2 lg:pt-5 md:pt-5">
                120
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0 lg:pt-2">
            Sessions Completed</h1>
          </div>


          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex sm:items-center sm:gap-2 ">
              <img
                src="https://i.ibb.co/3FYzLzH/maturity.png" alt="maturity"
                border="0"
                className="lg:h-14 lg:w-14 md:h-14 md:w-14 h-14 w-14 pl-2 pt-3"
              />
              <h1 className="lg:flex lg:flex-wrap text-[#EF4A37] font-bold lg:text-2xl sm:text-2xl md:text-2xl pl-2 lg:pt-5 md:pt-5">
              {
                  maturityResult ?
                  maturityResult
                  :
                  0
                }
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0 lg:pt-2">
            Maturity</h1>
          </div>

          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex sm:items-center sm:gap-2">
              <img
                src="https://i.ibb.co/3p7Wc6s/hours-Spent.png" alt="hours-Spent" 
                border="0"
                className="lg:h-14 lg:w-14 md:h-14 md:w-14 h-14 w-14 pl-2 pt-3"
              />
              <h1 className="lg:flex lg:flex-wrap text-[#EF4A37] font-bold lg:text-2xl sm:text-2xl md:text-2xl pl-2 lg:pt-5 md:pt-5 ">
                928
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0 lg:pt-2">
            Hours Spent</h1>
          </div>

          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex sm:items-center sm:gap-2">
              <img
                src="https://i.ibb.co/WPjyQrF/live-Session.png" alt="live-Session"
                border="0"
                className="lg:h-14 lg:w-14 md:h-14 md:w-14 h-14 w-14 pl-2 pt-3"
              />
              <h1 className="lg:flex lg:flex-wrap text-[#EF4A37] font-bold lg:text-2xl sm:text-2xl md:text-2xl pl-2 lg:pt-5 md:pt-5">
                390
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0 lg:pt-2">
            Live Sessions</h1>
          </div>

          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-2 bg-sky-300 bg-opacity-30 rounded-lg drop-shadow-lg">
            <div className="lg:flex md:flex xl:flex sm:flex sm:items-center sm:gap-2">
              <img
                src="https://i.ibb.co/MpPR7hP/coming-Session.png" alt="coming-Session"
                border="0"
                className="lg:h-14 lg:w-14 md:h-14 md:w-14 h-14 w-14 pl-2 pt-3"
              />
              <h1 className="lg:flex lg:flex-wrap text-[#EF4A37] font-bold lg:text-2xl sm:text-2xl md:text-2xl pl-2 lg:pt-5 md:pt-5">
                928
              </h1>
            </div>
            <h1 className="text-[#94A3B9] font-medium lg:text-xl md:text-lg text-sm lg:text-center md:text-center pl-3 lg:pl-0 md:pl-0 xl:pl-0 lg:pt-2">
            Upcoming Sessions</h1>
          </div>

        </div>
      </div>
    </div>

  );

}
  

export default Dashboard;
