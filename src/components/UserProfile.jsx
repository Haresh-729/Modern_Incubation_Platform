import React from 'react';
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from 'react-icons/md';
import { auth } from "../firebase";
import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { getElementByID } from '@syncfusion/ej2/maps';

const UserProfile = ({ username, photoUrl, email, category }) => {
  const { currentColor,setThemeSettings } = useStateContext();

  const navigate = useNavigate();
  const handleRoute1 = () => {
    console.log("hi");
    navigate("/profile");
  };


  return (
    <div className="nav-item absolute right-1 top-16 bg-[#B7F0FF] dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={photoUrl}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {username} </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  {category}   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {email} </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div onClick={handleRoute1} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        {/* <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              onClick={handleRoute}
              type="button"
              style={{ color: rgb(255, 244, 229), backgroundColor: rgb(254, 201, 15) }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              <FiCreditCard />
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">My Tasks</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> To-do and Daily Tasks </p>
            </div>
          </div> */}
      </div>
      {/* <IconButton
                    icon={<Gear />}
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: "50%" }}
                    className="hidden md:block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[4rem] h-[4rem] pb-1 text-center justify-center font-extrabold font-poppins text-3xl mb-[7rem] mr-[.5rem] text-[#03c9d7] rounded-[5rem] hover:text-white "
                  ></IconButton> */}
      <div onClick={() => setThemeSettings(true)} className="transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Settings"
          borderRadius="10px"
          width="full"

        />
      </div>
      <div onClick={() => {
        auth.signOut();
        navigate("/Logout");
      }} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"

        />
      </div>
    </div>

  );
};

export default UserProfile;
