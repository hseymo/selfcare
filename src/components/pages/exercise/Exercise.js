import React, { useState, useEffect, useCallback } from 'react';
import './Exercise.css'
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js";
import ExerciseCard from "./ExerciseCard";
import moment from 'moment';

export default function Fitness({ token, weekArray, goalObj, isLoggedIn }) {
    const [thisWeek, setThisWeek] = useState([]);
    const [exerciseFormObject, setExerciseFormObject] = useState({
        date: '',
        activity_type: '',
        activity_duration: '',
        RPE: '',
        notes: ''
    })
    const [updateReq, setUpdateReq] = useState('');
    const [existingItem, setExistingItem] = useState('');
    const [anotherDate, setAnotherDate] = useState('');
    const [anotherWeek, setAnotherWeek] = useState('');
    
    useEffect(() => {
        API.getUserFitness(token).then((userData) => {
            // console.log(userData)
            const fitnessArray = [];
            console.log(weekArray)
            weekArray.map(entry => {
                var response = userData.find(data => data.date === entry);
                console.log(response)
                let dateFormat = entry.slice(5) + "-" + entry.slice(0,4);
                let newObj = { date: dateFormat }

                if (response === undefined) {
                    newObj.status = 'Not Reported';
                } else {
                    const { id, date, activity_type, activity_duration, RPE, notes } = response;
                    newObj.id = id
                    newObj.activity_type = activity_type;
                    newObj.activity_duration = activity_duration;
                    newObj.RPE = RPE;
                    newObj.notes = notes;
                }
                fitnessArray.push(newObj)
            })
            console.log(fitnessArray);
            fitnessArray[0].day = 'Monday';
            fitnessArray[1].day = 'Tuesday';
            fitnessArray[2].day = 'Wednesday';
            fitnessArray[3].day = 'Thursday';
            fitnessArray[4].day = 'Friday';
            fitnessArray[5].day = 'Saturday';
            fitnessArray[6].day = 'Sunday';
            setThisWeek(fitnessArray)
        })
    }, [token, updateReq])

    useEffect(() => {
        API.getOneUserFitness(token, exerciseFormObject.date).then((res) => {
            console.log(res)
            if (res.id) {
                setExerciseFormObject({
                    date: res.date,
                    activity_type: res.activity_type,
                    activity_duration: res.activity_duration,
                    RPE: res.RPE,
                    notes: res.notes
                })
                setExistingItem(true);
            } else {
                setExistingItem(false);
            }
        })
    }, [exerciseFormObject.date])

    const sendUpdate = useCallback(async (e) => {
        e.preventDefault();
        await API.updateFitnessEntry(token, exerciseFormObject).then((res) => {
            console.log(res);
            console.log('Fitness entry updated')
            setUpdateReq(true)
        })
        setExerciseFormObject({
            date: '',
            activity_type: '',
            activity_duration: '',
            RPE: '',
            notes: ''
        })
        setUpdateReq(false)
    })

    const sendCreate = useCallback(async (e) => {
        e.preventDefault();
        await API.postFitnessEntry(token, exerciseFormObject).then((res) => {
            console.log(res);
            console.log('New fitness entry created')
            setUpdateReq(true)
        })
        setExerciseFormObject({
            date: '',
            activity_type: '',
            activity_duration: '',
            RPE: '',
            notes: ''
        })
        setUpdateReq(false)
    })

    const sendDelete = useCallback(async (e) => {
        e.preventDefault();
        API.deleteFitnessEntry(token, exerciseFormObject.date).then((response) => {
            console.log(response)
            setUpdateReq(true)
        })
        setExerciseFormObject({
            date: '',
            activity_type: '',
            activity_duration: '',
            RPE: '',
            notes: ''
        })
        setUpdateReq(false)
    })

    const reqAnotherWeek = useCallback( async(e) => {
        e.preventDefault();
        await API.getUserFitness(token).then((userData) => {
            console.log('changed')
            let anotherWeek = [];
            for (let i = 1; i < 8; i++) {
                let thisDay = moment(anotherDate).day(i).format("YYYY-MM-DD");
                anotherWeek.push(thisDay)
              }
            console.log(anotherWeek)

            const anotherFitnessArray = [];
            anotherWeek.map(entry => {
                var response = userData.find(data => data.date === entry);
                let dateFormat = entry.slice(5) + "-" + entry.slice(0,4);

                let newObj = { date: dateFormat }

                if (response === undefined) {
                    newObj.status = 'Not Reported';
                } else {
                    const { id, date, activity_type, activity_duration, RPE, notes } = response;
                    newObj.id = id
                    newObj.activity_type = activity_type;
                    newObj.activity_duration = activity_duration;
                    newObj.RPE = RPE;
                    newObj.notes = notes;
                }
                anotherFitnessArray.push(newObj)
            })
            console.log(anotherFitnessArray)
            anotherFitnessArray[0].day = 'Monday';
            anotherFitnessArray[1].day = 'Tuesday';
            anotherFitnessArray[2].day = 'Wednesday';
            anotherFitnessArray[3].day = 'Thursday';
            anotherFitnessArray[4].day = 'Friday';
            anotherFitnessArray[5].day = 'Saturday';
            anotherFitnessArray[6].day = 'Sunday';
            setAnotherWeek(anotherFitnessArray)
        })
    })


    return (
        <div className="fitness">
            {!isLoggedIn ? (
                <h2><Link class="link-light" to='/login'>Login</Link></h2>
            ) : (
            <>
            <h1>Fitness</h1>
            <h2>Your Goals</h2>
            {goalObj.fitness_time != 0 && (
                <h4 className=''>Your exercise time goal is {goalObj.fitness_time} minutes per week. </h4>
            )}
            {goalObj.fitness_frequency != 0 && (
                <h4 className=''>Your exercise frequency goal is {goalObj.fitness_frequency} days per week. </h4>
            )}
            <h2>Report Fitness Data</h2>
            <form className="fitnessForm">
                    <label className='fitnessLabel' htmlFor="formDate">
                        Choose date:
                    </label>
                    <input 
                        className='fitnessInput'
                        value={exerciseFormObject.date}
                        type="date"
                        id="formDate"
                        name="formDate"
                        onChange={(e) => setExerciseFormObject({ ...exerciseFormObject, date: e.target.value })}
                    />
                    <label className='fitnessLabel' htmlFor="formType">
                        What type of exercise did you complete?
                    </label>
                    <input
                        className='fitnessInput'
                        value={exerciseFormObject.activity_type}
                        type="text"
                        id="formType"
                        name="formType"
                        onChange={(e) => setExerciseFormObject({ ...exerciseFormObject, activity_type: e.target.value })}
                    />
                    <label className='fitnessLabel' htmlFor="formDuration">
                        How long did you exercise for (in minutes)? Note: if you did not exercise, report '0'.
                    </label>
                    <input
                        className='fitnessInput'
                        value={exerciseFormObject.activity_duration}
                        type="number"
                        id="formDuration"
                        min='0'
                        name="formDuration"
                        onChange={(e) => setExerciseFormObject({ ...exerciseFormObject, activity_duration: e.target.value })}
                    />
                    <label className='fitnessLabel' htmlFor="formRPE">
                        On an Rate of Perceived Exertion Scale (RPE) from 0 (easy) to 10 (extremely difficult), how hard did you work?
                    </label>
                    <input
                        className='fitnessInput'
                        value={exerciseFormObject.RPE}
                        type="number"
                        min="0"
                        max='10'
                        id="formRPE"
                        name="formRPE"
                        onChange={(e) => setExerciseFormObject({ ...exerciseFormObject, RPE: e.target.value })} />
                    <label className='fitnessLabel' htmlFor="formNotes">
                        Notes from your workout:
                    </label>
                    <input
                        className='fitnessInput'
                        value={exerciseFormObject.notes}
                        type="text"
                        id="formNotes"
                        name="formNotes"
                        onChange={(e) => setExerciseFormObject({ ...exerciseFormObject, notes: e.target.value })}
                    />
                    <br />
                    {(existingItem == true) ? (
                        <>
                            <button type="button" className="fitnessBtn" 
                                onClick={sendUpdate}>Update</button>
                            <button type="button" className="fitnessBtn" 
                                onClick={sendDelete}>Delete</button>
                        </>
                    ) : (
                        <button className="fitnessBtn" type="button" onClick={sendCreate}>Submit</button>
                    )}
            </form>

            <br />
            <h2>This week's fitness reporting: </h2>
            <ExerciseCard
                results={thisWeek}
            />


        <div className='anotherWeekSection'> 
            <h2>View another week's fitness reporting:</h2>
            <form className='chooseDate'>
                <label htmlFor='anotherDate'>Date</label>
                <input
                    value={anotherDate}
                    type="date"
                    name="anotherDate"
                    onChange={(e) => setAnotherDate(e.target.value)}
                />
                <button className="fitnessBtn" type="button" onClick={reqAnotherWeek}>Submit</button>
            </form>
            { anotherWeek ? (
            <ExerciseCard
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