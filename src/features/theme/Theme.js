import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { themeTextColor } from '../theme/ThemeSlice'
function Theme() {
    const [color, setColor] = useState("black");
    const dispatch = useDispatch();
  
    return (
        <div>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={(e) => dispatch(themeTextColor(color))}>Change Color</button>
         
        </div>
    )
}

export default Theme