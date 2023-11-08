import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
const SearchBar = () => {
  return (
    <div className='flex items-center justify-center rounded-full bg-gray-200 p-1'>
      <input className='text-lg pl-2 bg-gray-200 text-gray-500 outline-none rounded-l-lg' type="text" placeholder='Search(Eg: Rewards)' />
      <div className='p-2 rounded-full bg-white'>
      <AiOutlineSearch size={'25px'}/>
      </div>
      
    </div>
  )
}

export default SearchBar
