import React, { useState } from "react";
import TodoFilter from "./TodoFilter";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoSection() {
  const [todos, setTodos] = useState([]);

  const [view, setView] = useState("All");

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    console.log(todos);
  };

  const markComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return { ...todo };
        }
      })
    );
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.completed !== true)
    );
  };

  const activeTodos = todos.filter((todo) => todo.completed === false);

  const completedTodos = todos.filter((todo) => todo.completed === true);

  const showAll = () => {
    setView("All");
  };

  const showActive = () => {
    setView("Active");
  };

  const showCompleted = () => {
    setView("Completed");
  };

  return (
    <section className="mt-[-100px] flex flex-col gap-4 pb-8 ">
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={
          view === "All"
            ? todos
            : view === "Active"
            ? activeTodos
            : completedTodos
        }
        markComplete={markComplete}
        deleteTodo={deleteTodo}
        clearCompleted={clearCompleted}
      />
      <TodoFilter
        currentView={view}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
      />
      <p className="mx-6 text-center mt-4 text-sm text-gray-400 dark:text-[hsl(233,14%,35%)]">
        Drag and drop to reorder list
      </p>
    </section>
  );
}

export default TodoSection;
