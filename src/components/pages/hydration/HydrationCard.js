import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './hydrationCard.css';

export default function HydrationCard(props) {
return (
    <div className="hydrationCardHolder">
        {props.results.map((result) =>  
    <Card className="hydrationCards" key={result.id}>
        <Card.Body>
        <h4>{result.day}</h4>
        <h4>{result.date}</h4>
        <ul>
        { result.status ? (
            <li> No water intake reported </li>
        ) : (
            <>
            <li>{result.water_oz} ounces</li>
            </>
        )}
        </ul>
        </Card.Body>
        </Card>
            )}
    </div>
)
}