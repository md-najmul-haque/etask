import { format } from 'date-fns';
import React from 'react';
import { useForm } from "react-hook-form";
import Task from '../Task/Task';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const ToDo = ({ date }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        const task = {
            taskName: data.name,
            taskDetail: data.detail,
            taskDate: data.date,
            completed: false
        }
        fetch('https://nameless-garden-92421.herokuapp.com/task', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Your new task is successfully added.')
                } else {
                    toast.error('Sorry! Your task is not added. Please try again later.')
                }
            })


    };

    const { data: pendingTask, isLoading, refetch } = useQuery('pendingTask', () =>
        fetch('https://nameless-garden-92421.herokuapp.com/task', {
            method: 'GET'
        })
            .then(res => res.json())
    )

    refetch()

    if (isLoading) {
        return <Loading />
    }

    return (

        <div id='todo' className='mx-auto lg:pl-20'>
            <h1 className='text-4xl font-bold text-center'>Your Pending Task</h1>

            <div className="py-10">
                <div className="flex flex-col-reverse lg:flex-row justify-center gap-x-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                        {
                            pendingTask.map(task => <Task key={task._id} task={task}></Task>)

                        }
                    </div>

                    <div className="card flex-shrink-0 justify-end w-full max-w-lg">
                        <h2 className='text-4xl font-semibold mx-auto'>Add Task</h2>
                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control mb-2">
                                    <input placeholder="Task Name" className="input input-bordered" {...register("name", { required: true, maxLength: 20 })} />
                                </div>

                                <div className="form-control mb-2">
                                    <input placeholder="Task Description" className="input input-bordered" {...register("detail", { required: true, maxLength: 100 })} />
                                </div>

                                <div className="form-control mb-2">
                                    <input className="input input-bordered" value={format(date, 'PP')} {...register("date")} />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value='Add Task' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default ToDo;