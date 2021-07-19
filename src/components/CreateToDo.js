import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import randomColor from "../helpers/randomColor";
import "./CreateToDo.css";

const CreateToDo = ({ taskInfo, eraseData, updateData }) => {
  const { id, isCompleted, student, task } = taskInfo;
  const [checked, setChecked] = useState(isCompleted);

  //UpdateData
  const onCheck = () => {
    const dataEdited = {
      id,
      task,
      student,
      isCompleted: !checked,
      version: 0,
    };

    updateData(dataEdited);
  };

  //TextDecoration
  const textDecoration = checked ? (
    <article className="todo">
      <p
        style={{
          textDecoration: "line-through",
          textDecorationThickness: "3px",
        }}
      >
        Task: {task}
      </p>
      <p
        style={{
          textDecoration: "line-through",
          textDecorationThickness: "3px",
        }}
      >
        Student: {student}
      </p>
    </article>
  ) : (
    <article className="todo">
      <p>Task: {task}</p>
      <p>Student: {student}</p>
    </article>
  );

  return (
    <div className="task" style={{ backgroundColor: randomColor() }}>
      {textDecoration}
      <article className="check-del">
        <ToDoItem
          id={id}
          isCompleted={isCompleted}
          checked={checked}
          setChecked={setChecked}
          eraseData={eraseData}
          onCheck={onCheck}
        />
      </article>
    </div>
  );
};

export default React.memo(CreateToDo);
