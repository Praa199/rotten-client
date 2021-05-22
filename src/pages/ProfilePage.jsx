import React from "react";
import axios from "axios";

export default function ProfilePage(props) {
  const [displayUpdateProfile, setDisplayUpdateProfile] = React.useState(false);
  const [displayUpdatePassword, setDisplayUpdatePassword] =
    React.useState(false);
  const { user, authenticate } = props;

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
        {displayUpdateProfile && (
          <UpdateProfile user={user} authenticate={authenticate} />
        )}
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
  const { user, authenticate } = props;
  const [form, setForm] = React.useState({
    username: user.username,
    email: user.email,
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    axios
      .put(`http://localhost:5000/api/profile/update`, form, {
        headers: {
          authorization: accessToken,
        },
      })
      .then((response) => {
        console.log("response:", response);
        authenticate(response.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <button>Update das profile</button>
    </form>
  );
}

function COmponent9() {
  const arr = [1, "two", { three: 3 }, function four() {}];
  return (
    <div>
      <Component1
        hello="there"
        cowbanga="teenage mutant ninja turtles"
        specialSauce={arr}
        whateverNameWePutHere="<3"
        noice
      />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Component1(props) {
  // props.hello;
  // props.cowbanga;
  // props.specialSauce
  // props.whateverNameWePutHere
  // props.noice -> true
  return <div></div>;
}
function Component2() {
  return <div></div>;
}
function Component3() {
  return <div></div>;
}
