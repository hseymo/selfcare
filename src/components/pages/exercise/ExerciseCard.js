import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';
import './exerciseCard.css'

export default function ExerciseCard(props) {
    return (
    <div className="exerciseCardHolder">
    {props.results.map((result) => 
    <Card className="fitnessCards" key={result.id}>
    <Card.Body>
        <h4>{result.day}</h4>
        <h4>{result.date}</h4>
        <Card.Text>
        { result.status ? (
            <li> No activity reported </li>
        ) : (
            <>
                <li>Activity Type: {result.activity_type}</li>
                <li>Activity Duration: {result.activity_duration} minutes</li>
            { result.RPE ? (
                <li>RPE: {result.RPE}</li>
            ) : (
                <></>
            )}

            { result.notes ? (
                <li>Notes: {result.notes}</li>
            ) : (
                <></>
            )}      
                </>
        )} 
        </Card.Text>
    </Card.Body>
    </Card>
    )}
    </div>
    )
}
