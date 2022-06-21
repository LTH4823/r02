import React, {useEffect, useState} from 'react';
import {getPostList} from "../../api/postAPI";
import usePostList from "../../hooks/usePostList";


const Post2List = ({flag,requestRender}) => {
    console.log("Post2List.................render")
    const {posts} = usePostList(flag)

    return (
        <div>
            <h3>Post2 List</h3>
            <ul>
                {posts.map(post=><li key={post.id}>{post.title}----{post.author}</li>)}
            </ul>
        </div>
    );
};

export default Post2List;