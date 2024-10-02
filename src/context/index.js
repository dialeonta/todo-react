import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const lsName = "TODOS_LIST";
const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [openModal, setOpenModal] = React.useState(false); 
  const [todos, saveTODOS] = useLocalStorage(lsName, [{ text: "Crear Lista", completed: false }]);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodo = todos.filter(t => t.completed).length;
  const fullTodos = todos.length;

  const searchedTodo = todos.filter(t => t.text.toLowerCase().includes(searchValue.toLowerCase()));
  
  const changeState = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(t => t.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTODOS(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos, {text:text, completed:false}]
    saveTODOS(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(t => t.text === text)
    newTodos.splice(todoIndex,1);
    saveTODOS(newTodos);
  }

  return(
    <TodoContext.Provider value=
      {
        {
          completedTodo,
          fullTodos,
          searchValue,
          setSearchValue,
          searchedTodo,
          deleteTodo,
          changeState,
          openModal,
          setOpenModal,
          addTodo
        }
      }>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };