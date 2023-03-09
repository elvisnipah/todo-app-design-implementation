import Header from "./components/Header";
import TodoItem from "./components/todo/TodoItem";
import TodoSection from "./components/todo/TodoSection";

function App() {
  return (
    <main id="app" className="bg-gray-50">
      <Header />
      <TodoSection />
    </main>
  );
}

export default App;
