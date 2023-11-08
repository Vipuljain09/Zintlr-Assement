import React, { useEffect, useState } from "react";
import { Userdata } from "../store/UserData";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import ConsumerFilter from "./ConsumerFilter";
import {RiArrowDownSLine} from 'react-icons/ri'
const ConsumerList = () => {
  const [pageNo, setPage] = useState(1);
  const [TotalConsumer,setTotalConsumer] = useState(Userdata);
  const [listItem, setListItem] = useState(TotalConsumer.slice(0, 5));

  const [filterList,setfilterList] = useState({"KYC-status":'Done'});

  const DecrementPageCounter = () => {
    setPage(Math.max(1, pageNo - 1));
  };
  const IncrementPageCounter = () => {
    if (Userdata.length <= pageNo * 5) return;
    setPage((pageNo) => pageNo + 1);
  };

  const filterListHandler = ()=>{
    console.log("pp");
    // setPage(1);
    const newList = TotalConsumer.filter(item=>{
        for (const key in filterList) {
            if(item[key]!== filterList[key])return false;
           
          }
        return true;
    })
    console.log(newList);
    setTotalConsumer(newList);
  }
  
  useEffect(() => {
    let skipCount = (pageNo - 1) * 5;
    setListItem(TotalConsumer.slice(skipCount, skipCount + 5));
  }, [pageNo,TotalConsumer]);

  return (
    <div>
      <ConsumerFilter onFilterHandler={filterListHandler}/>
      <ul className="flex flex-col ">
        <li className="flex items-center justify-around my-2 bg-gray-100 py-2 border-2 border-gray-500">
          <p className="text-lg font-semibold text-gray-800 w-[10%]">
            Consumer Name
          </p>
          <p className="text-lg font-semibold text-gray-800 w-[10%]">
            Asset-Value
          </p>
          <p className="text-lg font-semibold text-gray-800 w-[10%]">
            Revenue-Value
          </p>
          <p className="text-lg font-semibold text-gray-800 px-4 py-2 w-[10%]">
            KYC-status <RiArrowDownSLine/>
          </p>
          <p className="text-lg font-semibold text-gray-800 w-[10%]">
            Facilator-type
          </p>
          <p className="text-lg font-semibold text-gray-800 w-[10%]">Zone</p>
          <p className="text-lg font-semibold text-gray-800 w-[10%]">
            Account-type
          </p>
          <p className="text-lg font-semibold text-gray-800 w-[20%]">Email</p>
        </li>
        {listItem.map((data) => (
          <li
            className="flex items-center justify-around my-2 bg-gray-100 py-2"
            key={data.id}
          >
            <p className="text-lg font-semibold text-center text-gray-500 w-[10%]">
              {data["Consumer Name"]}
            </p>
            <p className="text-lg font-semibold text-center text-gray-500 w-[10%]">
              {data["Asset-Value"]}
            </p>
            <p className="text-lg font-semibold text-center text-gray-500 w-[10%]">
              {data["Revenue-Value"]}
            </p>
            <p className="text-lg font-semibold text-center px-4 py-2 bg-green-200 rounded-lg text-green-600 w-[10%]">
              {data["KYC-status"]}
            </p>
            <p className="text-lg font-semibold text-center text-gray-500 w-[10%]">
              {data["Facilator-type"]}
            </p>
            <p className="text-lg font-semibold text-center text-gray-500 w-[10%]">
              South
            </p>
            <p className="text-lg font-semibold text-center text-gray-500 w-[10%]">
              {data["Account-type"]}
            </p>
            <p className="text-lg font-semibold text-gray-500 w-[20%]">
              {data.email}
            </p>
          </li>
        ))}

        <div className="flex items-center justify-center mt-2 gap-4">
          <IoIosArrowDropleft
            size={"35px"}
            className="text-gray-800 cursor-pointer"
            onClick={DecrementPageCounter}
          />

          <span className="font-semibold text-gray-800 border-4 border-gray-500 rounded-md px-2 py-1">
            {pageNo}
          </span>
          <IoIosArrowDropright
            size={"35px"}
            className="text-gray-800 cursor-pointer"
            onClick={IncrementPageCounter}
          />
        </div>
      </ul>
    </div>
  );
};

export default ConsumerList;
