import React, { useEffect, useState } from "react";
import { Userdata } from "../store/UserData";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import ConsumerFilter from "./ConsumerFilter";
import ConsumerListHeader from "./ConsumerListHeader";
const optionList = {
  "KYC-status": ["Done", "Pending", "In Process", "Rejected"],
  Zone: ["North", "South", "West", "East"],
  "Account-type": ["Business", "Pay-and-Use"],
};
const DefaultshowDropDownList = {
  "Zone": false,
  "KYC-status": false,
  "Account-type": false,
};
const DefaultfilterList = {
  "Zone": "",
  "KYC-status": "",
  "Account-type": "",
};

const ConsumerList = () => {
  const [pageNo, setPage] = useState(1);
  const [TotalConsumer, setTotalConsumer] = useState(Userdata);
  const [listItem, setListItem] = useState(TotalConsumer.slice(0, 5));

  const [filterList, setfilterList] = useState(DefaultfilterList);
  const [showDropDownList, setShowDropDownList] = useState(DefaultshowDropDownList);

  const DecrementPageCounter = () => {
    setPage(Math.max(1, pageNo - 1));
  };
  const IncrementPageCounter = () => {
    if (Userdata.length <= pageNo * 5) return;
    setPage((pageNo) => pageNo + 1);
  };

  const filterListHandler = () => {
    setShowDropDownList(DefaultshowDropDownList);
    setfilterList(DefaultfilterList);
    console.log("pp", filterList);
    // setPage(1);
    if (filterList.length === 0) return;
    const newList = Userdata.filter((item) => {
      for (const key in filterList) {
        if (filterList[key]!=='' && item[key] !== filterList[key]) return false;
      }
      return true;
    });
    console.log(newList);
    setTotalConsumer(newList);
  };

  const searchConsumerHandler = (value) => {
    setShowDropDownList(DefaultshowDropDownList);
    setfilterList(DefaultfilterList);
    if (!value) {
      setTotalConsumer(Userdata);
      return;
    }
    const newList = Userdata.filter((item) => {
      if (value === item["Consumer Name"]) return true;
      else return false;
    });
    setTotalConsumer(newList);
  };

  useEffect(() => {
    let skipCount = (pageNo - 1) * 5;
    setListItem(TotalConsumer.slice(skipCount, skipCount + 5));
  }, [pageNo, TotalConsumer]);
 
  return (
    <div>
      <ConsumerFilter
        onFilterHandler={filterListHandler}
        onSearch={searchConsumerHandler}
      />
      <ul className="flex flex-col ">
        <ConsumerListHeader
          setShowDropDownList={(val)=>setShowDropDownList(val)}
          showDropDownList={showDropDownList}
          optionList={optionList}
          setfilterList={(val)=>setfilterList(val)}
          filterList={filterList}
        />
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
            <p
              className={
                data["KYC-status"] === "Done"
                  ? "text-green-600 bg-green-100 border-2 border-green-600 text-lg font-semibold text-center px-4 py-2 rounded-lg w-[10%]"
                  : "text-orange-600 bg-orange-100 border-2 border-orange-600 text-lg font-semibold text-center px-4 py-2 rounded-lg w-[10%]"
              }
            >
              {data["KYC-status"]}
            </p>
            <p className="text-lg font-semibold text-center text-gray-500 w-[10%]">
              {data["Facilator-type"]}
            </p>
            <p className="text-lg font-semibold text-center text-gray-500 w-[10%]">
              {data["Zone"]}
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
