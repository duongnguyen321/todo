import React from "react";

export default function Title({
  title,
  titleStyle,
  id,
  setTask,
  toast,
  edit,
  setEdit,
}) {
  return (
    <td
      className={titleStyle}
      onClick={() => {
        setEdit(true);
        toast("Task edited!", "info");
      }}
      onDoubleClick={() => {
        setEdit(true);
        toast("Task edited!", "info");
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
                      typeof item.id === "string" && item.id.includes("-Empty")
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
            toast("Task edited!", "info");
          }
        });
      }}
      contentEditable={edit}
      suppressContentEditableWarning={true}
    >
      {title}
    </td>
  );
}
