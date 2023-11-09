import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { data as UserData } from "../../store/RevenueData.js";
const list = [
    {
      title: "Past week",
      value: "week",
    },
    {
      title: "Past month",
      value: "month",
    },
    {
      title: "Past year",
      value: "year",
    },
    {
      title: "All time",
      value: "alltime",
    },
  ];
const ConsumerAnalysis = () => {
  const [data, setData] = useState([10,20,30]);
  const [chartData, setChartData] = useState(null);
  const [filterValue, setFilterValue] = useState("month");
  const chartDataHandler = () => {
    setChartData({
      labels: ["Least Active","Moderate Active","Very Active"],
      datasets: [
        {
          label: "People",
          data: [10,34,22],
          borderColor: "black",
          backgroundColor: ["#DDF2FD","#427D9D","#164863"],
          borderWidth: 2,
        },
        
      ],
    });
  };
  useEffect(() => {
    let a=0,b=0,c=0;
    UserData.forEach((item) => {
      let d1 = new Date(item.Date);
      let d2 = new Date();
      let diff = d2.getTime() - d1.getTime();
      let days;
      days = diff / (1000 * 60 * 60 * 24);
      
      if(days <=15)a+=1;
      else if(days<=90)b+=1;
      else c+=1;
      
    })
   
    setData([a,b,c]);
  },[]);

  useEffect(() => {
    chartDataHandler();
  }, [data]);

  if (chartData === null) return;
  
  const options ={
    indexAxis: 'y',
  }
  return (
    <div className="flex flex-col items-center justify-between">
      <ul className="flex items-center justify-center gap-2 mb-8">
        {list.map((item) => (
          <li
            className={
              item["value"] === filterValue
                ? "text-white border-2 border-gray-900 bg-gray-900 p-2 rounded cursor-pointer"
                : "text-gray-800 border-2 border-gray-900 p-2 rounded cursor-pointer"
            }
            onClick={()=>{
                setFilterValue(item["value"]);
              }}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <Bar options={options} data={chartData}></Bar>
    </div>
  );
};

export default ConsumerAnalysis;
