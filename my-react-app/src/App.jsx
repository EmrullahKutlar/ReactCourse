import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newTask != null && newTask != undefined && newTask != "") {
      // const newTodoList = [...todoList, newTask];
      // setTodoList(newTodoList);
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        name: newTask,
        isComplete: false,
      };
      setTodoList([...todoList, task]);
      setNewTask("");
    }
  };
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((element) => element.id != id);
    setTodoList(newTodoList);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (id == task.id) {
          return { ...task, isComplete: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App ">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6   my-5 ">
            <div className="input-group">
              <input
                type="text"
                value={newTask}
                className="form-control 1"
                placeholder="Add new task"
                onChange={handleChange}
              />
              <button className="btn btn-success" onClick={addTask}>
                Add Task
              </button>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="List col-12 col-md-6 ">
              <ul className="list-group">
                {todoList.map((task, index) => {
                  return (
                    <Task
                      key={index}
                      task={task}
                      deleteTask={deleteTask}
                      completeTask={completeTask}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
