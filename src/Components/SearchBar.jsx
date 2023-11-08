import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai';

const SearchBar = ({onSearch,placeholderValue}) => {
  const [searchValue,setSearchValue] = useState('');

  const searchHandler = ()=>{
    return onSearch(searchValue);
  }
  const changeHandler=(event)=>{
    setSearchValue(event.target.value);
  };
  
  return (
    <div className='flex items-center justify-center rounded-full bg-gray-200 p-1'>
      <input className='text-lg pl-2 bg-gray-200 text-gray-500 outline-none rounded-lg' type="text" placeholder={placeholderValue} onChange={changeHandler} value={searchValue} />
      
      <div className='p-2 rounded-full bg-white'>
      <AiOutlineSearch size={'25px'} className='cursor-pointer' onClick={searchHandler}/>
      </div>
      
    </div>
  )
}

export default SearchBar
