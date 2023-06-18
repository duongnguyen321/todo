import React, { useState } from "react";
import itemStyle from "./item.module.css";
import Id from "./components/Id";
import Title from "./components/Title";
import Complete from "./components/Complete";

export default function TaskItem({ id, title, completed, setTask, toast }) {
  const { bodylist, idStyle, titleStyle, completeStyle } = itemStyle;
  const [edit, setEdit] = useState(false);

  return (
    <tr className={bodylist}>
      <Id id={id} idStyle={idStyle} setTask={setTask} toast={toast} />
      <Title
        title={title}
        titleStyle={titleStyle}
        id={id}
        setTask={setTask}
        toast={toast}
        edit={edit}
        setEdit={setEdit}
      />
      <Complete
        completed={completed}
        completeStyle={completeStyle}
        id={id}
        setTask={setTask}
        toast={toast}
      />
    </tr>
  );
}
