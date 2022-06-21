import React, {useReducer, useState} from 'react';
import {reduceNum} from "../reducers/counterEx";
import useCount from "../../hooks/useCount";




const Counter = () => {

    const {num, changeNum} = useCount()

    // const [state,dispatch] = useReducer(reduceNum, 0)
    //
    // const changeNum = (amount) =>{
    //     dispatch(amount)
    // }

    return (
        <div>
            {/*<h1>{state}</h1>*/}
            <h1>{num}</h1>
            <button onClick={()=> changeNum(1)}>+</button>
            <button onClick={()=> changeNum(-1)}>-</button>
        </div>
    );
};

export default Counter;