import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TempleteBody = styled.div`
s
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;

`;

const TodoList = () => {

    const todos = useTodoState();

    return (
        <TempleteBody>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}

                />
            ))}
        </TempleteBody>
    );
}

export default TodoList;