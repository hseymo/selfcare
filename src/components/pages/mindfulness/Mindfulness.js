import React, { useState, useEffect, useCallback } from 'react';
import './mindfulness.css'
import { Card, Button, Form, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"

export default function Mindfulness({ token, weekArray, goalObj, isLoggedIn }) {
    const [mindObj, setMindObj] = useState({
        date: '',
    })
    return (
        <Card className="mindful">
        {!isLoggedIn ? (
            <h2><Link class="link-light" to='/login'>Login</Link></h2>
            ) : (
                <>
            <h1>Mindfulness</h1>
            <h2>Your Goals</h2>
                {/* { goalObj.mindful != 0 && (
              <h4 className=''>Your goal was to practice mindfulness {goalObj.mindful} times this week.</h4>
              )} */}
            <Form>
            <h2>Report Mindfulness Practice</h2>
            <Form.Label htmlFor="mindfulDate">
                Choose date:
                </Form.Label>
                <Form.Check
                    value={mindObj.date}
                    type="date"
                    id="mindfulDate"
                    name="mindfulDate"
                    onChange={(e) => setMindObj({...mindObj, date: e.target.value})}
                />
            </Form>
            <h2>This week's mindfulness reporting:</h2>
            {/* <MindfulCard
            name='mindfulCard'
            results={thisWeek}
            /> */}
            </>
            )}
        </Card>
    );
}
