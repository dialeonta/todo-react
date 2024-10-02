import React from "react";
import "../../css/TodoSearch.css";
import { TodoContext } from "../../context";

function TodoSearch () {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  return (
    <input 
      onChange={(e)=>setSearchValue(e.target.value)}
      value={searchValue}
      className="TodoSearch" placeholder="Search..." />
  );
}

export { TodoSearch };