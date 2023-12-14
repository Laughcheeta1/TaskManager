import axios from "axios";

export const getAllItems = async () => axios.get("/tasks");