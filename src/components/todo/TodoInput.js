import React, {useState} from 'react';

const TodoInput = ({addTodo}) => {

    const [title, setTitle] = useState('')

    return (
        <div>
            <h2>Todo Input</h2>
            <div>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button onClick={()=>{
                    addTodo(title)
                    setTitle('')
                }}>ADD</button>
            </div>
            <hr/>
        </div>
    );
};

export default TodoInput;