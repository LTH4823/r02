import React, {useState} from 'react';

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
            {title} <button onClick={()=>{removeTodo(tno)}}>DEL</button>
        </li>
    );
};

export default TodoItem;