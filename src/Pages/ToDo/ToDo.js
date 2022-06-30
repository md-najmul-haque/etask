import { format } from 'date-fns';
import React from 'react';



const ToDo = ({ data }) => {

    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Task Title</h2>
                            <p>Task Description</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Edit Task</button>
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm">
                    <h2 className='mx-auto'>Add Task</h2>
                    <div class="card-body">
                        <div class="form-control">
                            <input type="text" placeholder="Task Name" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <input type="text" placeholder="Task Description" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <input type="text" value={format(data, 'PP')} placeholder="Task Description" class="input input-bordered" required />
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;