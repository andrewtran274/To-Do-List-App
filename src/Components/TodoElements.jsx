import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
const TodoElements = ({
  todo,
  deleteTodo,
  handleIsComplete,
  handleIsEditing,
}) => {
  return (
    <div className="todo">
      <p
        className={`${todo.isCompleted ? "completed" : ""}`}
        onClick={() => handleIsComplete(todo.id)}
      >
        {todo.task}
      </p>
      <div className="icon-item">
        <FaRegTrashAlt className="icon" onClick={() => deleteTodo(todo.id)} />
        <BsFillPencilFill
          className="icon"
          onClick={() => handleIsEditing(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoElements;
