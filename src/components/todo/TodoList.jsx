import React from "react";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

function TodoList(props) {
  let itemsLeft = 0;

  for (let i = 0; i < props.todos.length; i++) {
    if (props.todos[i].completed === false) {
      itemsLeft++;
    }
  }

  const allTodos = props.todos.map((todo, index) => {
    return (
      <TodoItem
        text={todo.text}
        completed={todo.completed}
        key={todo.id}
        id={todo.id}
        markComplete={props.markComplete}
        deleteTodo={props.deleteTodo}
        dragStart={props.dragStart}
        dragEnter={props.dragEnter}
        drop={props.drop}
        index={index}
      />
    );
  });

  return (
    <section className="bg-white mx-6 rounded-xl dark:bg-[hsl(235,24%,19%)] overflow-hidden md:rounded-none">
      {allTodos}
      <div className="flex items-center justify-between p-4 text-sm text-gray-400 dark:text-[hsl(233,14%,35%)]">
        <p>
          {itemsLeft} {itemsLeft === 1 ? "item" : "items"} left
        </p>
        {props.windowSize >= 768 && (
          <TodoFilter
            currentView={props.currentView}
            showAll={props.showAll}
            showActive={props.showActive}
            showCompleted={props.showCompleted}
          />
        )}
        <button
          onClickCapture={props.clearCompleted}
          className="dark:hover:text-gray-50 hover:text-gray-700"
        >
          Clear Completed
        </button>
      </div>
    </section>
  );
}

export default TodoList;
