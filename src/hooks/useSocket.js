import { useState, useEffect, useCallback } from "react";
import { io } from "socket.io-client";

export const useSocket = (serverPath) => {
  //const socket = useMemo(() => io.connect(serverPath, { transports: ["websocket"] }), [serverPath]); //reutilizar la misma conexion de socket mientras el serverPath no cambie, para evitar que se esté instanciando más de una conexión de socket por cliente

  const [online, setonline] = useState(false);
  const [socket, setSocket] = useState(null);

  //memorizar funciones se usa el useCallback, memorizar variables el useMemo
  const conectarSocket = useCallback(() => {
    // devuelve una funcion memorizada que conecta el socket y va renderizar hasta que el serverPtah cambie
    const token = localStorage.getItem("token");
    console.log(token);
    const socketTemp = io.connect(serverPath, {
      transports: ["websocket"],
      autoConnect: true, //mantener siempre conectado
      forceNew: true, // generar siempre una nueva conexion
      query: {
        "x-token": token, // enviar el token por la url de conexion de token
      },
    });
    setSocket(socketTemp);
  }, [serverPath]);

  const desconectarSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);
  useEffect(() => {
    setonline(socket?.connected); //socket?.connected -> propiedad del socket que devuelve un bool si el dipositivo esta conectado al socket en del servidor
  }, [socket]);

  useEffect(() => {
    socket?.on("connect", () => {
      setonline(true);
    });

    socket?.on("disconnect", () => {
      setonline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
    conectarSocket,
    desconectarSocket,
  };
};
