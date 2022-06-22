import {useState} from "react";

function useCount() {
    const[num,setNum]=useState(0)

    const changeNum = (value) =>{
        setNum(num+value)
    }
    return{num,changeNum}
}


export default  useCount