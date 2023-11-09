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
const TopFiveTransaction = () => {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("month");
  const [chartData, setChartData] = useState(null);

  const chartDataHandler = () => {
    setChartData({
      labels: [1, 2, 3, 4, 5],
      datasets: [
        {
          label: "Amount",
          data: data.map((item) => item["Amount"]),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: "Revenue",
          data: data.map((item) => item["Revenue"]),
          borderColor: "red",
          backgroundColor: "red",
        },
      ],
    });
  };
  useEffect(() => {
    let newData = UserData.filter((item) => {
      let d1 = new Date(item.Date);
      let d2 = new Date();
      let diff = d2.getTime() - d1.getTime();
      let months, year, days;
      days = diff / (1000 * 60 * 60 * 24);
      year = d2.getFullYear() - d1.getFullYear();
      months = year * 12 - d1.getMonth() + d2.getMonth();
      months = Math.max(0, months);

      if (filterValue === "month") {
        if (months <= 12) return true;
        else return false;
      } else if (filterValue === "week") {
        if (days <= 7) return true;
        else return false;
      } else if (filterValue === "year") {
        if (year <= 1) return true;
        return false;
      }
      return true;
    })
      .sort((a, b) => {
        return b.Amount - a.Amount;
      })
      .slice(0, 5);

    setData(newData);
  }, [filterValue]);

  useEffect(() => {
    chartDataHandler();
  }, [data]);

  if (chartData === null) return;
  //   return <Bar data={chartData}></Bar>

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
      <Bar data={chartData}></Bar>
    </div>
  );
};

export default TopFiveTransaction;
