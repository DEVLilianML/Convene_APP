import profileAvatar from "../Assets/finegirl.png";
import profileIcon from "../Assets/man beach.png";
import thumbsUp from "../Assets/icons8-thumbs-up-24.png";
import thumbsDown from "../Assets/icons8-thumbs-down-24.png";
import commentIcon from "../Assets/icons8-comment-24.png";
import Button from "../Button";
import "./Admindash.css"
import { useLinkClickHandler } from "react-router-dom";

export default function AdminDashboard() {
  return (
    
    <div className="overallProfile">
      <div className="profile">
        <div className="leftside">
          <div className="profileTxt">
             <h3>My Admin Dashboard</h3>
          </div>
          <div className="avater">
            <img
                className="avatarImg"
                src={profileAvatar}
                alt="profile avater"
            />
              <div className="profileDetails">
                <h2 className="profileName">Personal Details</h2>
                <div className="userDetails">
                  <p>
                    {" "}
                    <span className="bold">Username : </span>
                    <i className="italic">Henry56</i>
                  </p>
                  <p>
                    <span className="bold">Email : </span>
                    <i className="italic">noremedy@gmail.com</i>
                  </p>
                  <p>
                    <span className="bold">Password : </span>
                    <i className="italic">*********</i>
                  </p>
                </div>
              </div>
              <div className="logOutButton">
                  <Button id="buttn" text="Log out" />
              </div>
          </div>
        </div>
          

          <div className="rightside">
            <div className="profileTxt">
             <h3>Create Meetup</h3>
            </div>
            <div className="activities">
              <fieldset>
                <legend>Meeting Mode</legend>
                  <div className="conweb">
                    <label htmlFor="conference">Conference</label>
                    <input
                      id="conference"
                      name="meeting"
                      value="conference"
                      type="radio"
                      // onChange={handleChange}
                      // checked={formData.contact === "conference"}
                    />

                    <label htmlFor="webinar">Webinar</label>
                    <input
                      id=""webinar
                      name="meeting"
                      value="webinar"
                      type="radio"
                      // onChange={handleChange}
                      // checked={formData.contact === "webinar"}
                    />
                  </div>
              </fieldset>

                  <div className="meetingTopic">
                    <div className="profileTxt">                   
                     <h3> Meeting Topic: <span>Mobile Development Meetup</span>
                     </h3>
                    </div>

                    <p>Meeting / Room Name: </p>
                    <div>
                      <p>Password: </p>

                      <div className="generateCode">
                       <Button text="Generate" />
                      </div>
                    </div>
                    <div className="createMeetup">                    <Button text="Create Meetup" />
                    </div>

                  </div>
            </div>
          </div>
      </div>

          <div className="eventFeed">
          <h2>Scheduled Events</h2>
            <div className="upcomingEvents">
              
              <div>
                <h3>Mobile Developers Hangout</h3>
                <p>
                  The largest mobile development hangout in Africa! Ask our
                  experts any questions.
                </p>
                <span>Date: 31/4/2024</span>
              </div>

           
              

              <Button text="Delete Meetup" />
              </div>   

            <div className="upcomingEvents">
              
              <div>
                <h3>Tech4dev Open day</h3>
                <p>
                  The program you can meet our alumin and share your experince and thoughts.
                </p>
                <span>Date: 31/4/2024</span>
              </div>

              <Button text="Delete Meetup" />
            </div>
       </div>
       
    </div>
  );
}
