import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './sleepCard.css'

export default function SleepCard(props) {
return (
    <div className='cardHolder'>
        {props.results.map((result) =>  
    <Card className="sleepCards" key={result.id}>
        <Card.Body className='sleepBody'>
        <h4>{result.day}</h4>
        <h4>{result.date}</h4>
        <ul className="sleepResults">
        { result.status ? (
            <li> No sleep reported </li>
        ) : (
            <>
            <li>Time Asleep: {result.time_asleep}</li>

            { result.diff_falling_asleep ? (
            <li>Difficulty Falling Asleep? {result.diff_falling_asleep}</li>
            ) : (
                <></>
            )}

            { result.diff_staying_asleep ? (
            <li>Difficulty Staying Asleep? {result.diff_staying_asleep}</li>
            ) : (
                <></>
            )}

            { result.mood_upon_wake ? (
            <li>Mood Upon Wake: {result.mood_upon_wake}</li>
            ) : (
                <></>
            )}
            </>
        )}
        </ul>
        </Card.Body>
        </Card>
            )}
    </div>
)
}