import React from "react";
import { menuList } from "../store/MenuList";
import { FaAngleLeft } from "react-icons/fa6";
import { Link, redirect } from "react-router-dom";
const SideBar = ({ onSideBar }) => {
  return (
    <>
      <div className="h-[100%] w-[25%] absolute bg-gray-100 inset-0 px-2">
        <div className=" flex items-center my-4">
          <img
            src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fzintlr-logo-107_9MS3_DP0l.png%3Ftr%3Doptimized&w=128&q=75"
            alt=""
            className="w-[50px] cursor-pointer"
            onClick={() => {
              redirect("/");
              onSideBar();
            }}
          />

          <p className="text-3xl font-bold p-3 text-blue-800">Zintlr</p>
        </div>

        <ul className=" flex flex-col gap-2">
          {menuList.map((item) => (
            <li onClick={() => {
              redirect("/");
              onSideBar();
            }}>
              <div className="flex items-center gap-2 p-4 font-bold text-lg text-gray-500 hover:text-white hover:bg-blue-400 rounded-full cursor-pointer ">
                <img src={item.url} alt="" className="h-[30px] font-semibold" />
                <span>{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
        <FaAngleLeft
          size={"25px"}
          className="cursor-pointer text-blue-800 z-50 absolute right-5 top-10"
          onClick={() => onSideBar()}
        />
      </div>
    </>
  );
};

export default SideBar;
