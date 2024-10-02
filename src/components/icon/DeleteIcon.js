import React from "react";
import { TodoIcon } from "./TodoIcon";

function DeleteIcon({onCompleted}) {
  return(
    <TodoIcon 
      type="delete"
      color="gray"
      onCompleted={onCompleted}
    />
  );
}

export { DeleteIcon };