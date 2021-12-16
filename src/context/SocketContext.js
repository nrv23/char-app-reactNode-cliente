import React, { createContext, useContext, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { types } from "../types";
import { AuthContext } from "./AuthContext";
import { ChatContext } from "./chat/ChatContext";

export const SocketContext = createContext();

//exportar el provider

export const SocketProvider = ({ children }) => {
  const { online, socket, conectarSocket, desconectarSocket } = useSocket(
    "http://localhost:8081"
  );

  const { dispatch } = useContext(ChatContext);
  const {
    auth: { logged },
  } = useContext(AuthContext);
  useEffect(() => {
    if (logged) {
      // si la persona se ha logueado entonces el socket se conecta con el servidor
      conectarSocket(); // como la funcion esta memorizada  siempre va renderizar la misma instancia de la funcion de conectarSocket
    }
  }, [logged, conectarSocket]);

  useEffect(() => {
    if (!logged) {
      // si la persona ha cerrado sesion, el socket se desconecta del servidor

      desconectarSocket(); // como la funcion esta memorizada  siempre va renderizar la misma instancia de la funcion de conectarSocket

      //lista-usuarios
    }
  }, [logged, desconectarSocket]);

  useEffect(() => {
    socket?.on("lista-usuarios", (data) => {
      dispatch({
        type: types.usuariosCargados,
        payload: data,
      });
    });
  }, [socket, dispatch]);
  return (
    <SocketContext.Provider value={{ online, socket }}>
      {children}
      {/** Propiedad que permite proveer la informacion del context a los componentes hijos que rodea */}
    </SocketContext.Provider>
  );
};
