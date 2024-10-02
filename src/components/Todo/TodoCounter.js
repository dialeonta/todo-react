import { TodoContext } from "../../context";
import "../../css/TodoCounter.css";
import React from "react";

function TodoCounter() {
  const { fullTodos, completedTodo } = React.useContext(TodoContext);

  return (
    <h1>Has completado { completedTodo } de { fullTodos }</h1>
  );
}
export { TodoCounter };