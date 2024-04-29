import REACT from "react";



function Buttton() {
    const clickHandler = () =>
    console.log("clicked")

    return(
        <div>
        <button onClick={clickHandler}>click me</button>
      </div>
    )
}
export default Buttton;