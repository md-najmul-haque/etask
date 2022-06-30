import React, { useState } from 'react';
import task from '../../assets/task.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calendar = () => {
    const [data, setDate] = useState(new Date())
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <div className='flex-1 mx-auto'>
                    <img src={task} alt='' />
                </div>

                <div className='flex-1 mx-auto'>
                    <DayPicker
                        mode="single"
                        selected={data}
                        onSelect={setDate}
                    />
                    <p className='ml-5'>You picked {format(data, 'PP')}.</p>;
                </div>
            </div>
        </div>
    );
};

export default Calendar;