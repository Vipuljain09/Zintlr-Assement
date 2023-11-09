import React from "react";
import Card from "../utils/Card";
import { MdPermContactCalendar } from "react-icons/md";
import {IoAlertCircleSharp,IoTicket} from 'react-icons/io5';
import CustomButton from "../utils/CustomButton";
import { Link, useParams } from "react-router-dom";
const ConsumerHeader = () => {
  
  return (
    <div className="grid grid-cols-6 gap-4">
      <Card className="col-span-6 h-[180px] bg-blue-50 md:col-span-3">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-2xl font-bold ">Hello Vipul!</p>
                <p className="font-semibold text-gray-700">You have 134 consumer's this week.</p>

                <div className=" flex items-start gap-1 mt-2">
                    
                    <Link to='/'><CustomButton >Consumer</CustomButton></Link>
                    
                    <Link to='/manager'><CustomButton >Manage Consumer</CustomButton></Link>
                </div>
            </div>
            <img src="https://img.freepik.com/premium-vector/business-cooperation-team-network_999616-35.jpg?w=740" alt="" className="w-[30%]"/>
        </div>
      </Card>
      <Card className="col-span-2 md:col-span-1 h-[180px] flex flex-col items-center justify-center gap-2 bg-orange-100">
        <div className="flex items-start gap-1">
          <MdPermContactCalendar size={'35px'} className="text-red-950"/>
          <span className="text-lg"> You have <span className="font-extrabold text-2xl">250</span> KYC approval pending!</span>
        </div>
        <CustomButton>View List</CustomButton>
      </Card>

      <Card className="col-span-2 md:col-span-1 h-[180px] flex flex-col items-center justify-center gap-2 bg-red-100">
      <div className="flex items-start gap-1">
          <IoAlertCircleSharp size={'35px'} className="text-red-500"/>
          <span className="text-lg"> You have <span className="font-extrabold text-2xl">150</span> High risk consumer.</span>
        </div>
        <CustomButton>View List</CustomButton>
      </Card>
      <Card className="col-span-2 md:col-span-1 h-[180px] flex flex-col items-center justify-center gap-2 bg-green-100">
      <div className="flex items-start gap-1">
          <IoTicket size={'35px'} className="text-blue-500"/>
          <span className="text-lg"> There are <span className="font-extrabold text-2xl">50</span> tickets opens.</span>
        </div>
        <CustomButton>View List</CustomButton>
      </Card>
    
    </div>
  );
};

export default ConsumerHeader;
