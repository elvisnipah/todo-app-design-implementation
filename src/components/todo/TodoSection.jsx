import React, { useState, useRef } from "react";
import TodoFilter from "./TodoFilter";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoSection(props) {
  const [todos, setTodos] = useState([]);

  const [view, setView] = useState("All");

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
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

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyTodos = [...todos];
    const dragItemContent = copyTodos[dragItem.current];
    copyTodos.splice(dragItem.current, 1);
    copyTodos.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTodos(copyTodos);
  };

  return (
    <section className="mt-[-100px] flex flex-col gap-4 pb-8 md:w-[700px] md:mx-auto">
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
        dragStart={dragStart}
        dragEnter={dragEnter}
        drop={drop}
        currentView={view}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
        windowSize={props.windowSize}
      />
      {props.windowSize < 768 && (
        <TodoFilter
          currentView={view}
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
        />
      )}
      <p className="mx-6 text-center mt-4 text-sm text-gray-400 dark:text-[hsl(233,14%,35%)]">
        Drag and drop to reorder list
      </p>
    </section>
  );
}

export default TodoSection;
