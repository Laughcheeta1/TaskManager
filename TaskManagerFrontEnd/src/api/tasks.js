import axios from "./axios";

export const getTaskByNameRequest = async (name) => axios.get(`/task/getTaskByName/${name}`);

export const getAllTasksRequest = async () => axios.get("/task");

export const getTaskRequest = async (id) => axios.get(`/task/${id}`);

export const changeTaskStateRequest = async (id, newState) => axios.put(`/task/changeState/${id}/state/${newState}`)

export const createTaskRequest = async (task) => axios.post("/task", task);

export const updateTaskRequest = async (id, task) => axios.put(`/task/${id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/task/${id}`);