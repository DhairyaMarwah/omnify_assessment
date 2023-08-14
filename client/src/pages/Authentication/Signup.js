import React from "react";
import Icons from "../../assets/Icons";

const Signup = () => {
  return (
    <div className="auth">
      <div className="auth-wrap">
        <div className="auth-logo">
          <img src={Icons.Logo} alt="" />
        </div>
        <div className="header-text">Signup</div>
        <div className="login-inputs">
          <form action="">
            <div className="input">
              <input required type="text" placeholder="Email" />
            </div>
            <div className="input">
              <input required type="text" placeholder="Password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
