import React from "react";
import * as PATHS from "../utils/paths";
import { Redirect } from "react-router-dom";

export default function ProfilePage(props) {
  const [displayUpdateProfile, setDisplayUpdateProfile] = React.useState(false);
  const [displayUpdatePassword, setDisplayUpdatePassword] =
    React.useState(false);
  const { user } = props;

  function profileToggle() {
    setDisplayUpdateProfile(!displayUpdateProfile);
  }

  function passwordToggle() {
    setDisplayUpdatePassword(!displayUpdatePassword);
  }

  //  if there is no user, you should be redirected to /login
  // A "middleware" that is going to check if you are validated or not
  return (
    <div>
      <h1>Hi, {user.username}</h1>
      <img
        src={user.profilePic}
        width="200px"
        alt={`Profile picture for ${user.username}`}
      />
      <div>
        <button onClick={profileToggle}>Update profile</button>
        <br />
        <button onClick={passwordToggle}>Update Password</button>
        <br />
        <button>Delete Account</button>
      </div>
    </div>
  );
}
