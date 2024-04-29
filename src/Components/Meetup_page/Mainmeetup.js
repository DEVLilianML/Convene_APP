import React from "react"
import './Meetup.css';
import MeetingCard from "./MeetingCard";
import meetuppic1 from "../Assets/3persons.png";
import card1 from "../Assets/oyibo.png"
import card2 from "../Assets/man beach.png";
import card3 from "../Assets/orange man.png";
import card4 from "../Assets/man on black.png";
import vidIcon from "../Assets/icons8-video-call-24.png";
import audioIcon from "../Assets/icons8-microphone-24.png";

export default function Mainmeetup() {

  return (
    <div className="allback">
      <div className="mainWrap">
       <h1 className="tech4dev">Tech4dev weekly meetup</h1>
       <p className="tdev">Tuesday, 2nd April 2024</p>

       <button className="meetbtn">Share meeting link</button>
    
       <div className="heroImgWrap">
        <img className="heroImg" src={meetuppic1} alt="meet up picture" />

         <span className="hostName">Admins</span>
       </div>

       <div className="cardListWrap">
       <MeetingCard img={card3} name="Kings" />
        <MeetingCard img={card1} name="Jenny" />
        <MeetingCard img={card2} name="Henry" />
        <MeetingCard img={card4} name="Maxwel" />
      </div>

      <div className="footerWrap">
            <img className="icon" src={vidIcon} alt="video icon" />

            <button className="exitBtn">Leave Meeting</button>

            <img className="icon" src={audioIcon} alt="audio icon" />
      </div>
     </div>
    </div>
  );
}
