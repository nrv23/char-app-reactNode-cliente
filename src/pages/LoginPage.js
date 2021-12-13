import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import useForm from "../hooks/useForm";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [formValues, handleInputChange, reset, setFormValues] = useForm({
    email: "",
    password: "",
    rememberMe: true,
  });

  const { email, password, rememberMe } = formValues;

  const toggleCheck = () => {
    setFormValues({
      ...formValues,
      rememberMe: !rememberMe,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setFormValues((formValues) => ({
        // devolver el estado actual, sin neesidad de agregar esa dependencia
        ...formValues,
        rememberMe: true,
        email: localStorage.getItem("email") || "",
      }));
    }
  }, [setFormValues]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem("email", email);
    } else {
      localStorage.clear();
    }

    const ok = await login(email, password);

    if (ok) {
    } else {
      Swal.fire(
        "Iniciar sesión",
        "Verifique sus datos de autenticación",
        "warning"
      );
    }
  };

  const habilitarLogin = () =>
    email.trim().length > 6 && password.trim().length >= 6;

  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={handleSubmit}
    >
      <span className="login100-form-title mb-3">Chat - Ingreso</span>

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
        <div className="col" onClick={() => toggleCheck()}>
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberMe"
            checked={rememberMe}
            readOnly
          />
          <label className="label-checkbox100">Recordarme</label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button className="login100-form-btn" disabled={!habilitarLogin()}>
          Ingresar
        </button>
      </div>
    </form>
  );
};
