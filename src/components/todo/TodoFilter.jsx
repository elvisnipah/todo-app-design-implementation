import React from "react";

function TodoFilter(props) {
  return (
    <section className="bg-white dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(233,14%,35%)] mx-6 rounded-lg flex items-center justify-center gap-6 p-4 md:p-0 text-gray-400 font-bold ">
      <button
        className={`${
          props.currentView === "All" && "text-[hsl(220,98%,61%)]"
        } dark:hover:text-gray-50 hover:text-gray-700`}
        onClick={props.showAll}
      >
        All
      </button>
      <button
        className={`${
          props.currentView === "Active" && "text-[hsl(220,98%,61%)]"
        } dark:hover:text-gray-50 hover:text-gray-700`}
        onClick={props.showActive}
      >
        Active
      </button>
      <button
        className={`${
          props.currentView === "Completed" && "text-[hsl(220,98%,61%)]"
        } dark:hover:text-gray-50 hover:text-gray-700`}
        onClick={props.showCompleted}
      >
        Completed
      </button>
    </section>
  );
}

export default TodoFilter;
