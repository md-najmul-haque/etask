import React from 'react';
import CompletedTaskDetail from '../CompletedTaskDetail/CompletedTaskDetail';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const CompletedTasks = () => {

    const { data: completed, isLoading, refetch } = useQuery('completed', () =>
        fetch('https://nameless-garden-92421.herokuapp.com/completedTask')
            .then(res => res.json())

    )
    refetch()

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className=''>
            <h1 className='text-4xl font-bold text-center'>Completed Task</h1>
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 py-6'>
                {
                    completed.map(completedTask => <CompletedTaskDetail key={completedTask._id} completedTask={completedTask} />)
                }
            </div>
        </div>
    );
};

export default CompletedTasks;