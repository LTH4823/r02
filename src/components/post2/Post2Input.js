import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {addPostAjax} from "../../api/postAPI";
import usePostInput from "../../hooks/usePostInput";

const initState ={
    title: '',
    author: ''
}

const Post2Input = ({requestRender}) => {

   const {post, change, clickAdd} = usePostInput(initState, requestRender)

    return (
        <div>
            <div>
                <input type="text" value={post.title} onChange={(e)=>change('title', e.target.value)}/>
            </div>
            <div>
                <input type="text" value={post.author} onChange={(e)=>change('author', e.target.value)}/>
            </div>
            <div>
                <Button onClick={()=> clickAdd()}>ADD</Button>
            </div>
        </div>
    );
};

export default Post2Input;