import React from 'react';

const Task = ({ task }) => {
    console.log(task);
    const { taskName, taskDetail, taskDate } = task
    return (

        <div class="card w-96 bg-base-100 flex-row items-center">


            <div>
                <input type="radio" name="radio-2" class="radio radio-primary" />
            </div>
            <div class="card-body text-left">
                <h2 class="card-title">{taskName}</h2>
                <p className=''>{taskDetail}</p>
                <p>{taskDate}</p>
            </div>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Edit Task</button>
            </div>
        </div>


    );
};

export default Task;