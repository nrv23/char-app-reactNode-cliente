import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { SocketContext } from "../context/SocketContext";
import useForm from "../hooks/useForm";

export const SendMessage = () => {
  
  const { socket} = useContext(SocketContext);
  const { auth: { uid }} = useContext(AuthContext);
  const {chatState:{chatActivo}} = useContext(ChatContext);
  const [formValues, handleInputChange, reset] = useForm({
    mensaje: "",
  });

  const { mensaje } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (mensaje.trim().length === 0) return;


    socket.emit('mensaje-personal', {
      de: uid,
      para: chatActivo,
      mensaje
    });

    reset();
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
