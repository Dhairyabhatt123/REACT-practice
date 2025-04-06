import { useState } from "react";

export default function LudoBoard(){
    let[Moves,setMoves] = useState({blue:0,red:0,yellow:0,green:0});

    let updateblue = () => {
        setMoves((prevMoves) => {
            return  { ...prevMoves, blue: prevMoves.blue+1}
        });
    };
    
    let updateyellow = () => {
        setMoves((prevMoves) => {
            return  { ...prevMoves, yellow: prevMoves.yellow+1}
        });
    };
    
    let updatered = () =>{
        setMoves((prevMoves) =>{
            return {...prevMoves,red : prevMoves.red+1}
        })
    }

    let updategreen = () =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, green: prevMoves.green+1}
        })
    }
    return(
        <div>
            <p>Game Begins!!</p>
            <div className="board">
                <p>blue moves = {Moves.blue}</p>
                <button onClick={updateblue} style={{backgroundColor:"blue"}}>+1</button>
                <p>yellow moves = {Moves.yellow}</p>
                <button onClick={updateyellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
                <p>red moves = {Moves.red}</p>
                <button onClick={updatered} style={{backgroundColor:"red"}}>+1</button>
                <p>green moves = {Moves.green}</p>
                <button onClick={updategreen} style={{backgroundColor:"green"}}>+1</button>
            </div>
        </div>
    )
}