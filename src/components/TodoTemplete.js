import React from 'react';
import styled from 'styled-components';


const TemplateForm = styled.div`

    background: white;
    border-radius: 25px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);


    width: 500px;
    height: 800px;
    
    
    position: relative;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    margin-top: 96px;

`;

const TodoTemplate = ({ children }) => {
    return (

        <TemplateForm>
            {children}
        </TemplateForm>

    );

}

export default TodoTemplate;