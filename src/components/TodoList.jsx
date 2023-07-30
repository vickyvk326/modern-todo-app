import { useContext, useState } from "react";
import { TodoContext } from "../App";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [newTaskName, setnewTaskName] = useState("");
  const handleToggleEdit = (editIndex) => {
    setTodos(
      todos.map((todo, index) => ({
        task: todo.task,
        isDone: todo.isDone,
        isEditing: editIndex === index ? !todo.isEditing : todo.isEditing,
      }))
    );
  };
  const handleSave = (newName, saveIndex) => {
    setTodos(
      todos.map((todo, index) => ({
        task:
          index === saveIndex
            ? newName !== ""
              ? newName
              : todo.task
            : todo.task,
        isDone: todo.isDone,
        isEditing: index === saveIndex ? !todo.isEditing : todo.isEditing,
      }))
    );
    setnewTaskName("");
  };
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
          {eachTask.isEditing ? (
            <div className="edit-field">
              <input
                className="edit-input"
                type="text"
                defaultValue={eachTask.task}
                onChange={(e) => setnewTaskName(e.target.value)}
              />
              <button
                onClick={() => handleSave(newTaskName, index)}
                className="save-button"
              >
                save
              </button>
            </div>
          ) : (
            <p
              onClick={() => handleComplete(index)}
              className="task"
              style={{ textDecoration: eachTask.isDone && "line-through" }}
            >
              {eachTask.task}
            </p>
          )}
          <button
            title="edit"
            className="button fade-in edit-toggle-button"
            onClick={() => handleToggleEdit(index)}
          >
            ✎
          </button>
          <button
            title="Completed"
            className="completeButton button fade-in"
            onClick={() => handleComplete(index)}
          >
            ✓
          </button>
          <button
            title="delete"
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
