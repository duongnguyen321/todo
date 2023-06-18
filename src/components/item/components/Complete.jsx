import React from "react";

export default function Complete({
  completed,
  completeStyle,
  id,
  setTask,
  toast,
}) {
  return (
    <td
      className={completeStyle}
      onClick={() => {
        setTask((prev) => {
          return prev.map((item) => {
            if (item.id === id) {
              return { ...item, completed: !item.completed };
            } else {
              return item;
            }
          });
        });
        toast(
          `Task ${completed ? "Not Completed" : " Completed"}!`,
          `${completed ? "error" : "success"}`
        );
      }}
    >
      {completed ? "Completed" : "Not Completed"}
    </td>
  );
}
