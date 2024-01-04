import "./main.scss";
import Navbar from "./components/Navbar/Navbar";
import AddItem from "./components/AddItem/AddItem";
import List from "./components/List/List";
import { useState } from "react";

type Task = {
  id: number;
  name: string;
};

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskId, setTaskId] = useState<number>(0);

  const handleAddTask = (taskName: string) => {
    const newTask = {
      id: taskId,
      name: taskName,
    };
    setTasks([...tasks, newTask]);
    setTaskId(taskId + 1);
  };

  // Delete a task
  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Reset the tasks
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
