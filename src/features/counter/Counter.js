import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0);

    return (
        <div >
           <button  style={{fontSize:"40px", margin:"10px"}} onClick={()=> setCount(count + 1)}>+</button>

           <span style={{fontSize:"40px", margin:"10px"}} > Counter : {count}</span>
           
           <button style={{fontSize:"40px", margin:"10px"}} onClick={()=>setCount(count - 1)}>-</button>
        </div>
    )
}

export default Counter