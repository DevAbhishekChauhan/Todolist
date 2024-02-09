import React, { useState } from 'react';

const Addtask = () => {
    const [inputTask, setInputTask] = useState('hello')
  return (
    <>
      <div className='flex justify-center m-16 gap-2'>
        <input 
        className=' w-[30rem] p-2 rounded-lg text-[1.2rem]
         text-black focus:outline-none '
         value={inputTask} 
        type="text" placeholder='add your task...' />

        <i className="ri-add-circle-line text-5xl text-blue-400 cursor-pointer"></i>
      </div>
    </>
  );
};

export default Addtask;
