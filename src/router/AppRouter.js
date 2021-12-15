import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { ChatPage } from "../pages/ChatPage";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { verificarToken, auth } = useContext(AuthContext);

  useEffect(() => {
    verificarToken();
  }, [verificarToken]);
  if (auth.checking) {
    return <h1>Espere por favor....</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={auth.logged}
          />
          <PrivateRoute
            exact
            path="/"
            component={ChatPage}
            isAuthenticated={auth.logged}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
