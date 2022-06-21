import React, {useState} from 'react';
import Todo2List from "./Todo2List";
import Todo2Input from "./Todo2Input";

const Todo2 = () => {

    const [flag, setFlag] = useState(false)

    const requestRender = () => {
        setFlag(!flag)
    }

    return (
        <div>
            <Todo2Input requestRender={requestRender}/>
            <Todo2List flag={flag}/>
        </div>
    );
};

export default Todo2;