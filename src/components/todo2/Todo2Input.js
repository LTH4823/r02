import React from 'react';
import {addTodoPost} from "../../api/todoAPI";

const Todo2Input = ({requestRender}) => {

    const clickAdd = () => {

        const todo = {title:'aaa',dueDate:'2022-06-30',writer:'tester'}

        addTodoPost(todo).then(()=>{

            requestRender()

        }).catch('error')
    }

    return (
        <div>
            <h2>Todo2 Input</h2>
            <button onClick={()=> clickAdd()}>ADD Todo</button>
        </div>
    );
};

export default Todo2Input;