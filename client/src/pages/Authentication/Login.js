import React, { useState } from "react";
import Icons from "../../assets/Icons";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/Auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    try {
      await login(payload, navigate);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="auth">
      <div className="auth-wrap">
        <div className="auth-logo">
          <img src={Icons.Logo} alt="" />
        </div>
        <div className="header-text">Login</div>
        <div className="login-inputs">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                required
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="input">
              <input
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
