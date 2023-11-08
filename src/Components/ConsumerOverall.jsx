import React from 'react'
import Card from '../utils/Card';
import {BsCashCoin} from 'react-icons/bs';
import {BiSolidRightArrow} from 'react-icons/bi'
import {FaSackDollar} from 'react-icons/fa6'
const ConsumerOverall = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1 border-2 border-gray-500 rounded-lg h-[150px]"></div>
            <div className="col-span-1 bg-orange-100 h-[150px]"></div>
            <Card className='col-span-1 bg-blue-100 h-[100px] justify-around'>
            <FaSackDollar size={'35px'} className="text-blue-700"/>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-xl font-semibold">Overall Cash Wallet</p>
                <p className="flex items-center text-lg gap-2 text-blue-500">Watch history <span><BiSolidRightArrow/></span></p>
              </div>
              <span className="text-2xl font-semibold text-gray-700">1,23,00</span>
            </Card>
            <Card className='col-span-1 bg-green-100 justify-around h-[100px]'>
            <BsCashCoin size={'35px'} className="text-green-700"/>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-xl font-semibold">Overall Cash Wallet</p>
                <p className="flex items-center text-lg gap-2 text-green-500">Watch history <span><BiSolidRightArrow/></span></p>
              </div>
              <span className="text-2xl font-semibold text-gray-700">1,23,00</span>
            </Card>
          </div>
  )
}

export default ConsumerOverall
