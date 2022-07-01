import React from 'react';
import { toast } from 'react-toastify';

const Task = ({ task }) => {

    const { _id, taskName, taskDetail, taskDate } = task

    const handleRadioButton = (id) => {

        const completed = {
            completed: true
        }

        fetch(`https://nameless-garden-92421.herokuapp.com/task/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(completed)
        })
            .then(res => res.json())
            .then(data => {
                if (data.$set.completed === true) {
                    toast.success('Congrats! You have completed this task successfully')
                }
            })

    }

    return (
        <div class="card w-96 flex-row items-center px-5 mx-auto">

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