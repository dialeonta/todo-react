import "../../css/TodoItem.css";
import { CompleteIcon } from"../icon/CompleteIcon"
import { DeleteIcon } from"../icon/DeleteIcon"

function TodoItem({ text, completed, onCompleted, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon onCompleted={onCompleted} completed={completed} />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon onCompleted={onDelete} /> 
    </li>
  );
}

export { TodoItem };