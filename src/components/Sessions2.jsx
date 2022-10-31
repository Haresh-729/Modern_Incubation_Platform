import React from "react";

function Sessions2() {
  return (
    <div className="bg-cover ml-10 w-screen min-h-screen bg-[url('https://i.ibb.co/Smq2X7B/background.png')]">
      <div className="invisible">hhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
      <div className="w-[80rem] h-[8rem] bg-yellow-300 mx-[10rem] bg-gradient-to-t from-white rounded-full">
        <div>
          <img src="https://i.ibb.co/x71K8MG/python.png" alt="python" border="0" className=" float float-right mr-32 "/>
          <h1 className="text-5xl leading-loose text-left ml-8 mt-16 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] text-blue font-bold">
            Interactive Session with Python
          </h1>
        </div>

        <h1 className="text-3xl mt-10 ml-10 text-black"> 
          Get ready with your Python environvement this session will take you to another level
        </h1>
      </div>
      <div className="w-[84rem] mt-32 bg-slate-100 flex flex-wrap gap-44  drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] mx-32 border border-grey h-[16rem] rounded-[4rem]">
        <div className="ml-10">
          <img src="https://i.ibb.co/xjmzVT0/Location.png" alt="Location" border="0" className="ml-16 mt-24" />
          <h1 className="text-xl text-[#7587A4] ">Online through zoom</h1>
        </div>
        <div className=" flex flex-wrap w-[32rem]">
          <input
            type="text" placeholder="Full name" name="Fullname" className="w-[32rem] h-[3rem] border rounded-[2rem] bg-white mt-8 bg-opacity-20 placeholder-grey  px-5  "/>
          <input type="email" placeholder="Email" name="Email" className="w-[32rem] h-[3rem] bg-white border rounded-[2rem]  bg-opacity-20 placeholder-grey px-5 "/>
          <div className="text-2xl text-white  ml-32 text-center py-2  bg-blue w-60 h-14 rounded-lg font-semibold">
            GET REGISTERED
          </div>
        </div>

        <div className="">
          <img src="https://i.ibb.co/qpyPtTS/Timer.png" alt="Timer" border="0" className=" mt-24 ml-14"/>
          <h1 className="text-xl text-[#7587A4]  ">Time : 10:00 am IST</h1>
        </div>
      </div>
      <div className="w-[84rem] mt-8 bg-slate-100   drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] mx-32 border border-grey h-[24rem] rounded-[4rem]">
        <h1 className="text-blue text-3xl font-bold mx-[32rem] py-4">
          About the speaker
        </h1>
        <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." class="shadow-lg rounded-full w-[8rem] mx-[36rem] mr-56 h-auto align-middle border-none"
        />
        <h1 className="text-[#EF4A37] mx-[32rem] text-3xl">
          Mr. Dennis Ritche
        </h1>
        <p className="text-2xl leading-normal text-[#7587A4] text-center mx-[8rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
          id. Nemo tenetur voluptatum distinctio veritatis, laboriosam cumque
          nihil vero laborum quod minus ab perferendis blanditiis, fugiat
          debitis ut aliquam neque?
        </p>
      </div>
    </div>
  );
}

export default Sessions2;