import React from "react";
import TaskItem from "../item/TaskItem";
import listStyle from "./list.module.css";
export default function TaskList({ task, setTask, toast }) {
  const { table, head, headlist, body } = listStyle;
  return (
    <table className={table}>
      <thead className={head}>
        <tr className={headlist}>
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className={body}>
        {task.map((item) => {
          return (
            <TaskItem key={item.id} {...item} setTask={setTask} toast={toast} />
          );
        })}
      </tbody>
    </table>
  );
}
