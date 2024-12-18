import { useState } from "react";

function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>My Todo App</h1>
        <input
          type="text"
          placeholder="Type a new todo"
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="add-button" onClick={addTask}>
          Add Todo
        </button>
        <hr />
      </div>
      <div className="list-items">
        <h2>Todos</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" />
                {task}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
