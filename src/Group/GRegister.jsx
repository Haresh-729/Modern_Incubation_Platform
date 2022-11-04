import React, { useState } from "react";
import Glogin from "./../Group/Glogin";
import { ToastContainer, toast } from "react-toastify";
import { Edit, Send } from "@rsuite/icons";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  collection,
  doc,
  onSnapshot,
  updateDoc,
  orderBy,
} from "firebase/firestore";
import { db, auth, storage } from "../firebase";

import { useNavigate } from "react-router-dom";



const GRegister = () => {
    const [notify, setNotify] = useState();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("./grouplogin");
  };

  const handleOnClick = () => {};

  const [values, setValues] = useState({
    iname: "",
    iadd: "",
    iweb: "",
    headname: "",
    heademail: "",
    headphone: "",
    icontact: "",
    pocName: "",
    pocEmail: "",
    pocPhone: "",
    pocRole: "",
    country:"",
    password:"",
    verify

  });

    
    const [loading, setLoading] = useState(true);
    // const [loading, setLoading] = useState(true);
    // const [loading, setLoading] = useState(true);
  

  return (
    <div className="w-screen h-full">
      <div className="float-none md:float-left flex flex-col items-center justify-center md:w-1/2 lg:w-2/5 py-4 sm:mx-14 md:mx-4 lg:mx-2 lg:py-10  xl:py-14 my-4 lg:my-8 bg-white/30 rounded-[2rem] lg:rounded-[4rem] xl:rounded-[5rem]  border-2 border-offwhite shadow-lg xl:1/3">
        <h1 className="sm:text-2xl sm:mt-[4rem] md:my-[2rem] mt-[2rem]   md:text-2xl lg:text-3xl xl:text-4xl text-xl font-extrabold poppins  text-orange">
          Institute/Organization
        </h1>

        <form
          onclick={handleClick}
          className="flex flex-col items-center justify-center w-full gap-4  xl:gap-6 lg:mt-6 xl:px-12"
        >
          <div className="relative w-full px-5" id="form">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, iname: event.target.value }))
              }
              type="text"
              name="name"
              id="name"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Institute/Organization Name"
              required
              pattern="\S+.*"
            />
          </div>
          <div className="relative w-full px-5" id="form">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, iadd: event.target.value }))
              }
              type="text"
              name="address"
              id="adress"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Institute/Organization Name"
              required
              pattern="\S+.*"
            />
          </div>
          <div className="relative w-full px-10">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, iweb: event.target.value }))
              }
              type="text"
              name="url"
              id="url"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Institute/Organization Website URL"
              required
              pattern="\S+.*"
            />
          </div>
          <div className="relative w-full px-5" id="form">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, headname: event.target.value }))
              }
              type="text"
              name="address"
              id="head_name"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Institute/Organization Head's Name"
              required
              pattern="\S+.*"
            />
          </div>
          <div className="relative w-full px-5" id="form">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, heademail: event.target.value }))
              }
              type="email"
              name="email"
              id="email"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="E-mail"
              required
              pattern="\S+.*"
            />
          </div>
          <div className="relative w-full px-5" id="form">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, headphone: event.target.value }))
              }
              type="text"
              name="phone"
              id="phone"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Principal/Head's Phone no."
              required
              pattern="\S+.*"
            />
          </div>
          <div className="relative w-full px-5" id="form">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, icontact: event.target.value }))
              }
              type="text"
              name="contact"
              id="contact"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Institute/ Organization Contact no."
              required
              pattern="\S+.*"
            />
          </div>
          <div className="relative w-full px-10">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, password: event.target.value }))
              }
              type="password"
              name="password"
              id="password"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Password"
              required
              pattern="\S+.*"
            />
          </div>
        </form>
      </div>

      <div className="float-none md:float-right flex flex-col items-center justify-center md:w-1/2 lg:w-2/5 py-4 sm:mx-14 md:mx-4 lg:mx-2 lg:py-10  xl:py-14 my-4 lg:my-8 bg-white/30 rounded-[2rem] lg:rounded-[4rem] xl:rounded-[5rem]  border-2 border-offwhite shadow-lg xl:1/3">
        <h1 className="sm:text-2xl sm:mt-[4rem] md:my-[2rem] mt-[2rem]   md:text-2xl lg:text-3xl xl:text-4xl text-xl font-extrabold poppins  text-orange">
          Point of Contact
        </h1>

        <form className="flex flex-col items-center justify-center w-full gap-4  xl:gap-6 lg:mt-6 xl:px-12">
          <div className="relative w-full px-5" id="form">
            <input 
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pocName: event.target.value }))
              }
              type="text"
              name="poc_name"
              id="poc_name"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Point of contact Name"
              required
              pattern="\S+.*"
            />
          </div>
          <div className="relative w-full px-5" id="form">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pocEmail: event.target.value }))
              }
              type="email"
              name="poc_email"
              id="poc_email"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Point of contact Email"
              required
              pattern="\S+.*"
            />
          </div>
          <div className="relative w-full px-10">
            <input
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pocPhone: event.target.value }))
              }
              type="text"
              name="poc_phone"
              id="poc_phone"
              className="border-b-2 shadow-sm border-grey bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors peer"
              placeholder="Point of contact Phone No."
              required
              pattern="\S+.*"
            />
          </div>

          <p className="font-bold text-[0.75rem] text-red-500">
            {" "}
            Institute/Organization Email Id will be used as username
          </p>

          <div className="grid grid-row-1">
            <select
            required
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pocRole: event.target.value }))
              }
              className=""
              name="post"
              id="post"
            >
              <option value="">Point of contact Role/Post</option>
              <option value="lecturer">Lecturer</option>
              <option value="principal">Principal</option>
              <option value="training Officer">Training Officer</option>
              <option value="HOD">HOD</option>
              <option value="Placement">Placement Co-ordinator</option>
            </select>

            <select
            required
              onChange={(event) =>
                setValues((prev) => ({ ...prev, country: event.target.value }))
              }
              name="country"
              id="country"
            >
              <option value="">Country</option>
            </select>

            <div className=" flex flex-col items-center justify-between">
                <div>
                <h2>Pan Card</h2>
                <h2>Doucment</h2>
                </div>
                
            <input
                className=" py-1 px-5 block text-sm w-full text-white border rounded-2xl cursor-pointer bg-blue focus:outline-none  dark:bg-blue dark:placeholder-white"
                id="file_input"
                type="file"
                accept="application/pdf"
                onChange={(e)=>{e.target.files[0]}}
                required
                placeholder="PAN"
                name="PAN"
            ></input>
            <input
                className=" py-1 px-5 block w-full text-sm  text-white border rounded-2xl cursor-pointer bg-blue focus:outline-none  dark:bg-blue dark:placeholder-white"
                id="file_input1"
                type="file"
                accept="application/pdf"
                onChange={(e)=>{e.target.files[0]}}
                required
                placeholder="Doc"
                name="Doc"
            ></input>
            </div>
          </div>

          <div className="relative w-full px-12">
            <button
            
              onClick={handleOnClick}
              className="w-full p-1 my-4 sm:my-8 lg:my-6 xl:my-8 font-bold lg:extrabold xl:font-extrabold font-poppins text-sm sm:text-sm md:text-sm lg:text-xl xl:text-2xl text-white bg-blue rounded-[0.3rem] hover:bg-lb focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 sm:text-2xl"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>

        <p
          className="font-poppins md:text-normal items-center"
          onClick={handleClick}
        >
          <span className=" text-grey  hover:underline hover:decoration-grey">
            Have an account?
          </span>
          <span className=" text-orange thover:underline hover:decoration-orange">
            {" "}
            Login
          </span>
        </p>
      </div>

      <h1 className="sm:text-2xl sm:mt-[4rem] md:my-[2rem] mt-[2rem]   md:text-2xl lg:text-3xl xl:text-4xl text-xl font-extrabold poppins  text-orange">
        Create Account
      </h1>
    </div>
  );
};

export default GRegister;
