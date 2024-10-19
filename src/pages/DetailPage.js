import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import { VoteContext } from '../context/VoteContext';

const DetailPage = () => {
  const { id } = useParams();
  const { todos } = useContext(TodoContext);
  const { votes } = useContext(VoteContext);

  const todo = todos.find(item => item.id === parseInt(id));

  if (!todo) {
    return <p>Todo not found</p>;
  }

  return (
    <div className='container'>
      <h1>{todo.text}</h1>
      <p>Assigned to: {todo.user}</p>
      <p>Votes: {votes[todo.id] || 0}</p>
    </div>
  );
};

export default DetailPage;
