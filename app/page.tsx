import TodoItem from "@/components/TodoItem";

export default function Home() {
  return (
    <div className='absolute inset-0 w-full max-h-full overflow-auto rounded bg-black/10 dark:bg-white/5 p-4'>
      <div>
        {[...new Array(5)].map((_, idx) => (
          <TodoItem key={idx}/>
        ))}
      </div>
    </div>
  );
}
