import React from 'react';
import './hydration.css';
import { Card, Button, Form } from 'react-bootstrap';

export default function Hydration() {
    
    function handleSubmit(e) {
        e.preventDefault();
        var water_oz = document.getElementById("waterAmount").value
        var date = document.getElementById("waterDate").value
        console.log(date)
        console.log(water_oz)
    }
    return (
        <Card className="hydration">
            <h1>Hydration</h1>
            <h2>GOAL:<Card id="storedWater"></Card></h2>
            <nav className="hydrateWeek">
                <Form className="waterForm"><br />
                    <Form.Check type="date" id="waterDate"/><br />
                    <Form.Label htmlFor="waterAmount">Input number of ounces drank today:</Form.Label><br />
                    <Form.Check min="0" max="500" type="number" id="waterAmount" name="userWater" /><br />
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    <Button type="reset">Reset</Button>
                </Form>
            </nav>
        </Card>
    );
}
