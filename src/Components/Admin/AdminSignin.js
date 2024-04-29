import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../Button"
import "./Admin.css"

export default function AdminSignin() {
    const [formData, setFormData] = useState(
        {
            emailAddress: "", 
            password: "",
        }
        
        )

        console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if(formData.password === formData.confirmPassword){
           console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
        }

        // submitToApi(formData)
    }
    

    return (
        <>
            <div className="ujucover">
            <div className="coveralls">
            <div className="welcomeTxt">
                <h1>Login as an Admin</h1>
                <div className="signUpLink">
            <p>
              Don't have an account? <button className="newadmin"><Link to="/AdminSignup">Sign up</Link></button>
            </p>
          </div>
                </div>


                

                <form onSubmit={handleSubmit} className="mainwrap">
                    
                    

                    <label htmlFor='emailAddress'> Email Address</label>
                        <input type='email' placeholder='Email' 
                        id="emailAddress" name="emailAddress" onChange={handleChange} value={formData.emailAddress} />
                    
                    <label htmlFor='password'> Password</label>
                        <input type='password' placeholder='Password'
                        id="password" name="password" onChange={handleChange} value={formData.password} />

                    
                    

                   <button className="metbtn">Login</button>
                </form>
            </div>
           </div>
        </>
    )
}