import {useState} from "react";
import {addPostAjax} from "../api/postAPI";


function usePostInput(initState, callback){

    const [post, setPost] = useState(initState)

    const change = (attr, value) =>{
        post[attr] = value
        setPost({...post})
    }

    const clickAdd = () =>{
        addPostAjax(post).then(()=>{
            console.log("addPost.....end")
            if (callback){
                callback()
            }
        }).catch('error')
    }

    return {post, change, clickAdd}
}

export default usePostInput