import React, { useState, useEffect } from 'react';
import "./profile.css"
import API from "../../../utils/API.js"

export default function Profile({token}) {
    const [fitnessTimeGoal, setFitnessTimeGoal] = useState('');
    const [fitnessFreqGoal, setFitnessFreqGoal] = useState('');
    const [sleepGoal, setSleepGoal] = useState('');
    const [hydrationGoal, setHydrationGoal] = useState('');
    // const [goalObject, setGoalObject] = useState({});
    const [goalId, setGoalId] = useState('');

    const [goalObject, setGoalObject] = useState({
        id: goalId,
        fitness_time:'',
        fitness_frequency:'',
        sleep_time: '',
        hydration_oz: ''
    })

    useEffect(() => {
        API.getUserGoals(token).then((userData)=>{
        console.log(userData)
        const { fitness_time, fitness_frequency, sleep_time, hydration_oz, id } = userData[0];
        console.log(fitness_time);
        console.log(fitness_frequency);
        console.log(sleep_time);
        console.log(hydration_oz)
        console.log(id)
          setFitnessTimeGoal(fitness_time);
          setFitnessFreqGoal(fitness_frequency);
          setSleepGoal(sleep_time);
          setHydrationGoal(hydration_oz);
          setGoalId(id);
        })
    }, [token])

    // on page load paste goals
    //   useEffect(() => {
    //     API.getOneUser(userId).then((userData)=>{
    //     console.log(userData)
    //       const { fitness_time, fitness_frequency, sleep_time, hydration_oz, id } = userData.goal;
    //       setFitnessTimeGoal(fitness_time);
    //       setFitnessFreqGoal(fitness_frequency);
    //       setSleepGoal(sleep_time);
    //       setHydrationGoal(hydration_oz);
    //       setGoalId(id);
    //     })
    // }, [userId])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setGoalObject({
            id: goalId,
            fitness_time:fitnessTimeGoal,
            fitness_frequency:fitnessFreqGoal,
            sleep_time: sleepGoal,
            hydration_oz: hydrationGoal
        })
        console.log(goalObject)
    }

    useEffect(() => {
        API.updateGoals(token, goalObject).then((res) => {
        console.log(res)
    })
    }, [goalObject])

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
                        onChange={(e) => setFitnessTimeGoal(e.target.value)}
                    />
                    <label> minutes per week! 🏃‍♀️ </label>
                </div>
                <div className='formGroup'>
                    <label>I want to exercise </label>
                    <input
                        value={fitnessFreqGoal}
                        name="fitnessFreqGoal"
                        type="number"
                        min="0"
                        max="7"
                        onChange={(e) => setFitnessFreqGoal(e.target.value)}
                    />
                    <label> days per week! 🚴 </label>
                </div>
                <div className='formGroup'>
                    <label>I want to sleep </label>
                    <input
                        value={sleepGoal}
                        name="sleepGoal"
                        type="decimal"
                        min="0"
                        max="24"
                        onChange={(e) => setSleepGoal(e.target.value)}
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
                        onChange={(e) => setHydrationGoal(e.target.value)}
                    />
                    <label> ounces of water per day! 💧</label>
                </div>
                <button type="submit"
                >Submit</button>
            </form>
        </div>
    );
}

