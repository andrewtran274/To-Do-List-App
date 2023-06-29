import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import TodoElements from "./TodoElements";
import FormEditTodo from "./FormEditTodo";

const TodoWrapper = () => {
  const [todos, setTodo] = useState([]);
  console.log(todos);
  const handleAddTodo = (todo) => {
    setTodo([
      ...todos,
      { id: uuidv4(), task: todo, isCompleted: false, isEditing: false },
    ]);
  };

  const handleDeleteTask = (todoid) => {
    setTodo(todos.filter((todo) => todo.id !== todoid));
  };

  const handleIsComplete = (id) => {
    setTodo((data) =>
      data.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleIsEditing = (id) => {
    setTodo((data) =>
      data.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const handleUpdateTask = (id, value) => {
    setTodo((data) =>
      data.map((todo) => (todo.id === id ? { ...todo, task: value } : todo))
    );
  };
  return (
    <div className="todo-wrapper">
      <h1>To Do List!</h1>
      <TodoForm handleAddTodo={handleAddTodo}></TodoForm>
      {todos.map((todo) =>
        todo.isEditing ? (
          <FormEditTodo
            handleUpdateTask={handleUpdateTask}
            handleIsEditing={handleIsEditing}
            todo={todo}
          />
        ) : (
          <TodoElements
            key={todo.id}
            todo={todo}
            deleteTodo={handleDeleteTask}
            handleIsComplete={handleIsComplete}
            handleIsEditing={handleIsEditing}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
