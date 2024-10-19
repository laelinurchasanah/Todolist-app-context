import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React App', user: 'Laeli NurC' },
    { id: 2, text: 'Build a Todo App', user: 'Minatozaki' },
    { id: 3, text: 'Understand Context API', user: 'Sana' }
  ]);

  return (
    <TodoContext.Provider value={{ todos }}>
      {children}
    </TodoContext.Provider>
  );
};
