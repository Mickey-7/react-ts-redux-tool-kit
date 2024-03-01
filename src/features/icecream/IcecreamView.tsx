import React, { useState }  from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
    const[value, setValue] = useState(1)
    // const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
    const numOfIcecreams = useAppSelector(state => state.icecream.numOfIcecream)
    // const dispatch = useDispatch()
    const dispatch = useAppDispatch()

    return(
        <div>
            <h2>Number of icecreams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order icecream</button>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}    
            />
            <button onClick={() => dispatch(restocked(value))}>Restock icecream</button>
            
        </div>

    )
}