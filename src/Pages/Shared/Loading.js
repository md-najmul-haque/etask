import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <ReactLoading type={'spokes'} color={'#37CDBE'} height={100} width={40} />
        </div>
    );
};

export default Loading;