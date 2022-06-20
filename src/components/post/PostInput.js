import React from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";

const PostInput = () => {

    const clickAdd = () => {
        const obj = {title:'Test......', author:'tester'}
        postAjax(obj)
    }

    return (
        <div>
            <div>
                <Button onClick={()=>{clickAdd()}}>ADD POST</Button>
            </div>
        </div>
    );
};

const postAjax = async (postObj)=>{

    const res = axios.post("http://localhost/posts/", postObj)

    const data = res.data

    console.log(data)

    return data
}

export default PostInput;