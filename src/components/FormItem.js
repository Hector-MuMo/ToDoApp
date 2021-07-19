import React from "react";
import "./FormItem.css";

const FormItem = ({ register, handleSubmit, createData }) => {
  return (
    <form className="form" onSubmit={handleSubmit(createData)}>
      <div>
        <label>
          Task to Do:
          <input type="text" {...register("task", { require: true })} />
        </label>
        <label>
          Student:
          <input type="text" {...register("student", { require: true })} />
        </label>
        <button className="send-task" type="submit">
          Send Task
        </button>
      </div>
    </form>
  );
};

export default FormItem;
