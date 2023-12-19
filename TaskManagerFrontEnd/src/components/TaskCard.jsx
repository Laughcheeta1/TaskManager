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
        <div className="resultado-busqueda">
            <header
                style={{
                display: "flex",
                flexDirection: "row",
                gap: ".4rem",
                alignItems: "center",
                }}
            >
                
                <label htmlFor="state">State:</label>
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