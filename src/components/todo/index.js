import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from "react-uuid";
import todoItem from "./TodoItem";

//배열에 새로운 요소를 추가
// push, concat, 전개연산자

const arr = [1,2,3]

//push => 원래 리모컨 변화 없음
//concat => 원본 훼손 없음 -> 직접적인 레퍼런스가 작동되어야만 추가 됨
//전개연산자 =>

arr.push(4)
const result = arr.concat(5)

console.log("-------------------------")
console.log(arr)
console.log(result)
console.log([...arr,5,6,7])

const initState = [
    {tno:uuid(), title: 'Sample..1',complete: false},
    {tno:uuid(), title: 'Sample..1',complete: false},
    {tno:uuid(), title: 'Sample..1',complete: false},
]

const TodoWrapper = () => {

    const [todos, setTodos] = useState(initState)

    const addTodo = (title) => {
        const todo = {tno: uuid(), title:title, complete:false}
        console.log(todo)
        setTodos([...todos, todo])
    }

    return (
        <>
            <TodoInput addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </>
    );
};

export default TodoWrapper;