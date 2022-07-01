import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import CompletedTasks from '../CompletedTask/CompletedTasks';
import ToDo from '../ToDo/ToDo';

const Home = () => {
    const [date, setDate] = useState(new Date())


    return (
        <div>
            <Calendar date={date} setDate={setDate} />
            <ToDo date={date} />
            <CompletedTasks />
        </div>
    );
};

export default Home;