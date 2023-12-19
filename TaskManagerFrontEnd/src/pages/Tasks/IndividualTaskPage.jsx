import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTasks } from "../../context/TasksContext";
import { useParams } from "react-router-dom";
import "../../styles/infoPage.css";
import "./taskInfoPage.css";
import LoadingScreen from "../../components/LoadingScreen";

export default function IndividualTaskPage() {
  const params = useParams();
  const { getTaskById } = useTasks();
  const [task, setTask] = useState(null);

  useEffect(() => {
    try {
      const loadTask = async () => {
        const taskInfo = await getTaskById(params.id);
        console.log(taskInfo);
        setTask(() => taskInfo);
      };

      loadTask();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
        {task ? (
            <>
            <div className="title">
                <span
                style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    marginInline: "1rem",
                }}
                >
                {task.name}
                </span>
            </div>

            <div className="container-info">
                <h1 className="container-title-info">
                <Link to={"/task_page"} className="btn btn-azul">
                    Go Back
                </Link>
                </h1>

                <div className="info">
                <div className="info-column">
                    <div className="details container">
                    <div className="two-columns-container">
                        <div className="column">
                        <p className="text">
                            Category :{" "}
                            <span>{task.receiver}</span>
                        </p>

                        <p className="text">
                            Expiration Date :{" "}
                            <span>{new Date(task.expirationDate).toDateString()}</span>
                        </p>

                        <p className="text">
                            Status :{" "}
                            <span>{task.state}</span>
                        </p>

                        <p className="text">
                            Colour: <span>{task.colour}</span>
                        </p>
                        </div>

                        <div className="column">
                        <p className="text">
                            Description : <span>{task.description}</span>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <hr
                style={{
                    border: "solid .5px #B5B2BC",
                    marginBottom: "1.5rem",
                    marginInline: "1.5  rem",
                }}
                />
            </div>
            </>
        ) : (
            <LoadingScreen />
        )}
    </div>
  );
}