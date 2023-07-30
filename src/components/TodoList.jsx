import { useContext } from "react";
import { TodoContext } from "../App";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const handleComplete = (completeIndex) => {
    setTodos(
      todos.map((todo, index) => ({
        task: todo.task,
        isDone: index === completeIndex ? !todo.isDone : todo.isDone,
      }))
    );
  };
  const handleRemove = (removeIndex) => {
    setTodos(todos.filter((todo, index) => index !== removeIndex));
  };
  return (
    <div style={{ marginTop: "5px" }}>
      {todos.map((eachTask, index) => (
        <div className="each-task scale-in-left" key={index}>
          <p
            className="task"
            style={{ textDecoration: eachTask.isDone && "line-through" }}
          >
            {eachTask.task}
          </p>
          <button
            className="completeButton button fade-in"
            onClick={() => handleComplete(index)}
          >
            ✓
          </button>
          <button
            className="deleteButton button fade-in"
            onClick={() => handleRemove(index)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
