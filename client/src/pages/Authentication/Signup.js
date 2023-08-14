import React, { useState } from "react";
import Icons from "../../assets/Icons";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/Auth";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a payload object with user registration details
    const payload = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
    };

    try {
      // Call the service function to perform user registration (signup)
      await signup(payload, navigate); // Make sure you have the signup function defined
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="auth">
      <div className="auth-wrap">
        <div className="auth-logo">
          <img src={Icons.Logo} alt="" />
        </div>
        <div className="header-text">Signup</div>
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
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="input">
              <input
                required
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
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

export default Signup;
