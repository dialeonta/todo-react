import React from 'react';
import { TodoContext } from '../context';
import { TodoCounter } from './Todo/TodoCounter';
import { TodoCreateButton } from "./Todo/TodoCreateButton";
import { TodoItem } from "./Todo/TodoItem";
import { TodoList } from "./Todo/TodoList";
import { TodoSearch } from "./Todo/TodoSearch";
import { Modal } from './modal';
import { TodoForm } from './Todo/TodoForm';

function AppUI() {
  const { searchedTodo, changeState, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
  return(
    <>
      <TodoCounter />
      <TodoSearch  />
      <TodoList>
        { searchedTodo.map(todo => 
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => changeState(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          /> 
        )}
      </TodoList>
      <TodoCreateButton />
      {openModal && (
        <Modal><TodoForm></TodoForm></Modal>
      )}
    </>
  )
}

export { AppUI }