import { clear } from '@testing-library/user-event/dist/clear';
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
        <Form>
            <Card className="hydration">
                <h1>Hydration</h1>
                <h2>GOAL:<Form id="storedWater"></Form></h2>
                <nav className="hydrateWeek">
                    <Card className="waterForm">
                        <Form.Check type="date" id="waterDate" />
                        <Form.Label htmlFor="waterAmount">Input number of ounces drank today:</Form.Label>
                        <Form.Check min="0" max="500" type="number" id="waterAmount" name="userWater" /><br />
                        <Button type="submit" onClick={handleSubmit}>Submit</Button>
                        <Button type="reset" value="Reset">Reset</Button>
                    </Card>
                </nav>
            </Card>
        </Form>
    );
}
