import { useState } from "react"
import { genrandom,sum } from "./helper";
import NewTickets from "./mewTicket";

// winningSum=15
export default function NewLottery(n=3,winCondition) {

    // this function are from our helper.js file.  
    let [tickets, settickets] = useState(genrandom(n));
    // let iswinning = sum(tickets) === winningSum;
    let iswinning = winCondition(tickets);

    let getTicket = () =>{
        settickets(genrandom(n))
    } 
    return (
        <div>
            <h1>Lottery game!</h1>
                <NewTickets ticket={tickets}/>
            <button onClick={getTicket}>Buy New Ticket</button>
            <h1>{iswinning && "Congratulations U win!!"}</h1>
        </div>
    )
} 