import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState, useEffect} from 'react';
import './hydration.css';
import { Card, Button, Form } from 'react-bootstrap';
import API from "../../../utils/API.js"
import HydrationCard from './HydrationCard';

export default function Hydration({token, userId, weekArray}) {
    const [thisWeek, setThisWeek] = useState([]);
    const [waterDate, setWaterDate] = useState('');
    const [waterAmount, setWaterAmount] = useState('');
    const [waterObj, setWaterObj] = useState({});

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
      }, [token])

    // useEffect(() => {
    //     API.getOneUserHydration(token, waterDate).then((response) => {
    //         console.log(response)
    //     })
    // }, [waterDate])

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
        API.postHydrationEntry(token, waterObj).then((res) => {
            console.log(res);
            if (!res.id) {
            if ( res.err.name === 'SequelizeUniqueConstraintError' ) {
            API.updateHydrationEntry(token, waterObj).then((res) => {
                console.log(res)
                alert('Hydration Entry updated')
            })
            }
        } else {
        alert('New hydration entry created')}
        })
    }, [waterObj])

    return (
        <div>
            <Card className="hydration">
                <h1>Hydration</h1>
                <h2>GOAL:</h2>
                <Form 
                onSubmit={handleFormSubmit}
                >
                <h2>Report water intake</h2>
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
