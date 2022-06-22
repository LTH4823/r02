
import {getPostList} from "../api/postAPI";
import {useEffect, useState} from "react";

const usePostList = (flag)=>{
    const [posts,setPosts] = useState([])
    useEffect(() => {

        getPostList().then(res => setPosts(res))

    }, [flag])
    return {posts}
}

export default usePostList