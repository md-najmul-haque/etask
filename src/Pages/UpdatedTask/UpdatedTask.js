import { format } from 'date-fns';
import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'

const UpdatedTask = () => {
    const { id } = useParams();

    const { data: task, isLoading } = useQuery('task', () =>
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
    )

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const updatedTask = {
            taskName: data.name,
            taskDetail: data.detail,
        }
        fetch(`http://localhost:5000/updatedTask/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Your task is successfully updated.')
                } else {
                    toast.error('Sorry! Your task is not updated. Please try again later.')
                }
            })
    };

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='flex justify-center items-center py-12'>
            <div class="card flex-shrink-0 justify-end w-full max-w-lg">
                <h2 className='text-4xl font-semibold mx-auto'>Updated Task: {task.taskName}</h2>
                <div class="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control mb-2">
                            <input placeholder="Task Name" class="input input-bordered" {...register("name", { required: true, maxLength: 20 })} />
                        </div>

                        <div class="form-control mb-2">
                            <input placeholder="Task Description" class="input input-bordered" {...register("detail", { required: true, maxLength: 100 })} />
                        </div>

                        <div class="form-control mt-6">
                            <input class="btn btn-primary" type="submit" value='Update Task' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedTask;