import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import { doneStatus, inProgressStatus, pendingStatus } from "../misc/TaskStatusNames";
import AlertDialogEliminar from "./AlertDialogEliminar";


export default function TaskCard({ task }) {
    const { deleteTask, changeTaskState } = useTasks();

    const handleChangeState = (e) => {
        changeTaskState(task.id, e.target.value);
    };

    return (
        // Change the color of the div based on the Color atribute of the task object
        <div className="resultado-busqueda" style={{ backgroundColor: task.color }}>
            <header
                style={{
                display: "flex",
                flexDirection: "row",
                gap: ".4rem",
                alignItems: "center",
                }}
            >
                
                <select
                name="state"
                type="text"
                placeholder="Ej: Salida"
                className="input"
                value={task.state}
                onChange={handleChangeState} // Change
                >
                    <option value={pendingStatus}>{pendingStatus}</option>
                    <option value={inProgressStatus}>{inProgressStatus}</option>
                    <option value={doneStatus}>{doneStatus}</option>
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

                    <Link to={`/task/edit/${task.id}`} className="btn btn-azul">
                        Editar
                    </Link>
                </div>
            </header>

            <p style={{ marginRight: "1rem", fontSize: "16px" }}>
                {task.expirationDate && (
                    <p style={{ marginRight: "1rem", fontSize: "16px" }}>
                        <span style={{ fontWeight: "500" }}>Due date:</span> {new Date(task.expirationDate).toDateString()}
                    </p>
                )}
            </p>
        </div>
    );
}