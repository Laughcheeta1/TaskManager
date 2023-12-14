import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { loginSchema } from "../../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import "../../styles/auth.css";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) navigate("/menu");
  }, [isAuthenticated]);

  return (
    <div className="body">
      <div className="auth-container">
        {signinErrors.map((error, i) => (
          <div className="container-error" key={i}>
            {error}
          </div>
        ))}

        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-title">
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "600",
                marginBottom: ".6rem",
              }}
            >
              Bienvenido de nuevo.
            </h1>
            <p style={{ fontSize: "14px" }}>
              Aquí podras consultar toda la información de{" "}
              <span style={{ fontWeight: "600" }}>Espacios Móviles S.A.S.</span>
            </p>
          </div>

          <label className="input-label" htmlFor="email">
            Correo:
            <p style={{ marginLeft: "1rem" }} className="input-errors">
              {errors.email?.message}
            </p>
          </label>

          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className="auth-input"
            placeholder="Correo electrónico"
          />

          <label className="input-label">
            Contraseña:
            <p style={{ marginLeft: "1rem" }} className="input-errors">
              {errors.password?.message}
            </p>
          </label>

          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
            className="auth-input"
            placeholder="Contraseña"
          />

          <button
            style={{ width: "100%", marginTop: "1rem", padding: "0" }}
            type="submit"
            className="btn btn-azul"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
