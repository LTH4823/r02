import {useEffect, useState} from "react";
import {getPostList} from "../api/postAPI";

const usePostList = (flag)=>{
    const [posts, setPosts] = useState([])

    useEffect(() =>{

        getPostList().then(res=>setPosts(res)).catch('error')

    },[flag])

    return {posts}
}

export default usePostList