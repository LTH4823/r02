import React, {useEffect, useState} from 'react';
import axios from "axios";

const getMovie = async () => {
    const res = await axios.get("https://swapi.dev/api/films/2/")

    console.log("getMovie")
    console.log(res)

    return res.data
}

const Test1 = () => {
    console.log("Test1..........................")

    const [content, setContent] = useState('');

    useEffect(()=>{
        getMovie().then(info => {
            const text = info.opening_crawl
            console.log(text)
            setContent(text)
        }).catch('error')
    }, [])

    return (
        <div>
            <h1>Test1</h1>
            <button onClick={() => {
                console.log('aaa')
            }}>Click
            </button>
            <pre>
                {content}
            </pre>
        </div>
    );
};

export default Test1;