import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

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
        <div className="card w-96 flex-row items-center px-5 mx-auto">

            <div>
                <input type="radio" onChange={() => handleRadioButton(_id)} name="radio-2" className="radio radio-accent" />
            </div>
            <div className="card-body text-left">
                <h2 className="card-title">{taskName}</h2>
                <p className=''>{taskDetail}</p>
                <p>{taskDate}</p>
            </div>
            <div className="card-actions justify-end">
                <Link to={`/updatedTask/${_id}`} className="btn btn-accent">Edit Task</Link>
            </div>
        </div >


    );
};

export default Task;