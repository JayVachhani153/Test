import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/route";

import "./signin.scss";

const SignIn = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log("click login")
    navigate(ROUTE.dashboard)
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>In SignIn</h2>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="App-header">
          <h1>Login</h1>

          <button type="button" onClick={handleClick}>
            Login Test
          </button>
        </div>

      </div>
    </>
  );
};

export default SignIn;
