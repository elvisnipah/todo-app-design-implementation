import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  let itemsLeft = 0;

  for (let i = 0; i < props.todos.length; i++) {
    console.log(props.todos);
    if (props.todos[i].completed === false) {
      itemsLeft++;
    }
  }

  const allTodos = props.todos.map((todo) => {
    return (
      <TodoItem
        text={todo.text}
        completed={todo.completed}
        key={todo.id}
        id={todo.id}
        markComplete={props.markComplete}
        deleteTodo={props.deleteTodo}
      />
    );
  });

  return (
    <section className="bg-white mx-6 rounded-lg">
      {allTodos}
      <div className="flex justify-between p-4 text-sm text-gray-400">
        <p>
          {itemsLeft} {itemsLeft === 1 ? "item" : "items"} left
        </p>
        <button onClickCapture={props.clearCompleted}>Clear Completed</button>
      </div>
    </section>
  );
}

export default TodoList;
