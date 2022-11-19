'use client';
import { TaskType } from 'interfaces';
import { taskApi } from 'lib/task';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import AnimatedCheck from './AnimatedCheck';
import Input from './Input';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface Props {
  data: TaskType;
}
const TaskItem: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const [subject, setSubject] = useState<string>(data.subject);
  const [isEditing, setEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpdateTask = async (value: Partial<TaskType>, refresh: () => void) => {
    setLoading(true);
    await taskApi.update({
      ...data,
      ...value,
    });
    refresh();
    setEditing(false);
    setLoading(false);
  };

  const handleDeleteTask = async (id: string, refresh: () => void) => {
    setLoading(true);
    await taskApi.delete(id);
    refresh();
    setLoading(false);
  };

  return (
    <div className='flex bg-white dark:bg-[#1c1c1c] p-2 mb-2 last:mb-0 rounded cursor-pointer'>
      <div className='basis-8 mr-2'>
        <AnimatedCheck checked={data.done} toggle={() => handleUpdateTask({ done: !data.done }, router.refresh)} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateTask({ subject }, router.refresh);
        }}
        className='flex-1 flex'>
        <Input
          name='todo'
          value={subject}
          disabled={data.done}
          onChange={(value) => {
            setSubject(value);
            setEditing(true);
          }}
        />
        {!loading ? (
          <>
            {data.done && (
              <button
                type='button'
                onClick={() => handleDeleteTask(data.id, router.refresh)}
                className='text-red-500 text-sm px-2 ml-2 cursor-pointer hover:bg-black/10 dark:hover:bg-black/50 rounded'>
                <FaTrash />
              </button>
            )}
            {isEditing && (
              <button type='submit' className='text-[#0b9219] text-sm px-2 ml-2 cursor-pointer hover:bg-black/10 dark:hover:bg-black/50 rounded'>
                <FaEdit />
              </button>
            )}
          </>
        ) : (
          <div className='grid place-items-center text-blue-500 text-lg font-bold ml-2 w-8 h-8 animate-spin'>
            <AiOutlineLoading3Quarters />
          </div>
        )}
      </form>
    </div>
  );
};

export default TaskItem;
