import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import "./ToDoItem.css";
import { Checkbox } from "pretty-checkbox-react";

import "@djthoms/pretty-checkbox";

const ToDoItem = ({
  id,
  isCompleted,
  checked,
  setChecked,
  eraseData,
  onCheck,
}) => {
  return (
    <>
      {isCompleted ? (
        <Checkbox
          color="success"
          hasFocus
          shape="fill"
          animation="tada"
          icon={<i className="fas fa-check"></i>}
          type="checkbox"
          onChange={() => {
            setChecked(!checked);
            onCheck();
          }}
          defaultChecked={isCompleted}
        />
      ) : (
        <Checkbox
          color="success"
          hasFocus
          shape="fill"
          animation="tada"
          icon={<i className="fas fa-check"></i>}
          type="checkbox"
          onChange={() => {
            setChecked(!checked);
            onCheck();
          }}
        />
      )}
      <button onClick={(e) => eraseData(id)}>
        <RiDeleteBin2Fill />
      </button>
    </>
  );
};

export default React.memo(ToDoItem);
