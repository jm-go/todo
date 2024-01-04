import "./main.scss";
import Navbar from "./components/Navbar/Navbar";
import AddItem from "./components/AddItem/AddItem";
import List from "./components/List/List";
import { useState } from "react";

// Define the type for the task
type Task = {
  id: number;
  content: string;
};

const App = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  // State to keep track of the ID of the new task
  const [taskId, setTaskId] = useState<number>(0);

  // Function to handle adding a new task
  const handleAddTask = (taskContent: string) => {
    // New task is created as an object and the list of tasks is updated.
    const newTask = {
      id: taskId,
      content: taskContent,
    };
    setTasks([...tasks, newTask]);
    setTaskId(taskId + 1);
  };

  // Delete a task based on its ID
  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Reset the list of tasks
  const handleResetTasks = () => {
    setTasks([]);
    setTaskId(0);
  };

  return (
    <>
      <Navbar onReset={handleResetTasks} />
      <div className="main">
        <AddItem onAdd={handleAddTask} />
        <List tasks={tasks} onDelete={handleDeleteTask} />
      </div>
    </>
  );
};

export default App;
