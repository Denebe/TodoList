import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplete';
import { TodoProvider } from './TodoContext';

const App = () => {
  const GlobalStyle = createGlobalStyle`
      body {
        background: #e9ecef;
      }
  `;

  return(
    <TodoProvider>
      
      <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      
    </TodoProvider>

  )
}

export default App;
