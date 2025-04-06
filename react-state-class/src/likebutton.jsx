import {useState} from "react";

export default function likebutton(){
    let[isliked,setisliked] = useState(false);
    let[clicks,setclicks] = useState(0);
    
    let toggleclick = () =>{
        setisliked(!isliked);
        setclicks(clicks+1);
    }

    let styles = {Color: "red"};

    return(
        <div>
            <p>clicks = {clicks}</p>
            <p onClick={toggleclick}>{isliked?<i class="fa-solid fa-heart"  style={styles} ></i>:<i class="fa-regular fa-heart"></i>}
            </p>
        </div>
    )
}