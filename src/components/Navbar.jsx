import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { IconButton } from "rsuite";
import { Menu } from "@rsuite/icons";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-red"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      {/* <NavButton
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      /> */}
      <IconButton
        icon={<Menu />}
        onClick={handleActiveMenu}
        style={{ background: currentColor }}
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[3rem] h-[3rem] pb-1 text-center justify-center font-extrabold font-poppins text-xl text-[#03c9d7] rounded-[5rem] hover:text-white "
      ></IconButton>

      <div className="flex">
        {/* <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} /> */}
        {/* <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />} 
        />*/}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex items-center gap-2 cursor-pointer p-1 hover:bg-[#65edf7e0] text-[#b2da45] rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-9 h-9"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-[#c2e958] text-14">Hi,</span>{" "}
              <span className="text-[#596e1f] font-normal ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {/* {isClicked.cart && (<Cart />)} */}
        {/* {isClicked.chat && <Chat />} */}
        {/* {isClicked.notification && <Notification />} */}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
