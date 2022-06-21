import React, {useEffect, useState} from 'react';
import {getTodoList} from "../../api/todoAPI";
import Todo2Paging from "./Todo2Paging";

const initState = {
    start: 0,
    end: 0,
    prev: false,
    next: false,
    dtoList: []
}

const initRequest = {
    page: 1,
    size: 10,
    force: false,
}

const Todo2List = ({flag}) => {
    const [before, setBefore] = useState(flag)
    const [cri, setCri] = useState(initRequest)
    const [data, setData] = useState(initState)

    useEffect(() => {


        getTodoList(before === flag ? cri.page : 1).then(result => {
            setData(result)
            setBefore(flag)
        })
    }, [flag, cri.page, cri.force])

    const movePage = (num) => {
        setCri({...cri, page: num, force: !cri.force})
    }

    return (
        <div>
            <h3>Todo2 List</h3>
            <ul>
                {data.dtoList.map(todo => <li key={todo.tno}>{todo.title}</li>)}
            </ul>
            <Todo2Paging {...data} movePage={movePage}></Todo2Paging>
            {/*    너무 많아서 전개연산자로 줘버림*/}
        </div>
    );
};

export default Todo2List;