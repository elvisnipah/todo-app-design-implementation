import Header from "./components/Header";
import TodoSection from "./components/todo/TodoSection";
import { DarkModeProvider } from "./context/DarkModeContext";

import Container from "./components/ui/Container";

function App() {
  return (
    <DarkModeProvider>
      <div id="app">
        <Container>
          <Header />
          <TodoSection />
        </Container>
      </div>
    </DarkModeProvider>
  );
}

export default App;
