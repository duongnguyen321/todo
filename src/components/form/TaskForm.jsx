import React, { useEffect, useRef } from "react";
import formStyle from "./form.module.css";
export default function TaskForm({ setTask, toast }) {
  const { form, input } = formStyle;
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 100000),
      title: inputRef.current.value.trim(),
      completed: false,
    };
    if (task.title.length >= 3) {
      setTask((prev) => [...prev, task]);
    } else {
      task.title = "Empty task";
      task.id = `${Math.floor(Math.random() * 100)}-Empty`;
      setTask((prev) => [...prev, task]);
    }
    inputRef.current.value = "";
    toast("Task added!", "success");
  };
  return (
    <form className={form} onSubmit={handleSubmit}>
      <input className={input} placeholder="Enter the task!" ref={inputRef} />
    </form>
  );
}
