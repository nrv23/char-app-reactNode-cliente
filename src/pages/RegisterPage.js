import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import useForm from "../hooks/useForm";

export const RegisterPage = () => {
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    email: "",
    password: "",
  });

  const { register } = useContext(AuthContext);
  const { email, nombre, password } = formValues;

  const habilitarRegistro = () => {
    return (
      nombre.trim().length >= 5 &&
      password.trim().length >= 6 &&
      email.trim().length >= 6
    );
  };

  const handleSumit = async (e) => {
    e.preventDefault();

    const ok = await register(email, password, nombre);
    if (ok) {
      console.log("usuario agregado");
    } else {
      Swal.fire(
        "Iniciar sesión",
        "Verifique la información que está intentando ingresar",
        "warning"
      );
    }
  };
  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={handleSumit}
    >
      <span className="login100-form-title mb-3">Chat - Registro</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={handleInputChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          className="login100-form-btn"
          disabled={!habilitarRegistro()}
          type="submit"
        >
          Crear cuenta
        </button>
      </div>
    </form>
  );
};
