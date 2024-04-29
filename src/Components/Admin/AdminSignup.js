import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Adminsignup.css"

export default function AdminSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    comments: "",
    agreement: true,
    contact: "",
    industry: "",
    // file: ""
  });

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

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
  }
 


  return (
    
    <div className="adminsignup">
      <div className="overallSignup">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="createh1">Create an Admin account</h1>
          <p className="alreadz">
            Already have an account?{" "}
            <span className="span">
              <Link to="/adminlogin">Signin</Link>
            </span>
          </p>

          <div className="labelInput">
            <p className="convene">Convene</p>
            <div className="firstlast">
            <label htmlFor="firstname">
              <input
                type="text"
                placeholder="Firstname"
                maxLength="100"
                minLength="3"
                id="firstname"
                onChange={handleChange}
                value={formData.firstname}
                required
              />
            </label>
            <label htmlFor="lastname">
              <input
                type="text"
                placeholder="Lastname"
                maxlength="100"
                minLength="3"
                id="lastname"
                onChange={handleChange}
                value={formData.lastname}
                required
              />
            </label>
            </div>
            <label htmlFor="emails">
              <input
                type="email"
                placeholder="E-mail"
                id="emails"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </label>
            <div className="passwrap">
             < label htmlFor="passwordz">
              <input
                type="password"
                placeholder="Create a password"
                minLength="6"
                maxlength="15"
                id="passwordz"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
              />
             </label>
             <label htmlFor="repeatPasswordz">
              <input
                type="password"
                placeholder="Repeat password"
                minLength="6"
                maxlength="15"
                id="repeatPasswordz"
                name="repeatPassword"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </label>
            </div>

            <label htmlFor="industry" className="industry">
            Career Background
              <select
                id="industry"
                value={formData.location}
                onChange={handleChange}
                name="industry"
              >
                <option value="">--- Choose ---</option>
                <option value="tech">Tech</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="sciences">Sciences</option>
                <option value="Business">Business</option>
                <option value="creative">Creative</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="other">Other</option>
              </select>
            </label>

            <fieldset>
                <p>Write a brief note on your background and experience {" "}</p>
                <label htmlFor="comments">
                <textarea
                  value={formData.comments}
                  placeholder=""
                  id="comments"
                  onChange={handleChange}
                  name="comments"
                />{" "}
              </label>
              </fieldset>
            <fieldset>
              <label htmlFor="file" className="fileLabel">
                Upload any of your recent professional certification(s)
                <input
                  type="file"
                  id="file"
                  onChange={handleChange}
                  name="file"
                />
                </label>
              </fieldset>

              <div>
            <label>
              <button className="lastbtn">Sign up</button>
            </label>
            </div>

            <div className="agreement">
            <label htmlFor="agreement" className="checkbox-label">
            <input
                id="agreement"
                type="checkbox"
                onChange={handleChange}
                name="agreement"
                checked={formData.agreement}
                required
                className="custom-checkbox"

              />
              I have read and agree to the{" "}
              <span className="span">
                <a className="terms" href=" ">Terms of Service</a>
              </span>
            </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


