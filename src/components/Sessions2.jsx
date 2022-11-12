import React, { useState, useEffect } from "react";
import { IconButton } from "rsuite";
import { ArrowRight, ArrowLeft } from "@rsuite/icons";
import { db } from "../firebase";
import { deleteDoc, doc, collection, orderBy, onSnapshot } from "firebase/firestore";
import { useLocation } from 'react-router-dom';




function Sessions2({ user }) {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    onSnapshot(
      collection(db, 'sessions'),
      orderBy('timestamp', 'desc'),
      (snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }
    );
  }, []);

  return (
    <div>
      {data.map(({ id, data }) => (
        id === location.state ?
          (<div key={id} className="py-0 px-0">
            <div className="flex flex-col self-center items-center mt-[4rem] md:mx-4 xl:pt-10 ">
              <div
                className="xl:w-[58rem] xl:h-[8rem] w-[19rem] h-[5rem] rounded-full mx-2 bg-yellow-300  bg-gradient-to-t from-white xl:rounded-full
                md:w-[46rem] md:h-[8rem] xl:mx-[1rem]  md:mx-2  md:rounded-full"
              >
                <div>
                  <img
                    src={data.simg}
                    alt="python"
                    border="0"
                    className=" xl:float xl:float-right xl:mr-32
              md:float md:float-right md:w-[6rem] w-14 float float-right md:mr-[6rem] xl:w-[7rem] lg:w-[6rem] py-2  "
                  />
                  <h1
                    className="xl:text-4xl xl:leading-loose xl:text-left xl:ml-8 text-[1rem] text-center  text-blue xl:font-bold
            md:text-3xl md:leading-loose md:text-left md:ml-8 md:py-4 py-6 md:font-bold font-bold"
                  >
                    {data.sname}
                  </h1>
                </div>
                <h1
                  className="xl:text-2xl xl:mt-14 xl:ml-10 text-black md:text-2xl md:mt-16 mt-[1rem] text-center md:font-semibold md:ml-10 md:text-center "
                >
                  {data.desc}
                </h1>
              </div>

              <div
                className="xl:w-[58rem] xl:mt-40 bg-slate-100 xl:flex xl:flex-wrap xl:gap-[2rem] xl:mx-[1rem]   xl:border border-grey xl:h-[16rem] xl:rounded-[4rem]

        md:w-[44rem] md:mt-32  md:flex md:flex-row md:gap-2   md:border border-grey md:h-[17rem] md:rounded-[4rem] mt-10 md:mx-[2rem]

     w-[16rem] mt-[6rem] flex flex-wrap gap-[1rem]  mx-[2rem] border border-grey h-[24rem] rounded-[1rem]  "
              >
                <div className="xl:ml-8  xl:mt-[-2rem] ">
                  <img
                    src="https://i.ibb.co/xjmzVT0/Location.png"
                    alt="Location"
                    border="0"
                    className="xl:ml-12 xl:w-[2rem] mx-[7rem] xl:mt-24
              md:ml-12 md:mt-20  md:w-[2rem] w-[2rem] "
                  />
                  <h1 className="xl:text-[1rem] md:ml-2 md:text-sm md:text-center mx-[4rem] text-center mt-2 md:leading-tight text-[#7587A4] ">
                    Online through <br /> zoom
                  </h1>
                </div>
                <div className="flex justify-center items-center xl:flex xl:flex-wrap xl:w-[28rem] md:ml-1 md:flex  md:flex-wrap md:w-[24rem]">
                  <h1 className="xl:w-[24rem] xl:h-[3rem] bg-white border xl:rounded-[2rem]   bg-opacity-20 placeholder-grey xl:px-5
              md:w-[20rem] md:h-[3rem] rounded-[2rem]   w-[12rem] ml-[2rem] mt-[-4] md:rounded-[2rem]  md:px-5 ">
                    Your Meeting Link is : {data.slink}
                  </h1>
                  {id === user ?
                    <button
                      onClick={() => {
                        deleteDoc(doc(db, "sessions", id));
                      }}
                      className="xl:text-2xl text-white  xl:ml-[4rem] xl:text-center xl:py-2  bg-blue xl:w-60 xl:h-14 xl:rounded-lg font-semibold
          md:text-xl  md:ml-[4rem] md:text-center md:py-2 md:mt-4  md:w-48 md:h-14 md:rounded-lg w-[8rem] mx-[4rem] mt-4  h-[2rem] rounded-lg md:font-semibold"
                    >
                      Meeting Done
                    </button> : null}
                </div>

              </div>

              <div
                className="xl:w-[58rem] xl:mx-[1rem] xl:mt-8 bg-slate-100  mt-4   border border-grey xl:h-[21rem] xl:rounded-[4rem]
        md:w-[44rem] md:mt-8 md:mx-[1rem] md:h-[22rem] md:rounded-[4rem] rounded-[2rem] w-[19rem] ml-2"
              >
                <h1
                  className="text-blue xl:text-center xl:text-2xl xl:font-bold xl:mx-[20rem] xl:py-4
          md:text-2xl md:font-bold text-lg text-center md:mx-[14rem] md:py-4"
                >
                  About the speaker
                </h1>
                <img
                  src={data.himg}
                  alt="..."
                  className="shadow-lg xl:rounded-full xl:w-[8rem] xl:mx-[24rem] xl:mr-56 xl:h-auto xl:align-middle md:rounded-full md:w-[8rem] md:mx-[16rem] md:mr-56 md:h-auto v:align-middle border-none rounded-full w-[6rem] mx-[6rem] mr-56 h-auto align-middle rounded-full"
                />
                <h1 className="text-[#EF4A37] xl:text-center xl:mx-[20rem] xl:text-2xl  md:mx-[14rem] md:text-2xl text-lg text-center">
                  {data.heldby}
                </h1>
                <p
                  className="xl:text-xl xl:leading-normal text-[#7587A4] xl:text-center xl:mx-[8rem]
          md:text-xl md:leading-normal md:text-center md:mx-[2rem] text-sm text-center pb-[2rem] "
                >
                  {data.host}
                </p>
              </div>
            </div>
          </div>)
          : null
      ))}
    </div>
  );
}

export default Sessions2;
