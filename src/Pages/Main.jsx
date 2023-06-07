import React, { useState, useEffect } from "react";
import TaskList from "../components/list/TaskList";
import TaskForm from "../components/form/TaskForm";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main() {
  const [task, setTask] = useState([]);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (hasChanges) {
        event.preventDefault();
        localStorage.setItem("task", JSON.stringify(task));
        event.returnValue = "";
      }
    };

    const handleOnline = () => {
      const storedTask = localStorage.getItem("task");
      if (storedTask) {
        setTask(JSON.parse(storedTask));
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("online", handleOnline);
    };
  }, [task, hasChanges]);

  useEffect(() => {
    const storedTask = localStorage.getItem("task");
    if (storedTask) {
      setTask(JSON.parse(storedTask));
    }
  }, []);
  const isOnline = navigator.onLine;

  useEffect(() => {
    !isOnline &&
      toast.warn("Không có kết nối mạng. Đang sử dụng dữ liệu lưu trữ cục bộ!");
  }, [isOnline]);
  const handleTaskChange = () => {
    setHasChanges(true);
  };

  return (
    <>
      <TaskList task={task} setTask={setTask} onTaskChange={handleTaskChange} />
      <TaskForm setTask={setTask} onTaskChange={handleTaskChange} />
      <ToastContainer theme="dark" />
    </>
  );
}
