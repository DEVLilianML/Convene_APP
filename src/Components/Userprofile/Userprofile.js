import React from "react";
import profileAvatar from "../Assets/Union.png";
import profileIcon from "../Assets/bighair.png";
import thumbsUp from "../Assets/icons8-thumbs-up-24.png";
import thumbsDown from "../Assets/icons8-thumbs-down-24.png";
import commentIcon from "../Assets/icons8-comment-24.png";
import Button from "../Button";
import "./Userprofile.css"

export default function Userprofile() {
  
  return (
    <div className="overallProfile">
    <div className="profile">
        <div className="userleftside">
          <div className="duser"><h1> User Profile</h1></div>
            <div className="avatar">
                <img className="avatarImg" src={profileIcon} alt="profileavatar" />
                <h3 className="profileName">Lilian Beach</h3>
                <div className="userDetails">
                    <p><span className="bold">Username : </span><i className="italic">Softwork1</i></p>
                    <p><span className="bold">Email : </span><i className="italic">ujunwalilianz12@gmail.com</i></p>
                    <p><span className="bold">Password : </span><i className="italic">*********</i></p>
                </div>
                <div className="logOutButton">
                    <Button id="buttn" text="Log out" />
                </div>
            </div>
        </div>
            <div className="rightsideact">
              <div className="profileTxtm">
              <h1>Activities</h1>
              </div>
          
             <div className="newact">
                <div className="actList">
                 <div className="actList1">
                   <p className="bold">Number of Question asked</p>
                   <div className="number">
                     <span className="dnum">25</span>
                   </div>
                   <div className="actBtn">
                    <Button text="View History" />
                   </div>
                  </div>
                  <div className="actList2">
                   <p className="bold">Number of Questions user commented on</p>
                   <div className="number">
                    <span className="dnum">13</span>
                  </div>
                  <div className="actBtn">
                   <Button text="View History" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            
            
          
          <div className="allevents">
            <div className="abegooo">
               <h2>Upcoming Events</h2>
               </div>
           
            <div className="newEvents">
            <h2>First Week Events</h2>
            <div>
              <h3>Product Development Hangout</h3>
              <p>
                The largest product development hangout in Africa! Ask our
                experts any questions.
              </p>
              <span>Date: 31/4/2024</span>
              <p>Status: You are scheduled to attend!</p>
            </div>
            </div>

            <div className="quelast">
              <span>
                <img src={thumbsUp} alt="user icon" />
              </span>

              <span>
                {" "}
                <img src={thumbsDown} alt="user icon" />
              </span>

              <span>
                <img src={commentIcon} alt="user icon" />
              </span>
              <span>9:44</span>
            </div>
          

          <div className="upcomingEvents">
            <h2>Next Events</h2>
            <div>
              <h3>Software Development Hangout</h3>
              <p>
                The largest software development hangout in Africa! Ask our
                experts any questions.
              </p>
              <span>Date: 31/4/2024</span>
              <p>Status: You are scheduled to attend!</p>
            </div>

            <div className="queIconsWrap">
              <span>
                <img src={thumbsUp} alt="user icon" />
              </span>

              <span>
                {" "}
                <img src={thumbsDown} alt="user icon" />
              </span>

              <span>
                <img src={commentIcon} alt="user icon" />
              </span>
              <span>9:44</span>
            </div>
           </div>
           </div>
          </div>
        
      </div>
    
  );
}
