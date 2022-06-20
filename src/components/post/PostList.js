import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";

const PostList = ({flag}) => {

    const [posts, setPosts] = useState([])
    const [change, setChange] = useState(false)

    useEffect(() => {
        console.log("useEffect~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        ajaxList().then(data => {
            setPosts([...data]) //render 를 위해 같은내용으로 새로 만듬
        })
    }, [flag, change]) //빈 배열 넣으면 1회만 작동됨, 근데 '1회만' 그래서 다르게 처리해야한다


    const clickDelete = useCallback((id) => {
        ajaxDelete(id).then(() => {
            console.log("deleted........")
            setChange(!change)
        }).catch('error')
    })

    const list = posts.map(({id, title, author}) =>
        <li key={id}>{id}--{title}--{author}<Button variant="danger" size='sm'
                                                    onClick={() => clickDelete(id)}>X</Button></li>)
    //return 내부에서 해줘도 되지만 빼주는게 보기 좋아서

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
};

const ajaxList = async () => {

    const res = await axios.get('http://localhost/posts/')
    const data = res.data

    return data

}

const ajaxDelete = async (id) => {

    const res = await axios.delete(`http://localhost/posts/${id}`)
    return res.data
}

export default PostList;