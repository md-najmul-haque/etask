import React from 'react';

const CompletedTaskDetail = ({ completedTask }) => {
    const { taskName, taskDetail, taskDate } = completedTask
    return (
        <div className='mx-auto'>
            <div className="card w-96 flex-row items-center px-5">

                <div>
                    <input type="radio" name="radio-2" className="radio radio-primary" disabled />
                </div>
                <div className="card-body text-left">
                    <h2 className="card-title">{taskName}</h2>
                    <p className=''>{taskDetail}</p>
                    <p>{taskDate}</p>
                </div>
            </div>
        </div>
    );
};

export default CompletedTaskDetail;