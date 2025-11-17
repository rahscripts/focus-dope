'use client';

import { useState } from 'react'

const Tasks = () => {

  const [todo, setTodo] = useState('');
  const [task, setTask] = useState([]);

  const OnClickAdd = () => {
    if (!todo.trim()) return;

    setTask((prev) => [...prev, todo]);
    setTodo('');
  };

  return (
    <section>
      <div className='flex justify-between my-10'>
        <div>
          <input 
            type="text"
            value={todo}
            placeholder='enter a task'
            onChange={(e) => setTodo(e.target.value)}
            className='border-1 p-1 text-primary rounded-sm w-70'
          />
        </div>

        <div>
          <button className='btn btn-primary' onClick={OnClickAdd}>
            Add task
          </button>
        </div>
      </div>

      <div className='font-bold text-3xl'>TASK LIST:</div>

      <div className='flex flex-col gap-2 mt-4'>
        {task.map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
    </section>
  )
}

export default Tasks;