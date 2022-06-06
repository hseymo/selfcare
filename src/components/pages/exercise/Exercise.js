import React, {useState, useEffect} from 'react';
import './Exercise.css'
import { Card, Button, Form } from 'react-bootstrap';
import API from "../../../utils/API.js"
import ExerciseCard from "./ExerciseCard"

export default function Fitness({token, weekArray}) {
    const [thisWeek, setThisWeek] = useState([])
    useEffect(() => {
        API.getUserFitness(token).then((userData)=>{
            // console.log(userData)
            const fitnessArray = [];
            console.log(weekArray)
            weekArray.map(entry => {
                var response = userData.find(data => data.date === entry);
                console.log(response)

                let newObj = {date: entry}

                if (response === undefined) {
                    newObj.status = 'Not Reported';
                } else {
                    const {id, date, activity_type, activity_duration, RPE, notes} = response;
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
      }, [token])
    return (
        <Card className="fitness">
            <h1>Exercise</h1>
            <h2>Your Goals</h2>
            <Form className="form">
                {[''].map((type) => (
                    <Card key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`days ${type}`}
                        />
                    </Card>
                ))}
            </Form>

            <Form className="form">
                {[''].map((type) => (
                    <Card key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`minutes ${type}`}
                        />
                    </Card>
                ))}
            </Form>
            <br />
            <Form.Check className="fitnessDate" type="date"></Form.Check>
            <br />
            <h3>This week's fitness reporting: </h3>
            <ExerciseCard
            results={thisWeek}
                />
        </Card>
    );
}