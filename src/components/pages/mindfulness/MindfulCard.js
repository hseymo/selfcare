import React from 'react'
import { Card} from 'react-bootstrap';
import './mindfulCard.css'

export default function MindfulCard(props) {
    return (
    <div className="mindfulCardHolder">
    {props.results.map((result) => 
    <Card className="mindfulnessCards" key={result.id}>
    <Card.Body>
        <h4>{result.day}</h4>
        <h4>{result.date}</h4>
        <Card.Text>
        { result.status ? (
            <li> No mindfulness practce reported </li>
        ) : (
            <>
            { result.activites_completed ? (
                <li>Activities Completed: {result.activities_completed}</li>
            ) : (
                <></>
            )}
            { result.journal > 0 ? (
                <li>Journal Entry: {result.journal}</li>
            ) : (
                <></>
            )}
            { result.overall_mood ? (
                <li>Overall mood: {result.overall_mood}</li>
            ) : (
                <></>
            )}

            { result.quote_of_the_day ? (
                <li>Quote: {result.quote_of_the_day}</li>
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
