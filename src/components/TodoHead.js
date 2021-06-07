import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';


// 여기서부터 css 꾸미면 됨
const TempleteHead = styled.div`

    border-bottom: 1px solid black;
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;

    h1{
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
`;

const TempDay = styled.div`

    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    
`;

const TempText = styled.div`
    margin-top: 40px;
    color: green;
    font-size: 21px;
    font-weight: bolder;
`

const TodoHead = () => {

    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();

    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
    return (

        <TempleteHead>
            <h1>{dateString}</h1>
            <TempDay>{dayName}</TempDay>
            <TempText>할 일 {undoneTasks.length}개남음</TempText>
        </TempleteHead>

    );

}

export default TodoHead;