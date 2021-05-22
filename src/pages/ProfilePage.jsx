import React from "react";
import * as PATHS from "../utils/paths";
import { Redirect } from "react-router-dom";

export default function ProfilePage(props) {
  console.log("props:", props);
  const { user } = props;

  if (!user) {
    return <Redirect to={PATHS.LOGIN_PAGE} />;
  }

  //  if there is no user, you should be redirected to /login
  // A "middleware" that is going to check if you are validated or not
  return <div></div>;
}
