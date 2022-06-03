import React, {useEffect, useState} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"
 

export default function Dashboard({userId}) {
  const [name, setName] = useState('')
  const [fitnessTimeGoal, setFitnessTimeGoal] = useState(null);
  const [fitnessFreqGoal, setFitnessFreqGoal] = useState(null);
  const [sleepGoal, setSleepGoal] = useState(null);
  const [hydrationGoal, setHydrationGoal] = useState(null)
  const [isGoals, setIsGoals] = useState(false)

  useEffect(() => {
    API.getOneUser(userId).then((userData)=>{
      const { fitness_time, fitness_frequency, sleep_time, hydration_oz } = userData.goal;
      setName(userData.first_name);
      setFitnessTimeGoal(fitness_time);
      setFitnessFreqGoal(fitness_frequency);
      setSleepGoal(sleep_time);
      setHydrationGoal(hydration_oz);
      if (fitness_time || fitness_frequency || sleep_time || hydration_oz ) {
        setIsGoals(true)
    }
    })
  }, [userId])

    const checkmark = '✅';
    const redX= '❌';
    const questionmark = '⁇'
    const onewater = '💧';
    const threewater = '💦';

    return (
        <div className="Dashboard">
            <h1>{name}'s Dashboard for the Week</h1>
            <h2>Your Goals</h2>
            { isGoals ? (
            <>
            <ul className='goalsList'>
              { fitnessTimeGoal && (
              <li className='goalsLi'>You said you wanted to exercise {fitnessTimeGoal} minutes per week.</li>
              )}
              { fitnessFreqGoal && (
              <li className='goalsLi'>You said you wanted to exercise {fitnessFreqGoal} days per week.</li>
              )}
              {sleepGoal && (
              <li className='goalsLi'>You said you wanted to sleep {sleepGoal} hours per night.</li>
              )}
              { hydrationGoal && (
              <li className='goalsLi'>You said you wanted to drink {hydrationGoal} oz of water per day.</li>
              )}
            </ul>
            <a className='goalsLink' href='/profile'>Update my goals</a>
            </>
            ) : (
              <a className='goalsLink' href='/profile'>Set my goals!</a>
            )}
            <table>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <td className="rowHeader"><Link to='/fitness'>Fitness</Link></td>
          <td> {checkmark} </td>
          <td> {redX} </td>
          <td> {redX} </td>
          <td> {checkmark} </td>
          <td> {checkmark} </td>
          <td> {questionmark} </td>
          <td> {questionmark} </td>
        </tr>
        <tr>
          <td className="rowHeader"><Link to='/sleep'>Sleep</Link></td>
          <td> {checkmark} </td>
          <td> {checkmark} </td>
          <td> {redX} </td>
          <td> {checkmark} </td>
          <td> {checkmark} </td>
          <td> {checkmark} </td>
          <td> {questionmark} </td>
        </tr>
        <tr>
          <td className="rowHeader"><Link to='/hydration'>Hydration</Link></td>
          <td> {onewater} </td>
          <td> {onewater} </td>
          <td> {threewater} </td>
          <td> {onewater} </td>
          <td> {threewater} </td>
          <td> {threewater} </td>
          <td> {threewater} </td>
        </tr>
      </table>
      <h3>Click on a category to see more!</h3>
        </div>
    );
}

// const checkmark =require ("./assets/checkmark.png");
// const redX =require ("./assets/redX.png");
// const questionmark =require ("./assets/questionmark.png");
// const onewaterdrop =require ("./assets/water1drop.png");
// const threewaterdrops =require ("./assets/water3drops.png");

// const checkmarkImage= <img className="checkmark" src={checkmark} width="20px"/>;
// const redXImage= <img className="X" src={redX} width="20px"/>;
// const questionMarkImage= <img className="questionmark" src={questionmark} width="20px"/>
// const lowHydration = <img className="lowHydration" src={onewaterdrop} width="20px"/>
// const goodHydration = <img className="goodHydration" src={threewaterdrops} width="20px"/>