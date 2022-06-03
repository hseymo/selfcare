import React, {useEffect, useState} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"
 

export default function Dashboard({userId}) {
  const [name, setName] = useState('')
  const [fitnessTimeGoal, setFitnessTimeGoal] = useState('');
  const [fitnessFreqGoal, setFitnessFreqGoal] = useState('');
  const [sleepGoal, setSleepGoal] = useState('');
  const [hydrationGoal, setHydrationGoal] = useState('')

  useEffect(() => {
    API.getOneUser(userId).then((userData)=>{
      console.log(userData)
      setName(userData.first_name);
      setFitnessTimeGoal(userData.goal.fitness_time);
      setFitnessFreqGoal(userData.goal.fitness_frequency);
      setSleepGoal(userData.goal.sleep_time);
      setHydrationGoal(userData.goal.hydration_oz);
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
            <ul className='goalsList'>
              <li className='goalsLi'>You said you wanted to exercise {fitnessTimeGoal} minutes per week.</li>
              <li className='goalsLi'>You said you wanted to exercise {fitnessFreqGoal} days per week.</li>
              <li className='goalsLi'>You said you wanted to sleep {sleepGoal} hours per night.</li>
              <li className='goalsLi'>You said you wanted to drink {hydrationGoal} oz of water per day.</li>
            </ul>
            <a className='goalsLink' href='/profile'>Update my goals</a>
                {/* {result?result:''} */}
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