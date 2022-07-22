import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../coin/CoinSlice'

function Coin() {
  let coin = useSelector((state) => state.coin.coin)
  let color = useSelector((state) => state.theme.color)
  
  const dispatch = useDispatch()
  return (
    <div >
      <button style={{ fontSize: "40px", margin: "10px" }} onClick={() => dispatch(increment())}>+</button>

      <span style={{ fontSize: "40px", margin: "10px", color: color }} > Coin :{coin} </span>

      <button style={{ fontSize: "40px", margin: "10px" }} onClick={() => dispatch(decrement())}>-</button>


    </div>
  )
}

export default Coin