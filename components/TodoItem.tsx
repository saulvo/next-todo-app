import React from 'react';
import AnimatedCheck from './AnimatedCheck';

const TodoItem: React.FC = () => {
  return (
    <div className='flex bg-white dark:bg-[#1c1c1c] p-2 [&:not(:last-child)]:mb-2 rounded'>
      <AnimatedCheck />
      <div className='mt-1 ml-3'>
        <span>Make coffee</span>
      </div>
    </div>
  );
};

export default TodoItem;
