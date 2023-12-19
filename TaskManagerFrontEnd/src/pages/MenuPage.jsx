import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import BarraBusqueda from "../components/BarraBusqueda";
import "../styles/busqueda.css";

export default function ItemsPage() {
  const { getTaskByName, getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <h1 className="search-page-title">
        Search Tasks
      </h1>
      <BarraBusqueda placeholder="Search by name" route="/add_task" searchMethod={getTaskByName} refillMethod={getTasks} />
      <div className="container-resultados">
        <h2 style={{ fontSize: "26px" }}>Tasks.</h2>

        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </>
  );
}