import React, {useState} from "react";

const CounterIncrement=()=>{

const [counter,setCount]=useState(1);
const incrementCount=()=> setCount(counter+1);
let decrementCount=()=> setCount(counter-1);

if (counter<=1){
    decrementCount=()=> setCount(1);
}
 
 return(<div className="Counter">
    <button  className="incrementButton" onClick={incrementCount}  >+</button>
    <p className="counterNumber">{counter}</p>
    <button  className="decrementButton" onClick={decrementCount} >-</button>
     </div>);

}
  
export default CounterIncrement;