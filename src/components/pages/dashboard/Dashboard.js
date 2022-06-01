import React, { useEffect, useState } from 'react';
import './index.css';
// import API from '../../utils/API';

export default function Dashboard() {
    // const [result, setResult] = useState()
    // useEffect(()=>{
    //     fetch("http://localhost:3001/api/sleep").then((res)=>res.json()).then((data)=>{setResult(data[1].mood_upon_wake)})
    // },[])
    return (
        <div>
            <h1>Your Dashboard for the Week</h1>
            <p>
                {/* {result?result:''} */}
            </p>
            <div className="weekDays">
                <ul>
                    <li></li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
                </ul>
            </div>
        </div>
    );
}
