import React from "react";

import { FaUser, FaLock } from "react-icons/fa";
import {useState } from "react";
import {Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "./UserAuthContext.js";
import "./Signup.css";


function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    comments: "",
    agreement: true,
    contact: "",
    location: "",
    rememberForget: true,
  });

  
  const [error, setError] = useState("")
  const signUp = useUserAuth();
  const navigate = useNavigate();

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="signup-container">
      <div className="mainhomenav">
        <div className="homenav">
          <div className="lefthomenav">
            <h1><i>Convene</i></h1>
          </div>
          <div className="righthomenav">
            <ul className="navalls">
              <li>Our Story</li>
              <li>Get started</li>
              <li><Link to="/Mysignin">Sign in</Link></li>
              <li><Link to="/adminlogin">Admin Login</Link></li>
              <li><Link to="/adminsignup">Become an admin</Link></li>
              <li><Link to="/meetup"> Direct Meeting</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <section>
        <div className="zeeworld">
          <div className="formclose">
           <form onSubmit={handleSubmit} className="realform">
              <h1 className="createh1"><b>Create account</b></h1>
              <div className="labelInput">
              <div className="newstyle">
                <label htmlFor="newname">
                  <input
                    type="text"
                    placeholder="First Name"
                    maxLength="100"
                    minLength="3"
                    id="newname"
                    onChange={handleChange}
                value={formData.firstName}
                required
                  />
                </label>
                
                 <label htmlFor="oldname">
                  <input
                    type="text"
                    placeholder="Last Name"
                    maxLength="100"
                    minLength="3"
                    id="oldname"
                    onChange={handleChange}
                    value={formData.lastName}
                    required
                  />
                 </label>
                 <FaUser className="faz" />
                </div>
               
                <label htmlFor="demail">
                  <input type="email" placeholder="E-mail" id="demail" />
                </label>
                <div  className="signupnaz">
                <FaLock className="iconz" />
                  <label htmlFor="nazword">
                  <input type="password" placeholder="Password" minLength="6" maxLength="15" id="nazword" />
                  </label>
                 
                
                 <label htmlFor="repeatnazword">
                  <input type="password" placeholder="Confirm password" minLength="6" maxLength="15" id="repeatnazword" />
                 </label>
                </div>
              </div>
              <div className="labelButton">
                <label>
                  <button className="signupbtn">Sign up</button>
                </label>
              </div>
              <div>
                <p className="already">Already have an account? <Link to="/Mysignin">Signin</Link></p>
                
                <p className="copy"><b>Copyright © Tech4dev.com</b> </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup;
