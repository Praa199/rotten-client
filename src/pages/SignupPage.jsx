import React from "react";
import axios from "axios";

function SignupPage(props) {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  function onSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/signup", {
        // /rotten-api/routes/auth.js

        username,
        email,
        password,
      })
      .then((result) => {
        console.log("result***", result);
        props.history.push("/");
      })
      .catch((err) => {
        console.log("error***", err);
        console.log(err.response);
        console.error(err);
      });
  }

  function handleUsernameChange(e) {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  }

  return (
    <div>
      <h1>Signup page</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleUsernameChange}
            // onChange={(event) => {
            //   setUsername(event.target.value);
            // }}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            // onChange={handleChange}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            // onChange={handleChange}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignupPage;
