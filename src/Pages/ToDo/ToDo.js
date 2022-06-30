import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Task from '../Task/Task';



const ToDo = ({ date }) => {
    const [data, setData] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const task = {
            taskName: data.name,
            taskDetail: data.detail,
            taskDate: data.date
        }
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    };

    useEffect(() => {

        fetch('http://localhost:5000/task', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    {
                        data.map(task => <Task key={task._id} task={task}></Task>)

                    }
                </div>

                <div class="card flex-shrink-0 w-full max-w-sm">
                    <h2 className='text-4xl font-bold mx-auto'>Add Task</h2>
                    <div class="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control mb-2">
                                <input placeholder="Task Name" class="input input-bordered" {...register("name", { required: true, maxLength: 20 })} />
                            </div>

                            <div class="form-control mb-2">
                                <input placeholder="Task Description" class="input input-bordered" {...register("detail", { required: true, maxLength: 100 })} />
                            </div>

                            <div class="form-control mb-2">
                                <input class="input input-bordered" value={format(date, 'PP')} {...register("date")} />
                            </div>
                            <div class="form-control mt-6">
                                <input class="btn btn-primary" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ToDo;