import axios from "./axios";

export const registerRequest = (user) => axios.post("/user/register", user);

export const loginRequest = (user) => axios.get("/user/login", user);

export const verifyTokenRequest = () => axios.get("/user/verify");
