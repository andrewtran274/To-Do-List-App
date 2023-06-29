import React, { useState } from "react";

const FormEditTodo = ({ todo, handleIsEditing, handleUpdateTask }) => {
  const [value, setValue] = useState(todo.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      handleUpdateTask(todo.id, value);
      handleIsEditing(todo.id);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-update">
      <input
        type="text"
        placeholder="Update Task!"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default FormEditTodo;
