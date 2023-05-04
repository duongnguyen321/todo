import React, { useState } from "react";
import itemStyle from "./item.module.css";

export default function TaskItem({ id, title, completed, setTask }) {
  const { bodylist, idStyle, titleStyle, completeStyle } = itemStyle;
  const [edit, setEdit] = useState(false);

  return (
    <tr className={bodylist}>
      <td
        className={idStyle}
        onDoubleClick={() => {
          setTask((prev) => {
            return prev.filter((item) => item.id !== id);
          });
        }}
      >
        {id}
      </td>
      <td
        className={titleStyle}
        onClick={() => {
          setEdit(true);
        }}
        onDoubleClick={() => {
          setEdit(true);
        }}
        onBlur={(e) => {
          setEdit((prev) => {
            if (prev) {
              setTask((prev) => {
                return prev.map((item) => {
                  if (item.id === id) {
                    return {
                      ...item,
                      id:
                        typeof item.id === "string" &&
                        item.id.includes("-Empty")
                          ? `${item.id.replace("-Empty", "")}${Math.floor(
                              Math.random() * 1000
                            )}`
                          : item.id,
                      title: e.target.innerText || item.title,
                    };
                  } else {
                    return item;
                  }
                });
              });
            }
          });
        }}
        contentEditable={edit}
        suppressContentEditableWarning={true}
      >
        {title}
      </td>
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
        }}
      >
        {completed ? "Completed" : "Not Completed"}
      </td>
    </tr>
  );
}
