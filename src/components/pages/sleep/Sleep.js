import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './sleep.css';

export default function Sleep() {

    const [sleepDate, setSleepDate] = useState('');
    const [timeAsleep, setTimeAsleep] = useState('');
    const [diffFallingAsleep, setDiffFallingAsleep] = useState('');
    const [diffStayingAsleep, setDiffStayingAsleep] = useState('');
    const [moodAwake, setMoodAwake] = useState('');

    const handleSleepInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === Date) {
            setSleepDate(inputValue);
        } else if (inputType === 'timeAsleep') {
            setTimeAsleep(inputValue);
        } else if (inputType === 'diffFallingAsleep') {
            setDiffFallingAsleep(inputValue);
        } else if (inputType === 'diffStayingAsleep') {
            setDiffStayingAsleep(inputValue);
        } else if (inputType === 'moodAwake') {
            setMoodAwake(inputValue);
        }
    };

    const handleSleepSubmit = (e) => {
        e.preventDefault();

        console.log('sleep data submitted')

        setSleepDate('');
        setTimeAsleep('');
        setDiffFallingAsleep('');
        setDiffStayingAsleep('');
        setMoodAwake('');
    };


    return (
        <div className="sleep">
            <h1>Sleep</h1>
            <br />
            <nav className="sleepWeek">
                <form className='form-horizontal'>
                    <label htmlFor='sleepDate'>Date of sleep</label>
                    <input
                        id="sleepDay"
                        type="date"
                        // value={sleepDate}
                        name="sleepDate"
                        onChange={handleSleepInputChange}
                    />
                    <br/>
                    <label htmlFor='timeAsleep'>How long did you sleep?</label>
                    <input
                        type="text"
                        value={timeAsleep}
                        name="timeAsleep"
                        onChange={handleSleepInputChange}
                        placeholder="8 hours"
                    />
                    <br />
                    <label htmlFor='diffFallingAsleep'>Did you have difficulty falling asleep?</label>
                    <input
                        type="text"
                        value={diffFallingAsleep}
                        name="diffFallingAsleep"
                        onChange={handleSleepInputChange}
                        placeholder="No"
                    />
                    <br />
                    <label htmlFor='diffStayingAsleep'>Did you have difficulty staying asleep?</label>
                    <input
                        type="text"
                        value={diffStayingAsleep}
                        name="diffStayingAsleep"
                        onChange={handleSleepInputChange}
                        placeholder="No"
                    />
                    <br />
                    <label htmlFor='moodAwake'>How did you feel when you woke up?</label>
                    <input
                        type="text"
                        value={moodAwake}
                        name="moodAwake"
                        onChange={handleSleepInputChange}
                        placeholder="Rested"
                    />
                    <button type="button" onClick={handleSleepSubmit}>Submit</button>
                </form>
            </nav>
        </div>
    );
}
