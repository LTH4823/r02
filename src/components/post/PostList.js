import React, {useEffect, useState} from 'react';
import axios from "axios";

const PostList = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{

        ajaxList().then(data => {
            setPosts(data)
        }).catch('error')
    },[])

    const list = posts.map( ({id,title,author}) => <li key={id}>{id}---{title}---{author}</li>)

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
};

const ajaxList = async () =>{

    const res = await axios.get("http://localhost/posts/")

    const data = res.data

    return data
}

export default PostList;