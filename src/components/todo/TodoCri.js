import React from 'react';

const TodoCri = ({changeCri}) => {
    return (
        <div>
            <b onClick={()=> changeCri('A')}>ALL</b>
            <b onClick={()=> changeCri('C')}>Completed</b>
            <b onClick={()=> changeCri('U')}>Not Yet</b>
        </div>
    );
};

export default TodoCri;