import React, { useState, useEffect, useCallback } from 'react';
import './hydration.css';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"
import HydrationCard from './HydrationCard';

export default function Hydration({ token, weekArray, goalObj, isLoggedIn }) {
    const [thisWeek, setThisWeek] = useState([]);
    const [hydrationFormObject, setHydrationFormObject] = useState({
        date: '',
        water_oz: ''
    })
    const [updateReq, setUpdateReq] = useState('');
    const [existingItem, setExistingItem] = useState('');
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        API.getUserHydration(token).then((userData) => {
            console.log(userData)
            const hydrationArray = [];
            weekArray.map(entry => {
                var response = userData.find(data => data.date === entry);

                console.log(response)

                let newObj = { date: entry }

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

    return (
    <Card className="hydration">
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
                <Form className="waterForm">
                    <Form.Label htmlFor="waterDate">
                        Choose date:
                    </Form.Label>
                    <Form.Check
                        value={hydrationFormObject.date}
                        type="date"
                        id="waterDate"
                        name="waterDate"
                        onChange={(e) => setHydrationFormObject({ ...hydrationFormObject, date: e.target.value })}
                    />
                    <Form.Label htmlFor="waterAmount">
                        How many ounces did you drink?
                    </Form.Label>
                    <Form.Check
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
                            <Button type="button" className="hydroBtn"
                                onClick={sendUpdate}>Update</Button>
                            <Button type="button" className="hydroBtn"
                            onClick={sendDelete}>Delete</Button>
                        </>
                        ) : (
                            <Button className="hydroBtn" type="button" onClick={sendCreate}>Submit</Button>
                        )}
                </Form>
            <h2>This week's hydration reporting: </h2>
            <HydrationCard
                name='hydrationCard'
                results={thisWeek}
            />
        </>
            )}
    </Card>
    );
}
