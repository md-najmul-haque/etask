import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import ToDo from '../ToDo/ToDo';

const Home = () => {
    const [data, setDate] = useState(new Date())

    return (
        <div>
            <Calendar data={data} setDate={setDate} />
            <ToDo data={data} />
        </div>
    );
};

export default Home;