import React from "react";
import { Link, NavLink } from "react-router-dom";

import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import ModernVate from "./../assets/modernvate-blue.png";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-1 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex items-center gap-5 pl-1 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-1  h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
          
            <Link
              to="/Dashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img className="w-10" src={ModernVate} alt="logo" />
              <div className="font-family:Georgia w-[16rem] decoration-wavy hover:scale-100 text-bold ">
                ModernVate
              </div>
            </Link>
            <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="absolute ml-[14rem] text-xl rounded-full p-3 hover:bg-[#AABABE] mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            {/* <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 bg-red-700 hover:bg-[#AABABE] mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent> */}
          </div>
          <div className="mt-10 text-black ">
            {links.map((item) => (
              <div key={item.title}>
                {/* <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p> */}
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}

                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
