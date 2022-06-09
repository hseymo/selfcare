import React, { useState, useEffect, useCallback } from 'react';
import './hydration.css';
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js";
import HydrationCard from './HydrationCard';
import moment from 'moment'
import Progress from './Progress';
import utilToday from '../../../utils/today.js';

export default function Hydration({ token, weekArray, goalObj, isLoggedIn }) {
    const [today, setToday] = useState(utilToday);
    const [thisWeek, setThisWeek] = useState([]);
    const [hydrationFormObject, setHydrationFormObject] = useState({
        date: '',
        water_oz: ''
    })
    const [updateReq, setUpdateReq] = useState('');
    const [existingItem, setExistingItem] = useState('');
    const [anotherDate, setAnotherDate] = useState('');
    const [anotherWeek, setAnotherWeek] = useState('');

    useEffect(() => {
        API.getUserHydration(token).then((userData) => {
            console.log(userData)
            const hydrationArray = [];
            weekArray.map(entry => {
                var response = userData.find(data => data.date === entry);
                let dateFormat = entry.slice(5) + "-" + entry.slice(0,4);
                console.log(response)

                let newObj = { date: dateFormat }

                if (response === undefined) {
                    newObj.status = 'Not Reported';
                } else {
                    const { id, date, water_oz } = response;
                    newObj.id = id;
                    newObj.water_oz = water_oz
                }
                hydrationArray.push(newObj)
            })
            hydrationArray[0].day = 'Monday';
            hydrationArray[1].day = 'Tuesday';
            hydrationArray[2].day = 'Wednesday';
            hydrationArray[3].day = 'Thursday';
            hydrationArray[4].day = 'Friday';
            hydrationArray[5].day = 'Saturday';
            hydrationArray[6].day = 'Sunday';
            console.log(hydrationArray)
            setThisWeek(hydrationArray)
            var todaysResponse = userData.find(data => data.date === utilToday)
            setToday(todaysResponse.water_oz);
            console.log(today);
            console.log('-----------------------------', todaysResponse);
            console.log('-----------------------------',goalObj)
        })
    }, [token, updateReq])

    

    useEffect(() => {
        API.getOneUserHydration(token, hydrationFormObject.date).then((response) => {
            console.log(response)
            if (response.id) {
                setHydrationFormObject({
                    date: response.date,
                    water_oz: response.water_oz
                })
                setExistingItem(true);
            } else {
                setExistingItem(false);
            }
        })
    }, [hydrationFormObject.date])

    const sendUpdate = useCallback(async (e) => {
        e.preventDefault();
        await API.updateHydrationEntry(token, hydrationFormObject).then((res) => {
            console.log(res);
            console.log('Hydration Entry updated')
            setUpdateReq(true)
        })
        setHydrationFormObject({
            date: '',
            water_oz: ''
        })
        setUpdateReq(false)
    })

    const sendCreate = useCallback(async (e) => {
        e.preventDefault();
        API.postHydrationEntry(token, hydrationFormObject).then((res) => {
            console.log(res);
            console.log('New hydration entry created')
            setUpdateReq(true)
        })
        setHydrationFormObject({
            date: '',
            water_oz: ''
        })
        setUpdateReq(false)
    })

    const sendDelete = useCallback(async (e) => {
        e.preventDefault();
        API.deleteHydrationEntry(token, hydrationFormObject.date).then((response) => {
            console.log(response)
            setUpdateReq(true)
        })
        setHydrationFormObject({
            date: '',
            water_oz: ''
        })
        setUpdateReq(false)
    })

    const reqAnotherWeek = useCallback( async(e) => {
        e.preventDefault();
        await API.getUserHydration(token).then((userData) => {
            console.log('changed')
            let anotherWeek = [];
            for (let i = 1; i < 8; i++) {
                let thisDay = moment(anotherDate).day(i).format("YYYY-MM-DD");
                anotherWeek.push(thisDay)
              }
            console.log(anotherWeek)

            const anotherHydrationArray = [];
            anotherWeek.map(entry => {
                var response = userData.find(data => data.date === entry);
                let dateFormat = entry.slice(5) + "-" + entry.slice(0,4);

                let newObj = { date: dateFormat }

                if (response === undefined) {
                    newObj.status = 'Not Reported';
                } else {
                    const { id, date, water_oz } = response;
                    newObj.id = id;
                    newObj.water_oz = water_oz
                }
                anotherHydrationArray.push(newObj);
            })
            console.log(anotherHydrationArray)
            anotherHydrationArray[0].day = 'Monday';
            anotherHydrationArray[1].day = 'Tuesday';
            anotherHydrationArray[2].day = 'Wednesday';
            anotherHydrationArray[3].day = 'Thursday';
            anotherHydrationArray[4].day = 'Friday';
            anotherHydrationArray[5].day = 'Saturday';
            anotherHydrationArray[6].day = 'Sunday';
            setAnotherWeek(anotherHydrationArray)
        })
    })

    return (
    <div className="hydration">
        {!isLoggedIn ? (
            <h2><Link class="link-light" to='/login'>Login</Link></h2>
            ) : (
                <>
                <h1>Hydration</h1>
                <h2>Your Goals</h2>
                {goalObj.hydration_oz != 0 && (
                    <h4 className=''>Your daily water intake goal is {goalObj.hydration_oz} oz.</h4>
                )}
                <h2>Report Water Intake</h2>
                <form className="waterForm">
                    <label htmlFor="waterDate">
                        Choose date:
                    </label>
                    <input
                        value={hydrationFormObject.date}
                        type="date"
                        id="waterDate"
                        name="waterDate"
                        onChange={(e) => setHydrationFormObject({ ...hydrationFormObject, date: e.target.value })}
                    />
                    <label htmlFor="waterAmount">
                        How many ounces did you drink?
                    </label>
                    <input
                        value={hydrationFormObject.water_oz}
                        min="0"
                        max="1000"
                        type="number"
                        id="waterAmount"
                        name="waterAmount"
                        onChange={(e) => setHydrationFormObject({ ...hydrationFormObject, water_oz: e.target.value })}
                    />
                    <br />
                    {(existingItem == true) ? (
                        <>
                            <button type="button" className="hydroBtn"
                                onClick={sendUpdate}>Update</button>
                            <button type="button" className="hydroBtn"
                            onClick={sendDelete}>Delete</button>
                        </>
                        ) : (
                            <button className="hydroBtn" type="button" onClick={sendCreate}>Submit</button>
                        )}
                </form>

<Progress goal={goalObj.hydration_oz} amount={today}>
    <p>{(moment().format('YYYY-MM-DD')===weekArray)? `${console.log('so close')}`: `${console.log(weekArray)}`}</p>
</Progress>

            <h2>This week's hydration reporting: </h2>
            <HydrationCard
                name='hydrationCard'
                results={thisWeek}
                goal={goalObj.hydration_oz}
            />

            <div className='anotherWeekSection'> 
            <h2>View another week's hydration reporting:</h2>
            <form className='chooseDate'>
                <label htmlFor='anotherDate'>Date</label>
                <input
                    value={anotherDate}
                    type="date"
                    name="anotherDate"
                    onChange={(e) => setAnotherDate(e.target.value)}
                />
                <button className="hydroBtn" type="button" onClick={reqAnotherWeek}>Submit</button>
            </form>
            { anotherWeek ? (
            <HydrationCard
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
