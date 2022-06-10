import React from 'react'
import { Link } from 'react-router-dom';
import { Card} from 'react-bootstrap';
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
            {/* conditional statements = if that data was included in the entry, show here. otherwise dont display. */}
            { result.activity_type ? (
                <li>Activity Type: {result.activity_type}</li>
            ) : (
                <></>
            )}
            { result.activity_duration > 0 ? (
                <li>Activity Duration: {result.activity_duration} minutes</li>
            ) : (
                <li>You reported a rest day. You did not exercise this day.</li>
            )}
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
