import React from "react";
import SearchBar from "./SearchBar";
import { IoIosNotifications, IoMdContacts } from "react-icons/io";
import { FaSackDollar ,FaAngleRight } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";
import Card from "../utils/Card";
const Navbar = () => {
  return (    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <div className="text-blue-500"><FaAngleRight size={'20px'}/></div>
        <SearchBar />
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="Notification-Icon-Container flex items-start justify-center gap-2">
          <FaSackDollar size={"35px"} />
          <IoIosNotifications size={"35px"} />
          <IoMdContacts size={"35px"} />
        </div>
        <Card>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="block mx-auto h-20 w-20 object-cover rounded-full"
          />
          <div className="pl-2 pr-2 cursor-pointer">
            <BsChevronDown size={"20px"} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Navbar;
