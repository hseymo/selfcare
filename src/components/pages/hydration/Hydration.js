import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState, useEffect, useCallback} from 'react';
import './hydration.css';
import { Card, Button, Form } from 'react-bootstrap';
import API from "../../../utils/API.js"
import HydrationCard from './HydrationCard';

export default function Hydration({token, userId, weekArray}) {
    const [thisWeek, setThisWeek] = useState([]);
    const [waterDate, setWaterDate] = useState('');
    const [waterAmount, setWaterAmount] = useState('');
    const [waterObj, setWaterObj] = useState({});
    const [deleteReq, setDeleteReq] = useState('');
    const [updateReq, setUpdateReq] = useState('');
    const [existingItem, setExistingItem] = useState('');

    useEffect(() => {
        API.getUserHydration(token).then((userData)=>{
            console.log(userData)
            const hydrationArray = []; 
            weekArray.map(entry => {
                var response = userData.find(data => data.date === entry);

                console.log(response)

                let newObj = {date: entry}

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
        API.getOneUserHydration(token, waterDate).then((response) => {
            console.log(response)
            if (response.id) {
                setWaterAmount(response.water_oz)
                setExistingItem(true);
            } else {
                setWaterAmount('')
                setExistingItem(false);
            }
        })
    }, [waterDate])

    function handleFormSubmit(e) {
        e.preventDefault();
    if (waterDate != '' && waterAmount != '') {
        setWaterObj({
            date: waterDate,
            water_oz: waterAmount
        })
        console.log('water object:', waterObj)
        setWaterDate('');
        setWaterAmount('');
    } else {
        alert("Please enter date and amount")
    }
    }

    useEffect(()=> {
        if (existingItem == true) {
            API.updateHydrationEntry(token, waterObj).then((res) => {
                console.log(res);
                console.log('Hydration Entry updated')
            })
        } else if (existingItem == false) {
            API.postHydrationEntry(token, waterObj).then((res) => {
                console.log(res);
                console.log('New hydration entry created')
            })
        }
        // NEED TO RELOAD CARDS
        setUpdateReq(true)
    }, [waterObj])

    const sendDelete = useCallback(async () => {
        API.deleteHydrationEntry(token, waterDate).then((response) => {
            console.log(response)
        })
        // NEED TO RELOAD CARDS
        setUpdateReq(true)
    })

    return (
        <div>
            <Card className="hydration">
                <h1>Hydration</h1>
                <h2>Your Hydration Goal:</h2>
                <Form 
                onSubmit={handleFormSubmit}
                >
                <h2>Report Water Intake</h2>
                    <Card className="waterForm">
                        <Form.Label htmlFor="waterDate">
                            Choose date:
                        </Form.Label>
                        <Form.Check 
                            value={waterDate}
                            type="date" 
                            id="waterDate" 
                            name="waterDate"
                            onChange={(e) => setWaterDate(e.target.value)}/>
                        <Form.Label htmlFor="waterAmount">
                            Input number of ounces drank today:
                        </Form.Label>
                        <Form.Check 
                            value={waterAmount}
                            min="0" 
                            max="1000" 
                            type="number" 
                            id="waterAmount" 
                            name="waterAmount" 
                            onChange={(e) => setWaterAmount(e.target.value)}/>
                        <br />
                        <Button type="submit">Submit</Button>
                        { (existingItem == true) ? (
                            <Button type="button"
                            onClick={sendDelete}>Delete</Button>
                        ) : (
                            <></>
                        )}
                    </Card>
                </Form>
            </Card>

        <h3>This week's hydration reporting: </h3>
        <HydrationCard 
            name='hydrationCard'
            results={thisWeek}
            />
        </div>
    );
}
