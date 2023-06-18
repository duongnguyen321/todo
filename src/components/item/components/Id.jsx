import React from "react";

export default function Id({ id, idStyle, setTask, toast}) {
  return (
    <td
      className={idStyle}
      onDoubleClick={() => {
        setTask((prev) => {
          return prev.filter((item) => item.id !== id);
        });
        toast("Task deleted!", "error");
      }}
    >
      {id}
    </td>
  );
}
