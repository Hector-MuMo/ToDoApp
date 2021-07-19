import React, { useState, useEffect } from "react";
import FormItem from "./FormItem";
import { useForm } from "react-hook-form";
import Filters from "./Filters";
import CreateToDo from "./CreateToDo";
import {
  getRead,
  postCreate,
  deleteData,
  putUpdate,
} from "../helpers/RequestHttp";

const ToDoContainer = () => {
  const { register, handleSubmit, reset } = useForm();
  const [db, setDb] = useState(null);
  const [filters, setFilters] = useState("");
  const [listTasks, setListTasks] = useState([]);

  //Filters
  useEffect(() => {
    if (filters === "all") {
      setListTasks(
        db.map((t) => (
          <CreateToDo
            key={t.id}
            taskInfo={t}
            eraseData={eraseData}
            updateData={updateData}
          />
        ))
      );
    } else if (filters === "completed") {
      setListTasks(
        db.map((t) =>
          t.isCompleted ? (
            <CreateToDo
              key={t.id}
              taskInfo={t}
              eraseData={eraseData}
              updateData={updateData}
            />
          ) : (
            false
          )
        )
      );
    } else if (filters === "pending") {
      setListTasks(
        db.map((t) =>
          !t.isCompleted ? (
            <CreateToDo
              key={t.id}
              taskInfo={t}
              eraseData={eraseData}
              updateData={updateData}
            />
          ) : (
            false
          )
        )
      );
    } else if (db === []) {
      setListTasks(<h2>Add a new Task!</h2>);
    } else if (db) {
      setListTasks(
        db.map((t) => (
          <CreateToDo
            key={t.id}
            taskInfo={t}
            eraseData={eraseData}
            updateData={updateData}
          />
        ))
      );
    } else {
      setListTasks(<div className="lds-hourglass"></div>);
    }
  }, [filters, db]);

  //GetData
  useEffect(() => {
    const getData = async () => {
      const tasks = await getRead();
      setDb(tasks.todos);
    };

    getData();
  }, []);

  //PostData
  const setData = (data) => {
    const newData = {
      ...data,
      isCompleted: false,
      version: 0,
    };

    const asignData = async () => {
      const task = await postCreate(newData);
      setDb((prevStat) => [task, ...prevStat]);
    };

    asignData();
    reset();
  };

  //DeleteData
  const eraseData = (id) => {
    const erase = async () => {
      await deleteData(id);

      setDb((prevStat) => prevStat.filter((e) => e.id !== id));
    };

    erase();
  };

  //PutData
  const updateData = (data) => {
    const update = async () => {
      const dataEdited = await putUpdate(data);
      setDb((prevState) =>
        prevState.map((val) => {
          if (val._id === dataEdited.id) {
            return dataEdited;
          }
          return val;
        })
      );
    };

    update();
  };

  return (
    <div className="todo-container">
      <section className="form-container">
        <h1>ToDo App</h1>
        <FormItem
          register={register}
          handleSubmit={handleSubmit}
          createData={setData}
        />
      </section>
      <section className="tasks-filter-container">
        <Filters filters={setFilters} />
        <div className="tasks-container">{listTasks}</div>
      </section>
    </div>
  );
};

export default React.memo(ToDoContainer);
