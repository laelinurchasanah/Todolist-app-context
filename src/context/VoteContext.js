import React, { createContext, useState } from 'react';

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({});

  const addVote = (id) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [id]: (prevVotes[id] || 0) + 1,
    }));
  };

  return (
    <div className='vote-count'>
    <VoteContext.Provider value={{ votes, addVote }}>
      {children}
    </VoteContext.Provider>
    </div>
  );
};
