import React from "react";
import * as PATHS from "../../utils/paths";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute(props) {
  const { exact, path, component, user, ...componentProps } = props;
  if (!user) {
    return <Redirect to={PATHS.LOGIN_PAGE} />;
  }

  const Component = component;

  return (
    <Route
      exact={exact}
      path={path}
      render={(reactRouterProps) => (
        <Component {...reactRouterProps} {...componentProps} user={user} />
      )}
    />
  );
}

export default ProtectedRoute;
