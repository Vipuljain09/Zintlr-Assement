import React from 'react'
import {GiRecycle} from 'react-icons/gi';
import {SiMicrosoftexcel} from 'react-icons/si';
import {BsFiletypeCsv} from 'react-icons/bs';
import {AiFillFilter} from 'react-icons/ai';
import SearchBar from './SearchBar';
import Card from '../utils/Card';
const ConsumerFilter = ({onFilterHandler}) => {
    const filterHandler = ()=>{
        onFilterHandler()
    }
  return (
    <div className="flex items-center justify-between my-2">
        <SearchBar />
        <div className=" flex items-center justify-center gap-4">
          <SiMicrosoftexcel size={"30px"} />
          <BsFiletypeCsv size={"30px"} />
          <GiRecycle size={"30px"} />
          <Card className="bg-blue-500 text-white text-xl cursor-pointer" onClick={filterHandler}>
            <AiFillFilter />
            Filter
          </Card>
        </div>
      </div>
  )
}

export default ConsumerFilter
