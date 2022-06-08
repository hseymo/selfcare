import React, { useState, useEffect, useCallback } from 'react';
import './mindfulness.css'
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"

export default function Mindfulness({ token, weekArray, goalObj, isLoggedIn }) {
    const [mindObj, setMindObj] = useState({
        date: '',
    })
    return (
        <div className="mindful">
            {!isLoggedIn ? (
                <h2><Link class="link-light" to='/login'>Login</Link></h2>
            ) : (
                <>
                    <h1>Mindfulness</h1>
                    <h2>Your Goals</h2>
                    {/* { goalObj.mindful != 0 && (
              <h4 className=''>Your goal was to practice mindfulness {goalObj.mindful} times this week.</h4>
              )} */}
                    <form>
                        <h2>Report Mindfulness Practice</h2>
                        <label htmlFor="mindfulDate">
                            Choose date:
                        </label>
                        <input
                            value={mindObj.date}
                            type="date"
                            id="mindfulDate"
                            name="mindfulDate"
                            onChange={(e) => setMindObj({ ...mindObj, date: e.target.value })}
                        />
                    </form>
                    <h2>This week's mindfulness reporting:</h2>
                    {/* <MindfulCard
            name='mindfulCard'
            results={thisWeek}
            /> */}
                </>
            )}
        </div>
    );
}
