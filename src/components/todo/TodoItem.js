import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap"

const TodoItem = ({tno, title, complete, removeTodo, changeComplete}) => {

    const [checked,setChecked] = useState(complete)
    const [cri, setCri] = useState('A')

    const changeCheck = (e) =>{
        const target = e.target

        // console.log(target)
        // console.log(target.checked)

        setChecked(target.checked)
        changeComplete(tno,target.checked)

    }

    return (
        <li>
            <input type="checkbox" checked={checked} onChange={(e)=>{changeCheck(e)}} />
            {title} <Button onClick={()=>{removeTodo(tno)}}>DEL</Button>
        </li>
    );
};

export default TodoItem;