import React from "react";
import { Route } from "react-router-dom";

function NormalRoute(props) {
  const { exact, path, component, ...asYouWish } = props;

  const Component = component;

  return (
    <Route
      exact={exact}
      path={path}
      render={(reactRouterProps) => (
        <Component {...reactRouterProps} {...asYouWish} />
      )}
    />
  );
}

export default NormalRoute;
