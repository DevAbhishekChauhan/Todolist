import React from 'react';

const TaskList = () => {
  return (
    <>
    <div className="w-[35rem] p-3 rounded-lg  text-[1.2rem]  flex flex-col gap-3">
        <div className='w-full bg-blue-700 p-2 rounded-lg text-[1.2rem] border flex justify-between items-center gap-2'>
            <div className='flex gap-2 '>
                <input type="checkbox" />
                <div className="">reaxct app</div>
            </div>
            <i className="ri-delete-bin-6-line text-orange-400 font-bold"></i>
        </div>

    </div>
    </>
  );
};

export default TaskList;
