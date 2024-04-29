import React from 'react'
import Questions from "./Questions.js";
 import profileIcon from "../Assets/orange man.png";
 import questIcon from "../Assets/icons8-question-30.png";
 import sendIcon from "../Assets/icons8-send-comment-24.png";
 import profile1 from "../Assets/man on black.png";
 import profile2 from "../Assets/man beach.png";

export default function Questionpage() {
  return (
    <div className="queWrap">
      <div className="queHeader">
        <h1>Questions</h1>
        <p>
          You can post your questions here with other members during the meetup.
        </p>
      </div>

      <Questions
      img= {profile1}
      name= 'Lawrence Smooth'
      question= 'What is React?'
      upvote= ""
      downvote= ""
      comment= {105}
       />
      <Questions 
      img= {profile2}
      name=    'Joseph Cruise'
      question= 'What is the difference between JavaScript and React?'
      upvote= ""
      downvote= ""
      comment= {33}
      />
      <Questions 
      img= {profileIcon}
      name= 'Dominic Zee'
      question= 'What is Html and its uses?'
      upvote= ""
      downvote= ""
      comment= {1}
      />

      <div className="askQueWrap">
        <img src={questIcon} alt="question icon" width='24px' height='24px' />
        <textarea placeholder="Ask a question..."> </textarea>
        <img src={sendIcon} alt="send icon" width='24px' height='24px' />
      </div>
    </div>
  );
}
