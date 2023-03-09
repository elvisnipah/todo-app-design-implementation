import React from "react";

function TodoFilter() {
  return (
    <section className="bg-white mx-6 rounded-lg flex items-center justify-center gap-6 p-4 text-gray-400 font-bold">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </section>
  );
}

export default TodoFilter;
