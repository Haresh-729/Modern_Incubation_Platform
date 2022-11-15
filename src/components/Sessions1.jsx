import React,{useState,useEffect} from "react";
import Imag from './../assets/Sessons1.png';
import Imag1 from './../assets/Sessons2.png';
import { IconButton } from "rsuite";
import { ArrowRight, ArrowLeft } from '@rsuite/icons';
import { useNavigate } from 'react-router-dom';
import {onSnapshot,collection,orderBy} from 'firebase/firestore';
import {db} from '../firebase';



function Sessions1() {

  const [sessions,setSessions]=useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    onSnapshot(
      collection(db, "sessions"),
      orderBy("timestamp", "desc"),
      (snapshot) => {
        setSessions(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }
    );
  }, []);

  console.log(sessions.map(({id, data}) => (data.sname)));

  const slideLeft = () => {
    var slider1 = document.getElementById('slider')
    slider1.scrollLeft = slider1.scrollLeft + 1000;
  }

  const slideRight = () => {
    var slider1 = document.getElementById('slider');
    slider1.scrollLeft = slider1.scrollLeft - 1000;
  }

  return (
    <div>
    <div data-aos="fade-down" className="select-none h-fit w-full  flex flex-col justify-center items-center ">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-blue text-center lg:text-3xl xl:text-3xl md:text-2xl sm:text-2xl text-xl font-bold flex justify-center py-4">
          Sessions
        </h1>
        <div className="flex ">
          <div>
            <img
              src="https://i.ibb.co/xfdwFbT/image-removebg-preview-3-1.png"
              alt=""
              border="0"
              className="w-auto xl:h-[16rem] lg:h-48 md:h-44 sm:h-40 h-32 xl:ml-16 lg:ml-20 md:ml-12 ml-16"
            />
          </div>
          <div className="xl:pl-24 lg:pl-10 md:pl-8 sm:pl-8 pl-6 xl:mt-32 lg:mt-16 md:mt-10 sm:mt-8 mt-6">
            <div className="flex flex-wrap">
              <div className="xl:text-5xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl text-[#EFA451] font-bold">
                Learning Together &nbsp;
              </div>
              <div className="xl:leading-loose lg:leading-relaxed md:leading-relaxed sm:leading-relaxed xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl text-center text-[#7587A4] font-bold">
                even we are Apart
              </div>
            </div>
            <div className="flex flex-wrap ">
              <div className="xl:leading-loose lg:leading-relaxed md:leading-relaxed sm:leading-relaxed xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center text-[#7587A4] font-bold">
                Be a &nbsp;
              </div>
              <div className="xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-[#EF4A37] font-bold">
                Helping Hand &nbsp;
              </div>
              <div className="xl:leading-loose lg:leading-relaxed md:leading-relaxed sm:leading-relaxed xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center text-[#7587A4] font-bold">
                to Others
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* hh */}

    
      <div className="select-none flex items-center mt-[1rem] w-[77rem] justify-center">
        <IconButton icon={<ArrowLeft />} onClick={slideLeft} className="xl:ml-[4rem] lg:ml-[4rem] md:ml-6 sm:ml-6 ml-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
        w-[4rem] h-[3rem] lg:py-8 xl:py-8 md:py-6 sm:py-6 py-4 text-center flex items-center justify-center font-extrabold font-poppins xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-black bg-white/30 border-2 border-white
        shadow-lg rounded-full hover:bg-[#0589c7d3] hover:border-0 hover:text-white "></IconButton>

        <div id="slider" className="overflow-x-scroll scrollbar-hide scroll-smooth ...w-full  xl:mx-[2rem] xl:relative flex items-center">
          {sessions.map(({id,data}) => (
            <div key={id} onClick={()=>{navigate("/Session-Details",{state:id})}} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-101 bg-[#B1A429] w-full h-auto  rounded-[3rem] flex  xl:mx-[2rem] mx-2 mt-2 py-2">
              <div className="bg-yellow-300 bg-gradient-to-t from-[#B1A429] w-[50rem] flex-wrap  flex rounded-[2rem] mx-16 px-4 ">

                <div className="flex items-center justify-center">

                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl leading-loose text-center  mt-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] text-blue font-bold">
                    {data.sname}
                    </h1>
                    <h1 className="text-black text-xl">By:</h1>
                    <img
                      src={data.himg}
                      alt="..."
                      className="shadow-lg rounded-full w-[5rem] mt-2 h-auto "
                    />
                    <h1 className="text-[#EF4A37] text-2xl">
                      {data.heldby}
                    </h1>
                    <p className="text-xl leading-normal mt-2 text-black font-normal text-center ">
                      {data.desc}
                    </p>
                  </div>
                  <div>
                    <img
                      src={data.simg}
                      alt="python"
                      border="0"
                      className="rounded w-[15rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <IconButton icon={<ArrowRight />} onClick={slideRight} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[4rem] h-[3rem] pb-[4rem] font-extrabold font-poppins text-5xl text-black bg-white/30 border-2 border-white shadow-lg rounded-[5rem] hover:bg-[#0589c7d3] hover:border-0 hover:text-white "></IconButton>
      </div>
    </div>
    
  </div>
  );
}

export default Sessions1;