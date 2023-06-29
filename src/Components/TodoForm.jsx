import React, { useState } from "react";

const TodoForm = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(value);
    if (value) {
      handleAddTodo(value);
      setValue("");
    }
  };
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          value={value}
          placeholder="what will you do today! "
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
