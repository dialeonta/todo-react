import React from "react";
import { AppUI } from "./components/AppUI";
import { TodoProvider } from "./context";

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;