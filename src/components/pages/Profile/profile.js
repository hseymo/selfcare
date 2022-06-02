import React, { useState } from 'react';
import "./profile.css"

export default function Profile() {
    const [fitnessTimeGoal, setFitnessTimeGoal] = useState();
    const [fitnessFrequencyGoal, setFitnessFrequencyGoal] = useState();
    const [sleepTimeGoal, setSleepTimeGoal] = useState();
    const [hydrationGoal, setHydrationGoal] = useState();

    // ON PAGE LOAD FETCH REQUEST TO LOAD FROM DATABASE AND INPUT INTO EACH BOX

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'fitnessTimeGoal') {
            setFitnessTimeGoal(inputValue);
        } else if (inputType === 'fitnessFrequencyGoal') {
            setFitnessFrequencyGoal(inputValue);
        } else if (inputType === 'sleepTimeGoal') {
            setSleepTimeGoal(inputValue);
        } else if (inputType === 'hydrationGoal') {
            setHydrationGoal(inputValue);
        }
    };

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
                        onChange={handleInputChange}
                    />
                    <label> Minutes per week! 🏃‍♀️ </label>
                </div>
                <div className='formGroup'>
                    <label>I want to exercise </label>
                    <input
                        value={fitnessFrequencyGoal}
                        name="fitnessFrequencyGoal"
                        type="number"
                        min="0"
                        max="7"
                        onChange={handleInputChange}
                    />
                    <label> Days per week! 🚴 </label>
                </div>
                <div className='formGroup'>
                    <label>I want to sleep! </label>
                    <input
                        value={sleepTimeGoal}
                        name="sleepTimeGoal"
                        type="number"
                        min="0"
                        max="24"
                        onChange={handleInputChange}
                    />
                    <label> Hours per night! 😴 </label>
                </div>
                <div className='formGroup'>
                    <label>I want to drink </label>
                    <input
                        value={hydrationGoal}
                        name="hydrationGoal"
                        type="number"
                        min="0"
                        max="1000"
                        onChange={handleInputChange}
                    />
                    <label> Ounces of water per day! 💧</label>
                </div>
                <button type="button"
                >Submit</button>
            </form>
        </div>
    );
}

