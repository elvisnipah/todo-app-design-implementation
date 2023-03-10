import { useState, useEffect } from "react";

import Header from "./components/Header";
import TodoSection from "./components/todo/TodoSection";
import { DarkModeProvider } from "./context/DarkModeContext";

import Container from "./components/ui/Container";

function App() {
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <DarkModeProvider>
      <div id="app">
        <Container>
          <Header windowSize={windowSize} />
          <TodoSection windowSize={windowSize} />
        </Container>
      </div>
    </DarkModeProvider>
  );
}

export default App;
