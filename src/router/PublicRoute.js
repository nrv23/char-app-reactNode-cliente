import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component, // componente que se pasa por parametro para renderizar
  //el componente que recib es un componente publico que contiene rutas publicas de login y registro, por lo que sino esta autenticado y quiere entrar a esas rutas el acceso es permitido, pero si esta autenticado se va redireccionar a la pantalla principal del chat
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
