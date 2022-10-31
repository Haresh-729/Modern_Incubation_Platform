import React from 'react'
import {data} from './CPData'
import head from './../assets/CPHead.png'
import { IconButton } from "rsuite";
import {ArrowRight, ArrowLeft} from '@rsuite/icons';

function CurrentProjects(){

    const slideLeft= () =>{
        var slider1 = document.getElementById('slider')
        slider1.scrollLeft = slider1.scrollLeft + 500;
    }

    const slideRight = () =>{
        var slider1 = document.getElementById('slider');
        slider1.scrollLeft = slider1.scrollLeft -500;
    }

    return(
        <div className="fixed">
            <div className="xl:flow-root flow-root xl:flex-col flex-col items-end justify-center xl:mx-3 mx-3 xl:pt-8 pt-4 xl:w-screen xl:h-auto h-auto">
                <div className="xl:flex-col flex-col xl:mx-12 mx-1 xl:grid xl:grid-cols-16 grid-cols-16 md:grid md:grid-cols-16 ">
                    <div className="xl:row-span-full  xl:col-start-3 md:row-span-full  md:col-start-3 xl:h-[20rem] md:h-[16rem] h-[8rem] xl:col-end-12 md:col-end-12 xl:self-center self-center xl:pr-[4rem]  p-[1rem] xl:mr-[5rem] text-[#EF4A37] xl:text-right text-center bg-gradient-to-tr to-blue-500 via-[#7CD4FD] from-[#0589c7] xl:rounded-[4rem] rounded-[3rem]">
                        <h1 className="xl:mt-[5rem] md:mt-[2rem] xl:text-3xl md:text-2xl text-sm xl:font-bold font-semibold poppins">It takes half your life before you<br/>discover life is ado-it-yourself project.</h1>
                        <h1 className="xl:mt-[4rem] xl:text-2xl md:text-xl text-xs pt-4 font-bold text-[#454951] font-poppins">Get your idea selected so that you can find<br/>yourself in this section</h1>
                    </div>
                    <div className="xl:row-span-full xl:w-[80rem] md:w-[20rem]  xl:h-[20rem] xl:col-span-9 xl:col-end-11 xl:self-center xl:p-4 md:p-2">
                        <img src={head} className="xl:w-[30rem]  w-[20rem]" alt='Task-imgage'/>
                    </div>
                </div>
                
                <div className="flex items-center  xl:mt-[3rem] mt-[1rem]">
                    <IconButton icon={<ArrowLeft/>} onClick={slideLeft} className="xl:ml-[8rem] invisible xl:visible absolute z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 xl:w-[4rem] xl:h-[3rem] xl:pb-[4rem] text-center justify-center font-extrabold font-poppins xl:text-5xl text-black bg-white/30 border-2 border-white shadow-xl xl:rounded-[5rem] hover:bg-[#0589c7d3] hover:border-0 hover:text-white "></IconButton>
                    <div id='slider' className="overflow-x-scroll  xl:no-scrollbar scroll-smooth  xl:w-[rem] lg:w-[64rem] w-[44rem] xl:mx-[12.4rem] mx-[2.3rem] relative  flex items-center">
                        {data.map((item)=>(
                            <div className="xl:flex xl:flex-col xl:items-center">
                                <div className="transition ease-in-out delay-150 hover:-translate-y-5  xl:relative hover:scale-10 shadow-md items-center justify-center xl:flex xl:m-2 mb-4 xl:w-[16.9rem] md:w-[16rem]  w-[13.9rem] xl:h-[25rem] md:h-[20rem] h-[16rem] bg-white/30 xl:rounded-[5rem] mr-2 rounded-[2rem] border-2 border-offwhite">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="xl:flex xl:text-[2rem] text-[1rem] py-6 text-center font-bold poppins text-[#EFA451]">{item.id}</h1>
                                        <img className="xl:w-[7rem] w-[6rem] xl:mt-[1rem] " src={item.img} alt='profile'/>
                                        <h1 className="xl:float-left xl:text-[1.5rem] xl:pl-[-2rem] font-normal poppins text-center align-center  text-black">{item.td}</h1>
                                        <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 xl:w-[12rem] xl:mt-[3rem] xl:mb-[2rem] p-2 xl:h-12 xl:px-4  font-extrabold font-poppins xl:text-2xl text-white bg-blue xl:rounded-[3rem] m-4 rounded-[1rem] hover:bg-lb focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                                            DETAILS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <IconButton icon={<ArrowRight/>} onClick={slideRight} className="xl:ml-[86rem] right-4 absolute z-50 invisible xl:visible transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 xl:w-[4rem] xl:h-[3rem] xl:pb-[4rem] text-center justify-center font-extrabold font-poppins xl:text-5xl text-black bg-white/30 border-2 border-white shadow-xl xl:rounded-[5rem] hover:bg-[#0589c7d3] hover:border-0 hover:text-white "></IconButton>
                </div>
                
            </div>
        </div>
    )
}

export default CurrentProjects;