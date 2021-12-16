import React, { useState } from "react";
import useForm from "../hooks/useForm";

export const SendMessage = () => {
  const [formValues, handleInputChange, reset] = useForm({
    mensaje: "",
  });

  const { mensaje } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (mensaje.trim().length === 0) return;
    console.log("enviar");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            name="mensaje"
            className="write_msg"
            placeholder="Mensaje..."
            value={mensaje}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};
