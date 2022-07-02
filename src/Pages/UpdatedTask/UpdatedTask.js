import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom'

const UpdatedTask = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const { data: task, isLoading } = useQuery('task', () =>
        fetch(`https://nameless-garden-92421.herokuapp.com/task/${id}`, {
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
        fetch(`https://nameless-garden-92421.herokuapp.com/updatedTask/${id}`, {
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
        navigate('/')
    };

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='flex justify-center items-center py-12'>
            <div className="card flex-shrink-0 justify-end w-full max-w-lg">
                <h2 className='text-4xl font-semibold mx-auto'>Updated Task: {task.taskName}</h2>
                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control mb-2">
                            <input placeholder="Task Name" className="input input-bordered" {...register("name", { required: true, maxLength: 20 })} />
                        </div>

                        <div className="form-control mb-2">
                            <input placeholder="Task Description" className="input input-bordered" {...register("detail", { required: true, maxLength: 100 })} />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value='Update Task' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedTask;