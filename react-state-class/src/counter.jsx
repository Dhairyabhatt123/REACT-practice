import {useState} from "react";

function def(){
    return Math.floor(Math.random() *10);
}

export default function counter(){
    // this will make a count variale to state variable
    // const[count,setCount] = useState(0);  // initialise -- it do not re-renders
    const[count,setCount] = useState(def);

    let incCount = ()=>{
        setCount(count+1);
        // trigger re-render

        // call backs in updater function

        // setCount((currCount) => {
        //     return currCount+1;
        // });
        // setCount((currCount)=>{
        //     return currCount+1;
        // });
    }

    return(
        <div>
            <h3>count = {count}</h3>
            <button onClick={incCount}>increase count</button>
        </div>
    );
}