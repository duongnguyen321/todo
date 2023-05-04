import React, { useState, useEffect } from "react";
import TaskList from "../components/list/TaskList";
import TaskForm from "../components/form/TaskForm";

export default function Main() {
  const [task, setTask] = useState([]);
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      localStorage.setItem("task", JSON.stringify(task));
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [task]);
  useEffect(() => {
    const storedTask = localStorage.getItem("task");
    if (storedTask) {
      setTask(JSON.parse(storedTask));
    }
  }, []);
  return (
    <>
      <TaskList task={task} setTask={setTask} />
      <TaskForm setTask={setTask} />
    </>
  );
}
