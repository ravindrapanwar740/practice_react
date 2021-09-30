import React,{useState,useEffect} from 'react'

function Hooks() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.warn(count)
    },[count==5])
    return (
        <div>
           <h1>Hooks Componwnt...{count}</h1> 
           <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}



export default Hooks

