import axios from "./axios";

export const getTaskByNameRequest = async (name, userName) => axios.get(`/task/user/${userName}/getTaskByName/${name}`);

export const getAllTasksRequest = async (userName) => axios.get(`/task/user/${userName}`);

export const getTaskRequest = async (id, userName) => axios.get(`/task/user/${userName}/task/${id}`);

export const changeTaskStateRequest = async (id, newState) => axios.put(`/task/changeState/${id}/state/${newState}`)

export const createTaskRequest = async (task) => axios.post("/task", task);

export const updateTaskRequest = async (id, task) => axios.put(`/task/${id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/task/${id}`);