import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, changeComplete, cri}) => {

    const filterdTodos = todos.filter(todo => {
        if (cri =='A'){
            return true
        }else if (cri==='C'){
            return todo.complete == true
        }else {
            return todo.complete == false
        }
    })

    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                {filterdTodos.map(todo=><TodoItem key={todo.tno}
                                           removeTodo={removeTodo}
                                           changeComplete={changeComplete} {...todo}/>)}
            </ul>
        </div>
    );
};

export default TodoList;