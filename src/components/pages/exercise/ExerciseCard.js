import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';

export default function ExerciseCard(props) {
    return (
    <div>
    {props.results.map((result) => 
    <Card className="fitnessCards" key={result.id}>
    <Card.Body>
        <h4>{result.day}</h4>
        <h4>{result.date}</h4>
        <Card.Text>
        <ul>
        { result.status ? (
            <li> No activity reported </li>
        ) : (
            <>
                <li>Activity Type: {result.activity_type}</li>
                <li>Activity Duration: {result.activity_duration}</li>
                <li>RPE: {result.RPE}</li>
                <li>Notes: {result.notes}</li>
                </>
        )}
        </ul> 
        </Card.Text>
    </Card.Body>
    </Card>
    )}
    </div>
    )
}
