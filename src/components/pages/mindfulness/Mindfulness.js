import React, { useState, useEffect, useCallback } from 'react';
import './mindfulness.css'
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"
import moment from 'moment';
import MindfulCard from './MindfulCard';

export default function Mindfulness({ token, weekArray, goalObj, isLoggedIn }) {
    const [Data, setData] = useState({});
    const [thisWeek, setThisWeek] = useState([]);
    const [mindObj, setMindObj] = useState({
        date: '',
        activities_completed: '',
        journal: '',
        overall_mood: '',
        quote_of_the_day: '',
    })
    const [updateReq, setUpdateReq] = useState('');
    const [existingItem, setExistingItem] = useState('');
    const [anotherDate, setAnotherDate] = useState('');
    const [anotherWeek, setAnotherWeek] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        API.getUserMindfulness(token).then((userData) => {
            setData(userData)
            const mindfulnessArray = [];
            weekArray.map(entry => {
                var response = userData.find(data => data.date === entry);
                let dateFormat = entry.slice(5) + "-" + entry.slice(0,4);
                let newObj = { date: dateFormat }

                if (response === undefined) {
                    newObj.status = 'Not Reported';
                } else {
                    const { id, date, activities_completed, journal, overall_mood, quote_of_the_day } = response;
                    newObj.id = id
                    newObj.activities_completed = activities_completed;
                    newObj.journal = journal;
                    newObj.overall_mood = overall_mood;
                    newObj.quote_of_the_day  = quote_of_the_day;
                }
                mindfulnessArray.push(newObj)
            })
            mindfulnessArray[0].day = 'Monday';
            mindfulnessArray[1].day = 'Tuesday';
            mindfulnessArray[2].day = 'Wednesday';
            mindfulnessArray[3].day = 'Thursday';
            mindfulnessArray[4].day = 'Friday';
            mindfulnessArray[5].day = 'Saturday';
            mindfulnessArray[6].day = 'Sunday';
            console.log(mindfulnessArray)
            setThisWeek(mindfulnessArray)
        })
    }, [token, updateReq])

    useEffect(() => {
        API.getOneUserMindfulness(token, mindObj.date).then((res) => {
            if (res.id) {
                setMindObj({
                    date: res.date,
                    activities_completed: res.activities_completed,
                    journal: res.journal,
                    overall_mood: res.overall_mood,
                    quote_of_the_day: res.quote_of_the_day,
                })
                setExistingItem(true);
            } else {
                setExistingItem(false);
            }
        })
    }, [mindObj.date])

    const sendUpdate = useCallback(async (e) => {
        e.preventDefault();
        await API.updateMindfulnessEntry(token, mindObj).then((res) => {
            setUpdateReq(true)
        })
        setMindObj({
            date: '',
            activities_completed: '',
            journal: '',
            overall_mood: '',
            quote_of_the_day: '',
        })
        setUpdateReq(false)
    })

    const sendCreate = useCallback(async (e) => {
        e.preventDefault();
        await API.postMindfulnessEntry(token, mindObj).then((res) => {
            setUpdateReq(true)
        })
        setMindObj({
            date: '',
            activities_completed: '',
            journal: '',
            overall_mood: '',
            quote_of_the_day: '',
        })
        setUpdateReq(false)
    })

    const sendDelete = useCallback(async (e) => {
        e.preventDefault();
        API.deleteMindfulnessEntry(token, mindObj.date).then((response) => {
            setUpdateReq(true)
        })
        setMindObj({
            date: '',
            activities_completed: '',
            journal: '',
            overall_mood: '',
            quote_of_the_day: '',
        })
        setUpdateReq(false)
    })

    const reqAnotherWeek = useCallback( async(e) => {
        e.preventDefault();
            if (anotherDate) {
            let anotherWeek = [];
            for (let i = 1; i < 8; i++) {
                let thisDay = moment(anotherDate).day(i).format("YYYY-MM-DD");
                anotherWeek.push(thisDay)
              }

            const anotherMindfulArray = [];
            anotherWeek.map(entry => {
                var response = Data.find(data => data.date === entry);
                let dateFormat = entry.slice(5) + "-" + entry.slice(0,4);

                let newObj = { date: dateFormat }

                if (response === undefined) {
                    newObj.status = 'Not Reported';
                } else {
                    const { id, date, activities_completed, journal, overall_mood, quote_of_the_day } = response;
                    newObj.id = id
                    newObj.activities_completed = activities_completed;
                    newObj.journal = journal;
                    newObj.overall_mood = overall_mood;
                    newObj.quote_of_the_day  = quote_of_the_day;
                }
                anotherMindfulArray.push(newObj)
            })
            anotherMindfulArray[0].day = 'Monday';
            anotherMindfulArray[1].day = 'Tuesday';
            anotherMindfulArray[2].day = 'Wednesday';
            anotherMindfulArray[3].day = 'Thursday';
            anotherMindfulArray[4].day = 'Friday';
            anotherMindfulArray[5].day = 'Saturday';
            anotherMindfulArray[6].day = 'Sunday';
            setAnotherWeek(anotherMindfulArray)
            setError('')
        } else {
            setError('Please choose a valid date.')
        }
    })

    return (
        <div className="mindful">
            {!isLoggedIn ? (
                <h2><Link class="link-light" to='/login'>Login</Link></h2>
            ) : (
                <>
                <h1>Mindfulness</h1>
                <h2>Your Goals</h2>
                {/* { goalObj.mindful != 0 && (
              <h4 className=''>Your goal was to practice mindfulness {goalObj.mindful} times this week.</h4>
              )} */}
                <h2>Report Mindfulness Practice</h2>
                <form className="mindfulForm">
                    <label htmlFor="mindfulDate">
                            Choose date:
                    </label>
                    <input
                        value={mindObj.date}
                        type="date"
                        name="mindfulDate"
                        onChange={(e) => setMindObj({ ...mindObj, date: e.target.value })}
                    />
                    <label className='mindfulLabel' htmlFor="formType">
                        What mindfulness activities did you complete?
                    </label>
                    <input
                        className='mindfulInput'
                        value={mindObj.activities_completed}
                        type="text"
                        onChange={(e) => setMindObj({ ...mindObj, activities_completed: e.target.value })}
                    />
                    <label className='mindfulLabel' htmlFor="formType">
                        Journal Entry for Today:
                    </label>
                    <input
                        className='mindfulInput'
                        value={mindObj.journal}
                        type="text"
                        onChange={(e) => setMindObj({ ...mindObj, journal: e.target.value })}
                    />
                    <label className='mindfulLabel' htmlFor="formType">
                        What was your overall mood today?
                    </label>
                    <input
                        className='mindfulInput'
                        value={mindObj.overall_mood}
                        type="text"
                        onChange={(e) => setMindObj({ ...mindObj, overall_mood: e.target.value })}
                    />
                    <label className='mindfulLabel' htmlFor="formType">
                        Quote of the day: 
                    </label>
                    <input
                        className='mindfulInput'
                        value={mindObj.quote_of_the_day}
                        type="text"
                        onChange={(e) => setMindObj({ ...mindObj, quote_of_the_day: e.target.value })}
                    />
                    {(existingItem == true) ? (
                        <>
                            <button type="button" className="mindfulBtn" 
                                onClick={sendUpdate}>Update</button>
                            <button type="button" className="mindfulBtn" 
                                onClick={sendDelete}>Delete</button>
                        </>
                    ) : (
                        <button className="mindfulBtn" type="button" onClick={sendCreate}>Submit</button>
                    )}
                </form>

                <br />
                <h2>This week's mindfulness reporting:</h2>
                <MindfulCard
                    results={thisWeek}
                />

            <div className='anotherWeekSection'> 
            <h2>View another week's mindfulness reporting:</h2>
            <form className='chooseDate'>
                <label htmlFor='anotherDate'>Date</label>
                <input
                    value={anotherDate}
                    type="date"
                    name="anotherDate"
                    onChange={(e) => setAnotherDate(e.target.value)}
                />
        {error && (
            <div>
              <p className="error">{error}
              </p>
            </div>
          )}
                <button className="mindfulBtn" type="button" onClick={reqAnotherWeek}>Submit</button>
            </form>
            { anotherWeek ? (
            <MindfulCard
                results={anotherWeek} />
            ) : (
                <></>
                )}
            </div> 

                </>
            )}
        </div>
    );
}
