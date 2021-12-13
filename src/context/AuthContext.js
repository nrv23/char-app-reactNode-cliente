import { createContext, useCallback, useState } from "react";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    try {
      const {
        token,
        usuario: { Online, email: emailUser, nombre, uid },
      } = await fetchSinToken("/auth/", { email, password }, "POST");

      setAuth({
        uid,
        checking: false,
        logged: true,
        name: nombre,
        email: emailUser,
      });
      localStorage.setItem("token", token);

      return true;
    } catch (error) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      console.log(error);
      return false;
    }
  };

  const register = async (email, password, nombre) => {
    // /auth/new

    try {
      const {
        token,
        usuario: { Online, email: emailUser, nombre: nombreUser, uid },
      } = await fetchSinToken("/auth/new", { email, password, nombre }, "POST");

      setAuth({
        uid,
        checking: false,
        logged: true,
        name: nombreUser,
        email: emailUser,
      });
      localStorage.setItem("token", token);

      return true;
    } catch (error) {
      console.log(error);
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }
  };
  const verificarToken = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return setAuth({
          uid: null,
          checking: false,
          logged: false,
          name: null,
          email: null,
        });
      }

      const {
        token: nuevoToken,
        usuario: { Online, email: emailUser, nombre: nombreUser, uid },
      } = await fetchConToken("auth/renew-token");
      setAuth({
        uid,
        checking: false,
        logged: true,
        name: nombreUser,
        email: emailUser,
      });
      localStorage.setItem("token", nuevoToken);
      return true;
    } catch (error) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      console.log(error);
      return false;
    }
  }, []); // usar la misma instancia de la funcion aunque se renderice muchas veces el mismo componente
  // useMemo se usa para memorizar variables que guardan resultados de funciones, useCallabck se usa para memorizar funciones
  const logout = () => {};
  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        verificarToken,
        logout,
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};