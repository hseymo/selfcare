import React, {useState} from 'react';
import "./index.css"

export default function Profile() {
const [fitnessTimeGoal, setFitnessTimeGoal] = useState();
const [fitnessFrequencyGoal, setFitnessFrequencyGoal] = useState();
const [sleepTimeGoal, setSleepTimeGoal] = useState();
const [hydrationGoal, setHydrationGoal] = useState();
    return (
        <div className='profilePage'>
            <h1>Tell us about yourself</h1>
            <form className="profileForm">
                <div className='formGroup'>
                    <label> I want to exercise </label>
                    <input
                    value={fitnessTimeGoal}
                    name="fitnessTimeGoal"
                    type="number"
                    min="0"
                    max="10000"
                    />
                    <label> minutes per week! 🏃‍♀️ </label>
                </div>
                <div className='formGroup'>
                    <label>I want to exercise </label>
                    <input
                    value={fitnessFrequencyGoal}
                    name="fitnessFrequencyGoal"
                    type="number"
                    min="0"
                    max="7"
                    />
                    <label> days per week! 🚴 </label>
                </div>
                <div className='formGroup'>
                    <label>I want to sleep </label>
                    <input
                    value={sleepTimeGoal}
                    name="sleepTimeGoal"
                    type="number"
                    min="0"
                    max="24"
                    />
                    <label> hours per night! 😴 </label>
                </div>
                <div className='formGroup'>
                <label>I want to drink </label>
                    <input
                    value={hydrationGoal}
                    name="hydrationGoal"
                    type="number"
                    min="0"
                    max="1000"
                    />
                    <label> ounces of water per day! 💧</label>
                </div>
                <button type="button" 
                >Submit</button>
                </form>
        </div>
    );
}

