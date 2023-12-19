import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext.jsx";
import { pendingStatus } from "../misc/TaskStatusNames.js";

import {
  getTaskByNameRequest,
  getAllTasksRequest,
  getTaskRequest,
  changeTaskStateRequest,
  createTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from "../api/tasks.js";


const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!TasksContext) throw new Error("useTasks must be inside a TaskProvider");
  return context;
};

export function TasksProvider({ children })
{
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);
  const { user } = useAuth();

  const processTask = (task) => { // This is supposed to process the task after it comes out the Add new task page.
    if (task["expirationDate"])
        task["expirationDate"] = new Date(task["expirationDate"]);
    
    task["userName"] = user.userName;
    task["state"] = pendingStatus;
    return task;
  }


  const getTaskByName = async (name) => {
    try
    {
      const response = await getTaskByNameRequest(name);
      setTasks(response.data);
    }
    catch (error)
    {
      console.log(error);
    }
  };

  const getTasks = async () => {
    try
    {
      const response = await getAllTasksRequest();
      setTasks(response.data);
    }
    catch (error)
    {
      console.log(error);
    }
  };

  const getTaskById = async (id) => {
    try
    {
      const response = await getTaskRequest(id);
      return response.data;
    }
    catch (error)
    {
      console.log(error);
    }
  }

  const createTask = async (task) => {
    task = processTask(task);
    try
    {
      await createTaskRequest(task);
      getTasks();
    }
    catch (error)
    {
      console.log(error);
      setErrors(() => [error.response.data.message]);
    }
  };
  
  const deleteTask = async (id) => {
    try
    {
      await deleteTaskRequest(id);
      setTasks(() => tasks.filter((task) => task.id !== id));
    }
    catch (error)
    {
      console.log(error);
    }
  };

  const changeTaskState = async (id, newState) => {
    try
    {
      await changeTaskStateRequest(id, newState);
      getTasks();
    }
    catch (error)
    {
      console.log(error);
    }
  };

  const updateTask = async (id, newTaskFieds) => {
    try
    {
      await updateTaskRequest(id, newTaskFieds);
      getTasks();
    }
    catch (error)
    {
      setErrors(() => [error.response.data.message]);
      console.log(error);
    }
  };

  useEffect(() => {
    if (errors.length > 0)
    {
      const timer = setTimeout(() => {
        setErrors(() => []);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        getTasks,
        getTaskByName,
        getTaskById,
        changeTaskState,
        createTask,
        deleteTask,
        updateTask,
        errors,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}