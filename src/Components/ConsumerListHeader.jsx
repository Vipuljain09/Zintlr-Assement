import React from 'react'
import Dropdown from '../utils/DropDown';
import { RiArrowDownSLine } from 'react-icons/ri';

const ConsumerListHeader = ({setShowDropDownList,showDropDownList,optionList,setfilterList,filterList}) => {
    // console.log(showDropDownList);
  return (
    <li className="flex items-center justify-around my-2 bg-gray-100 py-2 border-2 border-gray-500">
          <p className="font-semibold text-center text-gray-800 w-[10%]">
            Consumer Name
          </p>
          <p className="font-semibold text-center text-gray-800 w-[10%]">
            Asset-Value
          </p>
          <p className="font-semibold text-center text-gray-800 w-[10%]">
            Revenue-Value
          </p>
          <p className="flex items-center relative font-semibold text-center text-gray-800 px-4 py-2 w-[10%]">
            KYC-status
            <RiArrowDownSLine
              size={"25px"}
              className="cursor-pointer"
              onClick={() => {
                setShowDropDownList({...showDropDownList,'KYC-status':!showDropDownList['KYC-status']});
              }}
            />
            {showDropDownList['KYC-status'] && (
              <Dropdown
                options={optionList['KYC-status']}
                isVisible={true}
                setValue={(val) => {
                  setfilterList({ ...filterList, 'KYC-status': val });
                }}
              />
            )}
          </p>
          <p className="font-semibold text-center text-gray-800 w-[10%]">
            Facilator-type
          </p>
          <p className="flex items-center relative font-semibold text-center text-gray-800 w-[10%]">
            Zone
            <RiArrowDownSLine
              size={"25px"}
              className="cursor-pointer"
              onClick={() => {
                setShowDropDownList({...showDropDownList,'Zone':!showDropDownList['Zone']});
              }}
            />
            {showDropDownList['Zone'] && (
              <Dropdown
                options={optionList['Zone']}
                isVisible={true}
                setValue={(val) => {
                  setfilterList({ ...filterList, 'Zone': val });
                }}
              />
            )}
            
          </p>
          <p className="flex items-center relative font-semibold text-center text-gray-800 w-[10%]">
            Account-type
            <RiArrowDownSLine
              size={"25px"}
              className="cursor-pointer"
              onClick={() => {
                setShowDropDownList({...showDropDownList,'Account-type':!showDropDownList['Account-type']});
              }}
            />
            {showDropDownList['Account-type'] && (
              <Dropdown
                options={optionList['Account-type']}
                isVisible={true}
                setValue={(val) => {
                  setfilterList({ ...filterList, 'Account-type': val });
                }}
              />
            )}
          </p>
          <p className="font-semibold text-center text-gray-800 w-[20%]">
            Email
          </p>
        </li>
        
  )
}

export default ConsumerListHeader;
