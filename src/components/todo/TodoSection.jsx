import React, { useState } from "react";

import TodoInput from "./TodoInput";

function TodoSection() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    console.log(todos);
  };

  return (
    <section className="mt-[-100px] flex flex-col">
      <TodoInput addTodo={addTodo} />
    </section>
  );
}

export default TodoSection;
