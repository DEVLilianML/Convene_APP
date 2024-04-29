import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext.js";
import "./Signin.css"

function Mysignin() {
  const [formData, setFormData] = useState("Login", {
    emailAddress: "",
    password: "",
    // confirmPassword: "",
  });

  const [error, setError] = useState("");
  const logIn  = useUserAuth();
  console.log(logIn)
  const navigate = useNavigate();

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if(formData.password === formData.confirmPassword){
    //    console.log("Successfully signed up")
    // } else {
    //     console.log("Passwords do not match")
    // }

    setError("");
    try {
      await logIn(formData.emailAddress, formData.password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }

    // submitToApi(formData)
  };

  
  
  return (
    <div className="mysignin-container">
      <div className="signin">
        <div className="overallSignin">

        <form onSubmit={handleSubmit}>
            <h1 className="welcome">Welcome Back to Convene</h1>
            <p className="already">
            Are you new here?{" "}
            <span className="span">
              <Link to="/">Sign up</Link>
            </span>
          </p>
            <div className="labelInput">
    
              <label htmlFor="emailAddress">Email Adress
                <input
                  type="email"
                  placeholder="Enter email"
                  maxLength="100"
                  minLength="3"
                  id="emailAddress"
                  onChange={handleChange}
                  value={formData.emailAddress}
                />
              </label>
              <label htmlFor="sipazword">Password
                <input
                  type="password"
                  placeholder="Enter password"
                  maxLength="100"
                  minLength="3"
                  id="sipazword"
                  onChange={handleChange}
                  value={formData.password}
                />
              </label>
            </div>
            <div className="signinLabelButton">
              <label>
                <button className="btn">Sign in</button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Mysignin;
