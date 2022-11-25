import React,{useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom';
import { data } from "./CPData";
import head from "./../assets/CPHead.png";
import { IconButton } from "rsuite";
import { ArrowRight, ArrowLeft } from "@rsuite/icons";
import { Link } from "react-router-dom";
import {onSnapshot,collection,orderBy} from 'firebase/firestore';
import {db} from '../firebase';

function CurrentProjects() {

  const [projects,setProjects]=useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    onSnapshot(
      collection(db, "projects"),
      orderBy("timestamp", "desc"),
      (snapshot) => {
        setProjects(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }
    );
  }, []);

  const slideLeft = () => {
    var slider1 = document.getElementById("slider");
    slider1.scrollLeft = slider1.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider1 = document.getElementById("slider");
    slider1.scrollLeft = slider1.scrollLeft - 500;
  };

  return (
    <div data-aos="fade-right" className="select-none">
      <div className="xl:flow-root flow-root xl:flex-col flex-col  justify-center xl:mx-1 mx-3 xl:pt-8 pt-4 ">
        <div className=" xl:mx-5 mx-1 flex justify-start items-center ">
          <div className="flex flex-col font-serif md:flex-row mt-[3rem] md:mt-[0rem] md:justify-between justify-center items-center xl:h-[15rem] md:h-[16rem] h-[15rem] w-full xl:self-center s  p-[1rem]  text-[#EF4A37] lg:text-right text-center bg-gradient-to-tr to-blue-500 via-[#7CD4FD] from-[#0589c7] xl:rounded-[4rem] rounded-[3rem]">
            <div>
              <img
                src={head}
                className="xl:w-[18rem] md:w-[20rem] lg:w-[25rem] w-[10rem]"
                alt="Task-imgage"
              />
            </div>
            <div>
              <h1 className=" md:mt-[2rem]  xl:text-2xl md:text-2xl text-sm xl:font-bold font-semibold poppins">
                It takes half your life before you
                <br />
                discover life is ado-it-yourself project.
              </h1>
              <h1 className=" xl:text-2xl md:text-xl  text-sm pt-4 font-bold text-[#454951] font-poppins">
                Get your idea selected so that you can find
                <br />
                yourself in this section
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-4 justify-center ">
          <div className="flex items-center justify-between ">
            <IconButton
              icon={<ArrowLeft />}
              onClick={slideLeft}
              className="  xl:visible xl:rounded-[5rem] xl:w-[3rem] xl:h-[3rem] absolute z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  pb-1 text-center justify-center font-extrabold font-poppins xl:text-3xl text-black bg-white/30 border-2 border-white shadow-xl  hover:bg-[#0589c7d3] hover:border-0 hover:text-white "
            ></IconButton>
            <div className="flex justify-center items-center lg:m-2">
              <div
                id="slider"
                className=" overflow-x-scroll scrollbar-hide scroll-smooth  lg:w-[55rem] xl:w-[60rem] md:w-[38rem] w-[18rem] xl:mx-[2rem]  relative  flex items-center"
              >
                {projects.map(({id,data}) => (
                  <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 xl:flex  xl:flex-col xl:items-center  ">
                    <div className="  transition ease-in-out delay-150 hover:shadow-2xl  xl:relative hover:scale-10 shadow-md items-center justify-center xl:flex mb-4  md:w-[15rem]  w-[13.8rem]  md:h-[20rem]   bg-white/30 xl:rounded-[3rem] mr-2 rounded-[2rem] border-2 border-offwhite">
                      <div className="flex flex-col items-center justify-center">
                        <h1 className="xl:flex md:text-[1.3rem] text-[1rem] my-6 mx-2 text-center font-bold poppins text-[#EFA451]">
                          {data.pname}
                        </h1>
                        <img
                          className=" w-[6rem]  m-2"
                          src={data.pimg}
                          alt="profile"
                        />
                        <h1 className="xl:float-left  xl:pl-[-2rem] font-normal poppins text-center align-center  text-black">
                          {data.heldby}
                        </h1>
                        <button onClick={()=>navigate('/cpdetails',{state:id})}  className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110   px-2 xl:py-2 xl:px-4 text-base font-extrabold font-poppins  text-white bg-[#0139B5] xl:rounded-[3rem] m-4 rounded-[0.5rem] hover:bg-lb focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                          DETAILS
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <IconButton
              icon={<ArrowRight />}
              onClick={slideRight}
              className="  xl:visible  z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 xl:w-[3rem] xl:h-[3rem] pb-1 text-center justify-center font-extrabold font-poppins xl:text-3xl text-black bg-white/30 border-2 border-white shadow-xl xl:rounded-[5rem] hover:bg-[#0589c7d3] hover:border-0 hover:text-white"
            ></IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentProjects;
