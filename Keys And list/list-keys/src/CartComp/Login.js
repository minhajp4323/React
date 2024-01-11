import React from "react";

function Login() {
  return (
    <>
      <div className="login">
        <label>User Name:</label>
        <input /> <br />
        <label>Password:</label>
        <input type="password" /> <br />
        <button>Login</button>
      </div>
    </>
  );
}

export default Login;
