import React, { useState } from "react";
import Card from "../utils/Card";
import { BsCashCoin ,BsFillWalletFill} from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";
import { data as UserData } from "../store/LastWeekEarnig";
import LineChart from "./Charts/LineChart";
const ConsumerOverall = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [
      {
        label: "Amount Earned",
        data: UserData.map((data) => data.amount),
        borderColor: "black",
        borderWidth: 2,
      },

    ],
  });
  return (
    <div className="md:grid grid-cols-2 gap-2">
      <div className="md:col-span-1 flex items-center justify-around border-2 border-gray-500 rounded-lg h-[150px] my-2">
        <div className="w-[30%] flex flex-col items-center justify-center">
          <p className="text-xl text-gray-500">Total Earning</p>
          <p className="text-2xl text-gray-800 font-semibold">1,20,000</p>
          <p className="text-xl text-gray-500 border-2 border-gray-800 rounded-lg px-4 py-2">Last Week</p>
        </div>
        <LineChart chartData={userData} />
      </div>
      <div className="md:col-span-1 flex items-center justify-around bg-orange-100 h-[150px] my-2">
        <BsFillWalletFill size={"35px"} className="text-orange-700" />
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xl font-semibold">Overall Bullien Wallet</p>
          <p className="flex items-center text-lg gap-2 text-orange-500">
            Watch history{" "}
            <span>
              <BiSolidRightArrow />
            </span>
          </p>
        </div>
        <span className="text-2xl font-semibold text-gray-700">1,23,00</span>
      </div>
      <Card className="md:col-span-1 bg-blue-100 h-[100px] justify-around my-2">
        <FaSackDollar size={"35px"} className="text-blue-700" />
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xl font-semibold">Overall Cash Wallet</p>
          <p className="flex items-center text-lg gap-2 text-blue-500">
            Watch history{" "}
            <span>
              <BiSolidRightArrow />
            </span>
          </p>
        </div>
        <span className="text-2xl font-semibold text-gray-700">1,23,00</span>
      </Card>
      <Card className="md:col-span-1 bg-green-100 justify-around h-[100px] my-2">
        <BsCashCoin size={"35px"} className="text-green-700" />
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xl font-semibold">Overall Cash Wallet</p>
          <p className="flex items-center text-lg gap-2 text-green-500">
            Watch history{" "}
            <span>
              <BiSolidRightArrow />
            </span>
          </p>
        </div>
        <span className="text-2xl font-semibold text-gray-700">1,23,00</span>
      </Card>
    </div>
  );
};

export default ConsumerOverall;
