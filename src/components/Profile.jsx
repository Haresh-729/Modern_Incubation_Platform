import React from "react";
import avatar from "../data/avatar.jpg";

const Profile = () => {
  return (
    <div>
      {/* div 1 */}
      <div className="flex-col ">
        <div className="h-40 w-4/5 mb-1 ml-36  bg-[url('https://i.ibb.co/LYQ3cs3/bg.png')] bg-cover rounded-lg  bg-local static">
          <img
            src={avatar}
            alt="profile-Picture"
            border="0"
            className="h-40 w-40 ml-7 mt-24 rounded-full border-4 border-white absolute "
          />
        </div>

        {/* div 2 */}
        <div className=" h-28 w-4/5 mb-7 ml-36   bg-indigo-400 bg-cover rounded-lg">

        <div className="grid  pl-48">
            <h1 className="text-[#ffffff] text-5xl p-5 font-semibold ">
              Michael
            </h1>
            
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Profile;
