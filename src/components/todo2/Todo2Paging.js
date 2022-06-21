import React from 'react';
import styled from "styled-components";

const ListUL = styled.ul`
  list-style: none;
  display: flex;
`

const ListLI = styled.li`
  padding: 10px;
`

const Todo2Paging = ({start,end, prev,next, movePage}) => {

    const pageArr = Array.from({length:(end-start)+1}, (v,i) => i+start)

    console.log(pageArr)

    return (
        <div>
            <ListUL>
                {prev? <ListLI onClick={() => movePage(start-1)}>Prev</ListLI>:<></> }
                {pageArr.map(page => <ListLI key={page} onClick={() => movePage(page)} >{page}</ListLI>)}
                {next? <ListLI onClick={() => movePage(end+1)}>Next</ListLI>:<></> }
            </ListUL>
        </div>
    );
};

export default Todo2Paging;