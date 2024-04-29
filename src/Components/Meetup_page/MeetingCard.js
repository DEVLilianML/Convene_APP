import card1 from "../Assets/3persons.png"
import card2 from "../Assets/orange man.png"
import card3 from "../Assets/man on black.png"


export default function MeetingCard(props){
    return (
        <div className="cardWrap">
            <img className="card" src={props.img} alt="meet up picture" />

<span className="particName">{props.name}</span>
        </div>
    )
} 