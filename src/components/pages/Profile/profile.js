import React, { useState, useEffect } from 'react';
import "./profile.css"
import API from "../../../utils/API.js"
import { Link } from 'react-router-dom';

export default function Profile({token, isLoggedIn}) {
    const [goalObj, setGoalObj] = useState({
        id: '',
        fitness_time:'',
        fitness_frequency:'',
        sleep_time: '',
        hydration_oz: '',
        mindfulness_frequency: ''
    });

    useEffect(() => {
        API.getUserGoals(token)
        .then((userData)=>{
        const { fitness_time, fitness_frequency, sleep_time, hydration_oz, mindfulness_frequency, id } = userData[0];
        setGoalObj({
            id,
            fitness_time,
            fitness_frequency,
            sleep_time,
            hydration_oz,
            mindfulness_frequency
        })
        })
        .catch((err) => console.log(err))
    }, [token])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/dashboard"
    }

    useEffect(() => {
        API.updateGoals(token, goalObj)
        .then((res) => {
        })
        .catch((err) => console.log(err))
    }, [goalObj])

    return (
        <div className='profile'>
            {!isLoggedIn ? (
                <h2><Link className="pageLink" to='/login'>Click here to login</Link></h2>
            ) : (
                <>
            <h1>Tell Us About Your Goals</h1>
            <form className="profileForm" onSubmit={handleFormSubmit}>
                <div className='formGroup'>
                    <label> I want to exercise </label>
                    <input
                        className='profileinput'
                        value={goalObj.fitness_time}
                        name="fitnessTimeGoal"
                        type="number"
                        min="0"
                        max="10000"
                        onChange={(e) => setGoalObj({...goalObj, fitness_time: e.target.value})}
                    />
                    <label> minutes per week! 🏃‍♀️ </label>
                </div>
                <div className='formGroup'>
                    <label>I want to exercise </label>
                    <input
                        className='profileinput'
                        value={goalObj.fitness_frequency}
                        name="fitnessFreqGoal"
                        type="number"
                        min="0"
                        max="7"
                        onChange={(e) => setGoalObj({...goalObj, fitness_frequency: e.target.value})}
                    />
                    <label> days per week! 🚴 </label>
                </div>
                <div className='formGroup'>
                    <label>I want to sleep </label>
                    <input
                        className='profileinput'
                        value={goalObj.sleep_time}
                        name="sleepGoal"
                        type="decimal"
                        min="0"
                        max="24"
                        onChange={(e) => setGoalObj({...goalObj, sleep_time: e.target.value})}
                    />
                    <label> hours per night! 😴 </label>
                </div>
                <div className='formGroup'>
                    <label>I want to drink </label>
                    <input
                        className='profileinput'
                        value={goalObj.hydration_oz}
                        name="hydrationGoal"
                        type="number"
                        min="0"
                        max="1000"
                        onChange={(e) => setGoalObj({...goalObj, hydration_oz: e.target.value})}
                    />
                    <label> ounces of water per day! 💧</label>
                </div>
                <div className='formGroup'>
                    <label>I want to practice mindfulness </label>
                    <input
                        className='profileinput'
                        value={goalObj.mindfulness_frequency}
                        name="mindfulGoal"
                        type="number"
                        min="0"
                        max="7"
                        onChange={(e) => setGoalObj({...goalObj, mindfulness_frequency: e.target.value})}
                    />
                    <label> days per week! 🧘</label>
                </div>
                <button className='proBtn' type="submit"
                >Submit</button>
            </form>
            </>
            )}
        </div>
    );
}

