import React from "react";
import { Navbar, TodoBoard } from "./components/index";

function App() {
  return (
    <div className="flex min-h-screen justify-start items-center flex-col text-[#f0fffd]">
      <Navbar />
      <TodoBoard />
    </div>
  );
}

export default App;
