import React, { useContext } from 'react';
import { VoteContext } from '../context/VoteContext';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo }) => {
  const { votes, addVote } = useContext(VoteContext);

  return (
    <div className='todo-item'>
      <Link to={`/detail/${todo.id}`}>
        <p>{todo.text} - {todo.user}</p>
      </Link>
      <p>Votes: {votes[todo.id] || 0}</p>
      <button onClick={() => addVote(todo.id)}>Vote</button>
    </div>
  );
};

export default TodoItem;
