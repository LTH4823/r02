import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                {todos.map(todo=><TodoItem key={todo.tno} {...todo}/>)}
            </ul>
        </div>
    );
};

export default TodoList;