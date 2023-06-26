import React from 'react'
import { IoSearch } from "react-icons/io5"
function SearchBar({handleSearch}) {
  return (
    <div className='search'>
      <IoSearch />
      <input type='text'
        placeholder='type here to search...'
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;
