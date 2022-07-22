import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment,incrementByAmount } from './CounterSlice';

function Counter() {
    let count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    return (
        <div >
            <button style={{ fontSize: "40px", margin: "10px" }} onClick={() => dispatch(increment())}>+</button>

            <span style={{ fontSize: "40px", margin: "10px" }} > Counter :{count} </span>

            <button style={{ fontSize: "40px", margin: "10px" }} onClick={() => dispatch(decrement())}>-</button>

            <button style={{ fontSize: "40px", margin: "10px" }} onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</button>

        </div>
    )
}

export default Counter