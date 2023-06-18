import React, { useState, useEffect } from "react";
import TaskList from "../components/list/TaskList";
import TaskForm from "../components/form/TaskForm";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (task) {
        event.preventDefault();
        localStorage.setItem("task", JSON.stringify(task));
        event.returnValue = "";
      }
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
  const toastify = (message, type) => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        toast.info(message);
        break;
    }
  };

  return (
    <>
      <TaskList task={task} setTask={setTask} toast={toastify} />
      <TaskForm setTask={setTask} toast={toastify} />
      <ToastContainer theme="dark" />
    </>
  );
}
