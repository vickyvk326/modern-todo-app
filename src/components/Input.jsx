import { useContext, useRef, useState } from "react";
import { TodoContext } from "../App";

const Input = () => {
  const inputRef = useRef(null);
  const { todos, setTodos } = useContext(TodoContext);
  const [newTaskName, setnewTaskName] = useState("");
  const addTodo = (newTaskName) => {
    setTodos([
      ...todos,
      { task: newTaskName, isDone: false, isEditing: false },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTaskName) return;
    addTodo(newTaskName);
    console.log(todos);
    setnewTaskName("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <h4>Add Todo</h4>
      <input
        ref={inputRef}
        placeholder="Add new todo"
        className="addTodoinput"
        type="text"
        onChange={(e) => setnewTaskName(e.target.value)}
      />
      <button className="addTodoButton" onClick={handleSubmit}>
        Add task
      </button>
    </div>
  );
};

export default Input;
