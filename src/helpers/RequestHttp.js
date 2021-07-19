import axios from "axios";

export const getRead = async () => {
  const tasks = await axios({
    method: "GET",
    baseURL: "https://todos-go.herokuapp.com/api",
    url: "/todos",
  });

  return tasks.data;
};

export const postCreate = async (info) => {
  const task = await axios({
    method: "POST",
    baseURL: "https://todos-go.herokuapp.com/api",
    url: "/todos",
    data: info,
  });

  return task.data;
};

export const deleteData = async (id) => {
  const task = await axios({
    method: "DELETE",
    baseURL: "https://todos-go.herokuapp.com/api",
    url: `/todos/${id}`,
  });

  return task.data;
};

export const putUpdate = async (info) => {
  const task = await axios({
    method: "PUT",
    baseURL: "https://todos-go.herokuapp.com/api",
    url: `/todos/${info.id}`,
    data: info,
  });

  return task.data;
};
