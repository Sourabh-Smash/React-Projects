import React from 'react'

const SearchBar = ({inputRef,searchBtn,value}) => {
  return (
    <div className="InputWrapper">
      <input ref={inputRef} placeholder="Enter" />
      <button onClick={searchBtn}>{value}</button>
    </div>
  );
}

export default SearchBar;