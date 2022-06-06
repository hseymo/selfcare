import React, { useState, useEffect, useCallback } from 'react';
import './sleep.css';
import { Card, Button, Form } from 'react-bootstrap';
import API from "../../../utils/API.js"
import SleepCard from "./SleepCard"

export default function Sleep({token, weekArray}) {
const [thisWeek, setThisWeek] = useState([]);
const [formDate, setFormDate] = useState('');
const [formTime, setFormTime] = useState('');
const [formDiffFall, setFormDiffFall] = useState('');
const [formDiffStay, setFormDiffStay] = useState('');
const [formMood, setFormMood] = useState('');
const [formObj, setFormObj] = useState({});
const [deleteReq, setDeleteReq] = useState('');
const [updateReq, setUpdateReq] = useState('');
const [existingItem, setExistingItem] = useState('');

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
                const {id, date, time_asleep, diff_falling_asleep, diff_staying_asleep, mood_upon_wake } = response;

                newObj.id = id;
                newObj.time_asleep = time_asleep;
                newObj.mood_upon_wake = mood_upon_wake;
                if (diff_falling_asleep === true ) {
                    newObj.diff_falling_asleep = 'true'
                } else {
                    newObj.diff_falling_asleep = 'false'
                }
                if (diff_staying_asleep === true) {
                    newObj.diff_staying_asleep = 'true'
                } else {
                    newObj.diff_staying_asleep = 'false'
                }
                console.log(newObj)
            }
            sleepArray.push(newObj);
        })
            console.log(sleepArray)
            sleepArray[0].day = 'Monday';
            sleepArray[1].day = 'Tuesday';
            sleepArray[2].day = 'Wednesday';
            sleepArray[3].day = 'Thursday';
            sleepArray[4].day = 'Friday';
            sleepArray[5].day = 'Saturday';
            sleepArray[6].day = 'Sunday';
            setThisWeek(sleepArray)
        })
    }, [token])

    useEffect(() => {
        API.getOneUserSleep(token, formDate).then((res) => {
            console.log(res)
            if (res.id) {
                setFormTime(res.time_asleep);
                setFormDiffFall(res.diff_falling_asleep);
                setFormDiffStay(res.diff_staying_asleep);
                setFormMood(res.mood_upon_wake);
                setExistingItem(true);
            } else {
                setFormTime('');
                setFormDiffFall('');
                setFormDiffStay('');
                setFormMood('');
                setExistingItem(false);
            }
        })
    }, [formDate])

    function handleFormSubmit (e) {
        e.preventDefault();
        if (formDate != '' && formTime != '') {
            setFormObj({
                date: formDate,
                time_asleep: formTime,
                diff_falling_asleep: formDiffFall,
                diff_staying_asleep: formDiffStay,
                mood_upon_wake: formMood
            })
            console.log('sleep form object', formObj)
        setFormDate('')
        setFormTime('');
        setFormDiffFall('');
        setFormDiffStay('');
        setFormMood('');
        } else {
            alert("Please enter date and time asleep")
        }
    };

    useEffect(()=> {
        if (existingItem == true) {
            API.updateSleepEntry(token, formObj).then((res) => {
                console.log(res);
                console.log('Sleep entry updated')
            })
        } else if (existingItem == false) {
            API.postSleepEntry(token, formObj).then((res) => {
                console.log(res);
                console.log('New sleep entry created')
            })
        }
        // NEED TO RELOAD CARDS
        setUpdateReq(true)
    }, [formObj])

    const sendDelete = useCallback(async () => {
        API.deleteSleepEntry(token, formDate).then((response) => {
            console.log(response)
        })
        // NEED TO RELOAD CARDS
        setUpdateReq(true)
    })

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
                        placeholder="true/false"
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
                        placeholder="true/false"
                    />
                    <br />
                    <Form.Label htmlFor='formMood'>How did you feel when you woke up?</Form.Label>
                    <Form.Check
                        value={formMood}
                        type="text"
                        id="formMood"
                        name="formMood"
                        onChange={(e) => setFormMood(e.target.value)}
                        placeholder="Rested"
                    />
                    <Button type="submit">Submit</Button>
                    { (existingItem == true) ? (
                            <Button type="button"
                            onClick={sendDelete}>Delete</Button>
                        ) : (
                            <></>
                        )}
                </Form>
        <h3> This week's sleep reporting:</h3>
        <SleepCard 
            name='sleep' 
            results={thisWeek}/>
        </Card>
    );
}
