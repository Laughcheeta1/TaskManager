import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { taskSchema } from "../../schemas/task";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import AlertDialogCrear from "../../components/AlertDialogCrear";
import { availableColours } from "../../misc/AvailableColours";

import "../../styles/formPage.css";

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const { createTask, errors: taskErrors } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const onSubmit = async (data) => {
    if (!params.id) {
      await createTask(data);
      setWasSubmitted(true);
    }
  };

  useEffect(() => {
    if (wasSubmitted && taskErrors.length === 0) return navigate("/items");
    setWasSubmitted(false);
  }, [taskErrors, wasSubmitted]);

  return (
    <>
      <div className="container-form">
        {taskErrors.map((error, i) => (
          <div className="container-error" key={i}>
            {error}
          </div>
        ))}

        <h2
          style={{ fontSize: "32px", fontWeight: 600, marginBottom: "2.5rem" }}
        >
          Add new task.
        </h2>

        <form>
          <div className="group">
            {errors.name?.message ? <p>{errors.name?.message}</p> : null}

            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="ej: Go to the dentist"
                autoFocus
                className="input"
                {...register("name", { required: true })}
              />
            </div>
          </div>


            <div className="group">
                {errors.category?.message ? <p>{errors.category?.message}</p> : null}

                <div className="input-group">
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        name="category"
                        placeholder="ej: Medical"
                        className="input"
                        {...register("category", { required: false })}
                    />
                </div>
            </div>

            <div className="group">
                {errors.expirationDate?.message ? <p>{errors.expirationDate?.message}</p> : null}

                <div className="input-group">
                    <label htmlFor="expirationDate">Expiration Date:</label>
                    <input
                        type="text"
                        name="expirationDate"
                        placeholder="ej: DD-MM-YYYY"
                        className="input"
                        {...register("expirationDate", { required: false })}
                    />
                </div>
            </div>

            <div className="group">
                {errors.state?.message ? <p>{errors.state?.message}</p> : null}

                <div className="input-group">
                    <label htmlFor="expirationDate">State:</label>
                    <select
                    name="state"
                    type="text"
                    className="input"
                    {...register("colour", { required: true })}
                    defaultValue={availableColours[0]}
                    >
                        {availableColours.map((colour) => (
                            <option key={colour} value={colour}>
                                {colour}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="group">
                {errors.description?.message ? <p>{errors.description?.message}</p> : null}

                <div className="input-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="ej: At the dentist's office located in ..."
                        className="input"
                        {...register("description", { required: false })}
                    />
                </div>
            </div>

          <div className="group">
            {errors.expirationDate?.message ? (
              <p>{errors.expirationDate?.message}</p>
            ) : null}

            <div className="input-group">
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                type="date"
                name="expirationDate"
                className="input"
                {...register("expirationDate", { required: true })}
              />
            </div>
          </div>

          

          <div style={{ marginTop: "1rem" }} className="container-group">
            <AlertDialogCrear
              buttonMessage="Guardar ítem"
              descriptionMessage="Se guardará un nuevo ítem con la información que ingresaste"
              onSubmit={handleSubmit(onSubmit)}
            />

            <Link
              style={{ width: "100%" }}
              className="btn btn-gris"
              to="/items"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
