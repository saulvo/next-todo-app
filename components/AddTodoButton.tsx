'use client';
import { v4 as uuidV4 } from 'uuid';
import { taskApi } from 'lib/task';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddTodoButton: React.FC = () => {
  const router = useRouter();

  const handleAddTask = async () => {
    await taskApi.create({
      id: uuidV4(),
      subject: '',
      done: false,
    });
    router.refresh();
  };

  return (
    <button
      type='button'
      onClick={handleAddTask}
      className='fixed right-5 bottom-5 grid place-items-center w-16 h-16 rounded-full bg-[#0b9219] text-white text-xl'>
      <FaPlus />
    </button>
  );
};

export default AddTodoButton;
