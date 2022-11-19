import AddTodoButton from 'components/AddTodoButton';
import TaskItem from 'components/TaskItem';
import { taskApi } from 'lib/task';

export default async function Home() {
  const tasks = await taskApi.getAll();

  return (
    <div className='absolute inset-0 w-full h-max max-h-full overflow-auto rounded bg-black/10 dark:bg-white/5'>
      {tasks.length > 0 ? (
        <div className='p-4'>
          {tasks.map((todo) => (
            <TaskItem key={todo.id} data={todo} />
          ))}
        </div>
      ) : (
        <div className='p-4 text-center text-gray-500 font-medium'>No tasks</div>
      )}
      <AddTodoButton />
    </div>
  );
}

export const revalidate = 10;
