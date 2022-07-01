import React from 'react';

const Task = ({ task }) => {

    const { _id, taskName, taskDetail, taskDate } = task

    const handleRadioButton = (id) => {

        const completed = {
            completed: true
        }

        fetch(`http://localhost:5000/task/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(completed)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (

        <div class="card w-96 bg-base-100 flex-row items-center">

            <div>
                <input type="radio" onChange={() => handleRadioButton(_id)} name="radio-2" class="radio radio-primary" />
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