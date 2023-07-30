import { createContext, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

export const TodoContext = createContext();
const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app slide-in-top">
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Todo List</h1>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <Input />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
