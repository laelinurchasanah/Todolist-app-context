import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { VoteProvider } from './context/VoteContext';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './index.css'

function App() {
  return (
    <TodoProvider>
      <VoteProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </VoteProvider>
    </TodoProvider>
  );
}

export default App;
