import React, {useState} from 'react';

const TodoInput = ({addTodo}) => {

    const [title, setTitle] = useState('')

    const sendTodo = () => {
        if (title === ''){
            alert("제목을 입력하세요.")
            return
        }
        addTodo(title)
        setTitle('')
    }

    return (
        <div>
            <h2>Todo Input</h2>
            <div>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button onClick={() => sendTodo() }>ADD</button>
            </div>
            <hr/>
        </div>
    );
};

export default TodoInput;