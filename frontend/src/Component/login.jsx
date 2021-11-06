import React, { useState } from "react";
import "../Css/login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const history = useHistory();
  const login = () => {
    axios.post("http://localhost:3005/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/add");
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />
      <div className="button" onClick={login}>
        Login
      </div>
      
    </div>
  );
};

export default Login;
