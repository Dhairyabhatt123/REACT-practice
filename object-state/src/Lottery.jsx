import "./Lottery.css"
import { useState } from "react"
import "./helper"
import { genrandom,sum } from "./helper";



export default function Lottery() {

    let [tickets, settickets] = useState(genrandom(3));
    let iswinning = sum(tickets) === 15;

    let getTicket = () =>{
        settickets(genrandom(3))
    } 
    return (
        <div id="maindiv">
            <h1>Lottery game!</h1>
            <div id="ticket">
                <span>
                    {tickets[0]}</span>
                <span>{tickets[1]}
                </span>
                <span>
                    {tickets[2]}
                </span>
            </div>
            <button style={iswinning? {backgroundColor : "red"}:{}} onClick={getTicket}>Buy New Ticket</button>
            <h1>{iswinning && "Congratulations U win!!"}</h1>
        </div>
    )
} 