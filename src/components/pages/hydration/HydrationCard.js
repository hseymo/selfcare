import React, {useState} from 'react'
import Progress from './Progress'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './hydrationCard.css';

export default function HydrationCard(props) {

    const doMath =(water) =>  {
        if (props.goal != 0) {
            let percentage = (water / props.goal)*100;
            let fixedPercentage = percentage.toFixed(2)
            return fixedPercentage + '% of daily goal'
        }
    }

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
            <li>{doMath(result.water_oz)}</li>
            </>
        )}
        </ul>
        </Card.Body>
        </Card>
            )}
    </div>
)
}