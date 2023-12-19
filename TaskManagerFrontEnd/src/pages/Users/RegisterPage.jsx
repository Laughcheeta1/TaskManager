import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import "../../styles/auth.css";

function RegisterPage() {
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (value) => {
    await signUp(value);
    
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/task_page");
  }, [isAuthenticated]);

  return (
    <div className="body">
      <div className="auth-container">
        {registerErrors.map((error, i) => (
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
                marginBottom: "1rem",
              }}
            >
              Create account
            </h1>
            <p style={{ fontSize: "14px" }}>
              Create your account to be able to access{" "}
              <span style={{ fontWeight: "600" }}>Task Manager</span>
            </p>
          </div>

          <label className="input-label" htmlFor="username">
            Username:
            {errors.username?.message && (
              <p style={{ marginLeft: "1rem" }} className="input-errors">
                {errors.username?.message}
              </p>
            )}
          </label>

          <input
            type="text"
            name="username"
            {...register("userName")}
            className="auth-input"
            placeholder="username"
          />

          <label className="input-label" htmlFor="email">
            Email:
            {errors.email?.message && (
              <p style={{ marginLeft: "1rem" }} className="input-errors">
                {errors.email?.message}
              </p>
            )}
          </label>

          <input
            type="email"
            name="email"
            {...register("email")}
            className="auth-input"
            placeholder="email"
          />

          <label className="input-label" htmlFor="password">
            Password:
            {errors.password?.message && (
              <p style={{ marginLeft: "1rem" }} className="input-errors">
                {errors.password?.message}
              </p>
            )}
          </label>

          <input
            type="password"
            name="password"
            {...register("password")}
            className="auth-input"
            placeholder="password"
          />

          <label className="input-label" htmlFor="confirmPassword">
            Confirm password:
            {errors.confirmPassword?.message && (
              <p style={{ marginLeft: "1rem" }} className="input-errors">
                {errors.confirmPassword?.message}
              </p>
            )}
          </label>

          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword")}
            className="auth-input"
            placeholder="confirm password"
          />

          <button
            style={{ width: "100%", marginTop: "1rem", padding: "0" }}
            className="btn btn-verde"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
