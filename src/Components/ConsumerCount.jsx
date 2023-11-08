import React from 'react'
import { IoIosAlert } from "react-icons/io";
const ConsumerCountList = [
  {
    title: "Direct Consumer",
    Count: 150,
  },
  {
    title: "Throught Associted",
    Count: 130,
  },
  {
    title: "Throught Field Executive",
    Count: 190,
  },
  {
    title: "Throught Sales Executive",
    Count: 110,
  },
];
const CosumerCount = () => {
  return (
    <div className="flex items-center h-[150px] mb-2 border-2 border-gray-400 rounded-lg">
            <div className="flex items-center justify-between bg-blue-200 p-2 w-[35%] h-[100%] rounded-lg">
              <img
                src="https://cdn.vectorstock.com/i/1000x1000/29/27/user-group-flat-icon-vector-14992927.webp"
                alt=""
                className="w-[80px] rounded-full object-cover mr-2"
              />
              <div>
                <p className="text-lg">Total Consumers</p>
                <p className="text-2xl font-semibold text-gray-800">1,256</p>
              </div>
            </div>
            <div className="w-full mx-4">
              <ul className="grid grid-cols-4 gap-4">
                {ConsumerCountList.map((item) => 
                  <li className="flex items-center justify-between col-span-2">
                    <p className="flex items-center gap-2">
                      <span className="text-xl text-gray-700">{item.title}</span>
                      <IoIosAlert size={"25px"} className="text-purple-500" />
                    </p>
                    <span className="text-2xl text-gray-900">{item.Count}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
  )
}

export default CosumerCount
