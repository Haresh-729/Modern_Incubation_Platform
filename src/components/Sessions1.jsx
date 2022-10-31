import React from "react";
import Imag from './../assets/Sessons1.png';
import Imag1 from './../assets/Sessons2.png';
import { IconButton } from "rsuite";
import {ArrowRight, ArrowLeft} from '@rsuite/icons';


function Sessions1() {
  const data = [
    {
      id:"Interactive Session with Python",
      h:"Mr. Dennis Ritche",
      d:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Praesentium, id. Nemo tenetur veritatis,",
      s:Imag,
      img:Imag1,
    },
    {
      id:"Interactive Session with Python",
      h:"Mr. Dennis Ritche",
      d:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Praesentium, id. Nemo tenetur veritatis,",
      s:Imag,
      img:Imag1,
    },
  ]
  const slideLeft= () =>{
    var slider1 = document.getElementById('slider')
    slider1.scrollLeft = slider1.scrollLeft + 1610;
}

const slideRight = () =>{
    var slider1 = document.getElementById('slider');
    slider1.scrollLeft = slider1.scrollLeft -1610;
}

  return (
    <div>
      <div className="bg-cover ml-10 w-screen min-h-screen bg-[url('https://i.ibb.co/Smq2X7B/background.png')]">
        <h1 className="text-blue text-3xl font-bold mx-[44rem] py-4">
          Sessions
        </h1>
        <div className="flex flex-wrap">
          <img
            src="https://i.ibb.co/xfdwFbT/image-removebg-preview-3-1.png"
            alt=""
            border="0"
            className="w-[24rem] h-[24rem] ml-28"
          />
          <p className="text-5xl leading-loose text-center mt-16 text-[#7587A4] font-bold">
            <a className="text-6xl text-[#EFA451] font-bold">
              Learning Together
            </a>{" "}
            even we are Apart <br /> Be a{" "}
            <a className="text-6xl text-[#EF4A37] font-bold">Helping Hand</a> to
            Others
          </p>
        </div>
        

        <div className="flex items-center absolute mt-[1rem] w-auto">
                    <IconButton icon={<ArrowLeft/>} onClick={slideLeft} className="ml-[4rem] absolute z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[4rem] h-[3rem] pb-[4rem] text-center justify-center font-extrabold font-poppins text-5xl text-black bg-white/30 border-2 border-white shadow-lg rounded-[5rem] hover:bg-[#0589c7d3] hover:border-0 hover:text-white "></IconButton>
                    <div id='slider' className="overflow-x-scroll no-scrollbar scroll-smooth ... w-[94rem] mx-[2rem] relative flex items-center">
        {data.map((item)=>(
          <div className="bg-[#B1A429] w-[84rem] h-[28rem] rounded-[3rem] flex flex-wrap mx-32 mt-10 py-8">
            <div className="bg-yellow-300 bg-gradient-to-t from-[#B1A429] w-[74rem] flex flex-wrap h-[18rem] rounded-[4rem] mx-20 px-4 ">
              <h1 className="text-4xl leading-loose text-left ml-8 mt-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] text-blue font-bold">
                {item.id}
              </h1>
                <div className="">
                  <img
                    src={item.s}
                    alt="python"
                    border="0"
                    className="mr-[23rem] right-0 w-[20rem] absolute h-[20rem]"
                  />
                  <div className="flex flex-wrap place-content-center mr-56">
                    <h1 className="text-black text-2xl absolute mr-4 ">By:</h1>
                    <img
                      src={item.img}
                      alt="..."
                      class="shadow-lg rounded-full w-[8rem] mt-12 mx-[12rem] mr-56 h-auto align-middle border-none"
                    />
                    <h1 className="text-[#EF4A37] text-3xl mx-[12rem]">
                      {item.h}
                    </h1>
                    <p className="text-2xl leading-normal mt-2 text-black font-normal mx-[8rem] text-center ">
                      {item.d}
                    </p>
                  </div>
                </div>
            </div>
          </div>
        ))}
        </div>
            <IconButton icon={<ArrowRight/>} onClick={slideRight} className="absolute z-50 ml-[92rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[4rem] h-[3rem] pb-[4rem] font-extrabold font-poppins text-5xl text-black bg-white/30 border-2 border-white shadow-lg rounded-[5rem] hover:bg-[#0589c7d3] hover:border-0 hover:text-white "></IconButton>
        </div>
      </div>
      </div>
  );
}

export default Sessions1;