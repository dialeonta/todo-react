import React from "react";
import "../../css/TodoCreateButton.css";
import { TodoContext } from "../../context";

function TodoCreateButton () {
  const { setOpenModal } = React.useContext(TodoContext);
  return (
    <button
      onClick={()=>setOpenModal(state => !state)}
      className="TodoCreateButton">+</button>
  );
}

export { TodoCreateButton };