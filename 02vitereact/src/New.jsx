import { useState } from "react";
function New(){
    let [counter,setCounter]=useState(5);
    // const increment=()=>{
        
    //     setCounter(counter+1);
    // }
    return (
        <>
        <h2>Introduction of first hook in react</h2>
        <p>Value of counter{counter}</p>
        <button onClick={()=>setCounter(counter+1)}>Increment:{counter}</button>
        <button onClick={()=>setCounter(counter-1)}>Decrement:{counter}</button>
        <p>{counter}</p>

</>
    )
}
export default New