import React from "react";
import { menuList } from "../store/MenuList";

const SideBar = () => {
  return (
    <div className="h-[100%] w-[25%] absolute bg-gray-100 inset-0 px-2">
      <div>
        <p className="text-3xl font-bold p-3 text-blue-800">Zintlr</p>
      </div>

      <ul className=" flex flex-col gap-2">
        {menuList.map((item) => (
          <li>
            <div className="flex items-center gap-2 p-2 font-bold text-lg text-gray-500 hover:text-white hover:bg-blue-400 rounded-full cursor-pointer">
              <img
                src={item.url}
                alt=""
                className="h-[30px] font-semibold"
              />
              <span>{item.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
