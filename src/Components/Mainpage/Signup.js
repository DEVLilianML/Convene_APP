import React from "react";
import "./Sign.css";


function Signup() {
  return (
    <>
    <div className="homepage">
      <div className="homenav">
        <div className="lefthomenav">
          <h1><i>Convene</i></h1>
        </div>
        <div className="righthomenav">
          <ul>
            <li>Our Story</li>
            <li>Products</li>
            <li>Get started</li>
          </ul>
        </div>
      </div>
      </div>
      <section>
      <div className="container">
        <div className="formclose">
         <form>
           <h1 className="createh1">Sign up</h1>
 
           <div className="labelInput">
             <label for="firstname">
               <input
                 type="text"
                 placeholder="First Name"
                 maxLength="100"
                 minLength="3"
                 id="firstname"
               />
               </label>
               <label for="lastname">
               <input
                 type="text"
                 placeholder="Last Name"
                 maxlength="100"
                 minLength="3"
                 id="lastname"
               />
               </label>
               <label for="email">
               <input type="email" placeholder="E-mail" id="email" />
              </label>
             <label for="password">
               <input type="password" placeholder="Password" minLength="6" maxlength="15" id="password" />
             </label>
             <label for="repeatPassword">
               <input type="password" placeholder="Confirm password" minLength="6" maxlength="15" id="repeatPassword" />
             </label>
           </div>
           <div className="labelButton">
           <label>
             <button className="btn">Sign up</button>
           </label>
           </div>
           <div>
           <p className="already">Already have an account? <span className="span">Signin</span></p>
           <p className="copy"> Copyright © Tech4dev.com</p>
           </div>
         </form>
       </div>
     </div>
   </section>
     </>
   )
 }
 export default Signup;