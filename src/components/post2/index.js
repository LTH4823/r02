import React, {useState} from 'react';
import Post2List from "./Post2List";
import Post2Input from "./Post2Input";

const Post2 = () => {

    const [flag,setFlag] = useState(false)

    const requestRender = () =>{
        setFlag(!flag)
    }



    return (
        <div>
            <Post2List flag={flag} requestRender={requestRender}></Post2List>
            <Post2Input  requestRender={requestRender}></Post2Input>
        </div>
    );
};

export default Post2;