import React from 'react';

const CompletedTaskDetail = ({ completedTask }) => {
    const { taskName, taskDetail, taskDate } = completedTask
    return (
        <div className='mx-auto'>
            <div class="card w-96 bg-base-100 flex-row items-center">

                <div>
                    <input type="radio" name="radio-2" class="radio radio-primary" disabled />
                </div>
                <div class="card-body text-left">
                    <h2 class="card-title">{taskName}</h2>
                    <p className=''>{taskDetail}</p>
                    <p>{taskDate}</p>
                </div>
            </div>
        </div>
    );
};

export default CompletedTaskDetail;