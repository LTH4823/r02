import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from "react-uuid";
import todoItem from "./TodoItem";
import TodoCri from "./TodoCri";

//배열에 새로운 요소를 추가
// push, concat, 전개연산자

const arr = [1,2,3,4,5,6,7,8]

//push => 원래 리모컨 변화 없음
//concat => 원본 훼손 없음 -> 직접적인 레퍼런스가 작동되어야만 추가 됨
//전개연산자 => concat의 기능에 레퍼런스 고정 조건 제거
// arr.push(4)
// const result = arr.concat(5)
// console.log("-------------------------")
// console.log(arr)
// console.log(result)
// console.log([...arr,5,6,7])

//filter 결과는 항상 배열
// const result = arr.filter(ele => ele % 2 === 0)
// console.log(result)


const initState = [
    {tno:uuid(), title: 'Sample..1',complete: false},
    {tno:uuid(), title: 'Sample..2',complete: true},
    {tno:uuid(), title: 'Sample..3',complete: true},
    {tno:uuid(), title: 'Sample..4',complete: false},
    {tno:uuid(), title: 'Sample..5',complete: true},
]

const TodoWrapper = () => {

    const [todos, setTodos] = useState(initState)
    const [cri, setCri] = useState('A')

    const changeCri = (cri) =>{
        setCri(cri)
    }

    const addTodo = (title) => {
        const todo = {tno: uuid(), title:title, complete:false}
        console.log(todo)
        setTodos([...todos, todo])
    }

    const removeTodo = (tno) =>{
        const result = todos.filter(todo => todo.tno !== tno)
        setTodos((result))
    }

    const changeComplete = (tno, complete) => {

        const target = todos.filter(todo => todo.tno === tno)[0]
        target.complete = complete

        setTodos([...todos])

    }

    return (
        <>
            <TodoCri changeCri={changeCri}/>
            <TodoInput addTodo={addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo}
                      changeComplete={changeComplete} cri={cri}/>
        </>
    );
};

export default TodoWrapper;