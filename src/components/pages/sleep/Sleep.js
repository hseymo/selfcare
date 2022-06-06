import React, { useState, useEffect } from 'react';
import './sleep.css';
import { Card, Button, Form } from 'react-bootstrap';
import API from "../../../utils/API.js"
import SleepCard from "./SleepCard"

export default function Sleep({ token, weekArray }) {
    const [thisWeek, setThisWeek] = useState([]);
    const [formDate, setFormDate] = useState('');
    const [formTime, setFormTime] = useState('');
    const [formDiffFall, setFormDiffFall] = useState('');
    const [formDiffStay, setFormDiffStay] = useState('');
    const [formMood, setFormMood] = useState('')

    useEffect(() => {
        API.getUserSleep(token).then((userData) => {
            console.log(userData)
            const sleepArray = [];
            weekArray.map(entry => {
                var response = userData.find(data => data.date === entry);
                console.log(response)

                let newObj = { date: entry }

                if (response === undefined) {
                    newObj.status = 'Not Reported';
                } else {
                    const { id, date, time_asleep, diff_falling_asleep, diff_staying_asleep, mood_upon_wake } = response;

                    newObj.id = id;
                    newObj.time_asleep = time_asleep;
                    if (diff_falling_asleep === true) {
                        newObj.diff_falling_asleep = 'Yes'
                    } else {
                        newObj.diff_falling_asleep = 'No'
                    }
                    if (diff_staying_asleep === true) {
                        newObj.diff_staying_asleep = 'Yes'
                    } else {
                        newObj.diff_staying_asleep = 'No'
                    }
                    newObj.mood_upon_wake = mood_upon_wake;
                }
                console.log(newObj)
                sleepArray.push(newObj);
            })
            sleepArray[0].day = 'Monday';
            sleepArray[1].day = 'Tuesday';
            sleepArray[2].day = 'Wednesday';
            sleepArray[3].day = 'Thursday';
            sleepArray[4].day = 'Friday';
            sleepArray[5].day = 'Saturday';
            sleepArray[6].day = 'Sunday';
            console.log(sleepArray)
            setThisWeek(sleepArray)
        })
    }, [token])

    const [sleepDate, setSleepDate] = useState('');
    const [timeAsleep, setTimeAsleep] = useState('');
    const [diffFallingAsleep, setDiffFallingAsleep] = useState('');
    const [diffStayingAsleep, setDiffStayingAsleep] = useState('');
    const [moodAwake, setMoodAwake] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log('sleep data submitted')

        setSleepDate('');
        setTimeAsleep('');
        setDiffFallingAsleep('');
        setDiffStayingAsleep('');
        setMoodAwake('');
    };

    return (
        <Card className="sleep">
            <h1>Sleep</h1>
            <br />
            <Form className='form-horizontal' onSubmit={handleFormSubmit}>
                <h2>Report sleep Data</h2>
                <Form.Label htmlFor='formDate'>Date of sleep</Form.Label>
                <Form.Check
                    value={formDate}
                    type="date"
                    id="formDate"
                    name="formDate"
                    onChange={(e) => setFormDate(e.target.value)}
                />
                <br />
                <Form.Label htmlFor='formTime'>How long did you sleep?</Form.Label>
                <Form.Check
                    value={formTime}
                    type="number"
                    min='0'
                    max='24'
                    id="formTime"
                    name="formTime"
                    onChange={(e) => setFormTime(e.target.value)}
                    placeholder="8 hours"
                />
                <br />
                <Form.Label htmlFor='formDiffFall'>Did you have difficulty falling asleep?</Form.Label>
                {/* CHANGE TO RADIO BUTTONS */}
                <Form.Check
                    value={formDiffFall}
                    type="boolean"
                    id="formDiffFall"
                    name="formDiffFall"
                    onChange={(e) => setFormDiffFall(e.target.value)}
                    placeholder="True/False"
                />
                <br />
                <Form.Label htmlFor='formDiffStay'>Did you have difficulty staying asleep?</Form.Label>
                {/* CHANGE TO RADIO BUTTONS */}
                <Form.Check
                    value={formDiffStay}
                    type="boolean"
                    id="formDiffStay"
                    name="formDiffStay"
                    onChange={(e) => setFormDiffStay(e.target.value)}
                    placeholder="True/False"
                />
                <br />
                <Form.Label htmlFor='moodAwake'>How did you feel when you woke up?</Form.Label>
                <Form.Check
                    value={formMood}
                    type="text"
                    id="formMood"
                    name="formMood"
                    onChange={(e) => setFormMood(e.target.value)}
                    placeholder="Rested"
                />
                <Button type="submit">Submit</Button>
            </Form>
            <h3> This week's sleep reporting:</h3>
            <SleepCard
                name='sleep'
                results={thisWeek} />
        </Card>
    );
}
