import React, { useState, useEffect } from 'react';
import './sleep.css';
import { Card, Button, Form } from 'react-bootstrap';
import API from "../../../utils/API.js"

export default function Sleep(token) {


    const [sleepDate, setSleepDate] = useState('');
    const [timeAsleep, setTimeAsleep] = useState('');
    const [diffFallingAsleep, setDiffFallingAsleep] = useState('');
    const [diffStayingAsleep, setDiffStayingAsleep] = useState('');
    const [moodAwake, setMoodAwake] = useState('');

    const handleSleepInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === Date.format('yyyy-MM-dd')) {
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

    useEffect(() => {
        API.getUserSleep(token).then((userData)=>{
        userData.map(entry => {
          const {id, date, time_asleep, diff_falling_asleep, diff_staying_asleep, mood_upon_wake } = entry;
        })
        })
      }, [token])

    return (
        <Card className="sleep">
            <h1>Sleep</h1>
            <br />
            <nav className="sleepWeek">
                <Form className='form-horizontal'>
                    <Form.Label htmlFor='sleepDate'>Date of sleep</Form.Label>
                    <Form.Check
                        id="sleepDay"
                        type="date"
                        // value={sleepDate}
                        name="sleepDate"
                        onChange={handleSleepInputChange}
                    />
                    <br />
                    <Form.Label htmlFor='timeAsleep'>How long did you sleep?</Form.Label>
                    <Form.Check
                        id="sleepTime"
                        type="text"
                        value={timeAsleep}
                        name="timeAsleep"
                        onChange={handleSleepInputChange}
                        placeholder="8 hours"
                    />
                    <br />
                    <Form.Label htmlFor='diffFallingAsleep'>Did you have difficulty falling asleep?</Form.Label>
                    <Form.Check
                        id="sleepFall"
                        type="text"
                        value={diffFallingAsleep}
                        name="diffFallingAsleep"
                        onChange={handleSleepInputChange}
                        placeholder="No"
                    />
                    <br />
                    <Form.Label htmlFor='diffStayingAsleep'>Did you have difficulty staying asleep?</Form.Label>
                    <Form.Check
                        id="sleepStay"
                        type="text"
                        value={diffStayingAsleep}
                        name="diffStayingAsleep"
                        onChange={handleSleepInputChange}
                        placeholder="No"
                    />
                    <br />
                    <Form.Label htmlFor='moodAwake'>How did you feel when you woke up?</Form.Label>
                    <Form.Check
                        id="sleepFeel"
                        type="text"
                        value={moodAwake}
                        name="moodAwake"
                        onChange={handleSleepInputChange}
                        placeholder="Rested"
                    />
                    <Button type="button" onClick={handleSleepSubmit}>Submit</Button>
                </Form>
            </nav>
        </Card>
    );
}
