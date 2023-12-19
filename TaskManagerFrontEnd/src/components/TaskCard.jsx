import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import { doneStatus, inProgressStatus, pendingStatus } from "../misc/TaskStatusNames";


export default function TaskCard({ task }) {
    const { deleteTask } = useTasks();

    return (
        <div className="resultado-busqueda">
            <header
                style={{
                display: "flex",
                flexDirection: "row",
                gap: ".4rem",
                alignItems: "center",
                }}
            >
                
                <label htmlFor="action">Acción:</label>
                <select
                name="action"
                type="text"
                placeholder="Ej: Salida"
                className="input"
                {...register("action")}
                >
                    {task.state === pendingStatus ? (
                        <option value={pendingStatus}>{pendingStatus}</option>
                    ) : (
                        <></>
                    )}
                    {task.state === inProgressStatus ? (
                        <option value={inProgressStatus}>{inProgressStatus}</option>
                    ) : (
                        <></>
                    )}
                    {task.state === doneStatus ? (
                        <option value={doneStatus}>{doneStatus}</option>
                    ) : (
                        <></>
                    )}
                </select>

                <h1
                style={{ marginRight: "1rem", fontSize: "18px", fontWeight: "500" }}
                >
                {task.name}
                </h1>

                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                }}
                >
                    <AlertDialogEliminar deleteMethod={deleteTask} objectID={task.id} />

                    <Link to={`/tasks/edit/${task.id}`} className="btn btn-azul">
                        Editar
                    </Link>
                </div>
            </header>

            <p style={{ marginRight: "1rem", fontSize: "16px" }}>
                <span style={{ fontWeight: "500" }}>Due date:</span> {task.expirationDate}
            </p>
        </div>
    );
}