import React, { useState, useEffect } from 'react';
import "./profile.css"
import API from "../../../utils/API.js"

export default function Profile() {
    const [fitnessTimeGoal, setFitnessTimeGoal] = useState();
    const [fitnessFrequencyGoal, setFitnessFrequencyGoal] = useState();
    const [sleepTimeGoal, setSleepTimeGoal] = useState();
    const [hydrationGoal, setHydrationGoal] = useState();

    // ON PAGE LOAD FETCH REQUEST TO LOAD FROM DATABASE AND INPUT INTO EACH BOX

    useEffect(() => {
        API.getOneUser(1).then((userData) => {
            console.log(userData)
            setFitnessTimeGoal(userData.goal.fitness_time);
            setFitnessFrequencyGoal(userData.goal.fitness_frequency);
            setSleepTimeGoal(userData.goal.sleep_time);
            setHydrationGoal(userData.goal.hydration_oz);
        })
    }, [])

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

    const handleFormSubmit = (e) => {

    }

    return (
        <div className='profilePage'>
            <h1>Tell us about yourself</h1>
            <form className="profileForm" onSubmit={handleFormSubmit}>
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                    <label> ounces of water per day! 💧</label>
                </div>
                <button type="button"
                >Submit</button>
            </form>
        </div>
    );
}

