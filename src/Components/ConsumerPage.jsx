import React,{useState} from "react";
import Card from "../utils/Card";
import ConsumerHeader from "./ConsumerHeader";
import CosumerCount from "./ConsumerCount";
import ConsumerOverall from "./ConsumerOverall";

import { UserData } from "../store/ChartData";
import BarChart from "./Charts/BarChart";
import HightestRevenue from "./Charts/HightestRevenue";
import TopFiveTransaction from "./Charts/TopFiveTransaction";
import ConsumerAnalysis from "./Charts/ConsumerAnalysis";

const ConsumerPage = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="mt-4">
      <ConsumerHeader/>
      <p className="text-2xl font-bold text-black p-2">Consumer Overview</p>

      <div class="md:grid grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <CosumerCount/>
          <ConsumerOverall/>
        </div>

        <Card className="md:col-span-1 h-[400px] border-2 border-gray-500 flex-col justify-around my-2">
        <div className="flex items-center justify-between gap-10">
         <p className="text-2xl text-gray-600 font-semibold">Highest Revenue Earned</p>
         <p className="text-gray-500 border-2 border-gray-800 rounded-md p-1">Top 7</p>
         </div>
          <HightestRevenue chartData={userData} />
        </Card>
      </div>
      <div class="md:grid grid-cols-3 gap-4 my-4">
        <Card className="md:col-span-2 h-[500px] border-2 border-gray-500 flex-col justify-around my-2">
        <p className="text-2xl text-gray-600 font-semibold">Consumer Analysis</p>
          <ConsumerAnalysis />
        </Card>
        <Card className="md:col-span-1 h-[400px] border-2 border-gray-500 flex-col justify-around">
          <p className="text-2xl text-gray-600 font-semibold">5 Greatest Transaction</p>
          <TopFiveTransaction/>
        </Card>
      </div>
    </div>
  );
};

export default ConsumerPage;
