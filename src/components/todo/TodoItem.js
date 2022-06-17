import React from 'react';

const TodoItem = ({tno, title, complete}) => {
    return (
        <li>
            {tno} --- {title}
        </li>
    );
};

export default TodoItem;