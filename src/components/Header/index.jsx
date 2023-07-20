import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import pic from "../../assets/user.png";
import { BsChevronDown } from "react-icons/bs";

const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarToggle = () => setIsOpen(!isOpen);
  const { pathname } = useLocation();
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <GoHome />,
    },
    {
      path: "/merchants",
      name: "Merchant",
      icon: <BiUser />,
    },
  ];
  return (
    <div className="flex">
      <div className="flex">
        <div
          className={`bg-[#FAFAFA] border-r-[1px] border-r-gray-200 pt-16 lg:px-4 px-0 lg:relative absolute text-white h-screen transition-all duration-300  ${
            isOpen ? "w-[300px] lg:w-[240px] px-4" : "lg:w-[50px] w-0 lg:px-2 "
          } `}
        >
          {menuItem.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={` flex items-center gap-3 rounded-md my-3 py-3 ${
                isOpen ? "block" : "lg:block hidden lg:py-2"
              } ${item.path === pathname ? "bg-[#FD5D3E]" : "bg-white"}`}
            >
              <div
                className={`text-[25px]  ${
                  isOpen
                    ? "block px-2"
                    : "lg:flex hidden  lg:justify-center px-0"
                }  ${
                  item.path === pathname ? " text-white" : "text-[#FD5D3E]"
                }`}
              >
                {item.icon}
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className={` text-sm  ${
                  item.path === pathname ? " text-white" : "text-[#FD5D3E]"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-white px-5 border-b-[1px] border-b-gray-200  h-14 w-full absolute top-0 flex  justify-between items-center">
          <div className="flex gap-4 items-between">
            <FaBars
              onClick={sidebarToggle}
              className="text-[25px] text-[#FD5D3E]"
            />
            <h1 className="text-[#FD5D3E]">Dashboard</h1>
          </div>
          <div
            className="relative flex gap-2 items-center cursor-pointer rounded-full pr-3"
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
          >
            <img
              src={pic}
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-[#FD5D3E] font-semibold max-w-[70px] truncate ...">
              Admin
            </p>

            <BsChevronDown
              color="#FD5D3E"
              className={`${
                toggle ? "-rotate-180" : "rotate-0"
              } transition-all ease-linear duration-200`}
            />

            <div
              className={`absolute ${
                toggle ? "max-h-[150px] border-[0.5px] py-[20px]" : "max-h-0"
              } w-[230px] gap-4 top-11 right-0 overflow-hidden rounded-[4px] bg-white  shadow-sm flex flex-col px-4 transition-all ease-linear duration-200`}
            >
              <div className="flex items-center gap-2">
                <img
                  src={pic}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-[#FD5D3E] font-semibold">Admin</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <button className="w-[180px] border-[0.5px] border-[#FD5D3E] text-[#FD5D3E] rounded-full h-[25px] text-sm flex items-center justify-center hover:bg-[#FD5D3E] hover:text-white hover:transition-all transition-all">
                  Profile
                </button>
                <button className="w-[180px] border-[0.5px] border-[#FD5D3E] text-[#FD5D3E] rounded-full h-[25px] text-sm flex items-center justify-center hover:bg-[#FD5D3E] hover:text-white hover:transition-all transition-all">
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
