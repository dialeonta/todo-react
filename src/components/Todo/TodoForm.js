import { TodoContext } from '../../context';
import '../../css/TodoForm.css'
import React from "react";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [ newItem, setNewItem ] = React.useState();

  const submit = (event) => {
    event.preventDefault();
    if(newItem) {
      addTodo(newItem);
      onClose();
    }
  }

  const onClose = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    const { value } = event.target;
    setNewItem(value)
  }

  return(
    <form onSubmit={submit}>
      <label>Nuevo elemento de la lista</label>
      <textarea name="item" onChange={onChange} value={newItem} placeholder="Nuevo elemento de la lista"></textarea>
      <div className='TodoForm-buttonContainer'>
        <button type='button' onClick={onClose} className="TodoForm-button TodoForm-button--cancel">Cerrar</button>
        <button type='submit' className="TodoForm-button TodoForm-button--add">Guardar</button>
      </div>
    </form>
  )
}

export { TodoForm }