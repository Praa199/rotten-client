import React from "react";
import * as PATHS from "../utils/paths";
import { Redirect } from "react-router-dom";

export default function ProfilePage(props) {
  const [displayUpdateProfile, setDisplayUpdateProfile] = React.useState(false);
  const [displayUpdatePassword, setDisplayUpdatePassword] =
    React.useState(false);
  const { user } = props;
  console.log("props:", props);

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
        {/* {displayUpdateProfile ? <UpdateProfile /> : null} */}
        {displayUpdateProfile && <UpdateProfile />}
        <br />
        <button onClick={passwordToggle}>Update Password</button>
        {displayUpdatePassword && <UpdatePassword />}
        <br />
        <button>Delete Account</button>
      </div>
    </div>
  );
}

function UpdatePassword() {
  return (
    <form>
      <div>
        <label>Current Password</label>
        <input name="password" placeholder="Current Password" />
      </div>
      <div>
        <label>New Password</label>
        <input name="password" placeholder="New Password" />
      </div>
      <div>
        <label>Confirm New Password</label>
        <input name="password" placeholder="Confirm New Password" />
      </div>
      <button>Update das password</button>
    </form>
  );
}

function UpdateProfile(props) {
  return (
    <form>
      <div>
        <label>Username</label>
        <input name="username" placeholder="Username" />
      </div>
      <div>
        <label>Email</label>
        <input name="email" placeholder="Email" />
      </div>
      <button>Update das profile</button>
    </form>
  );
}
