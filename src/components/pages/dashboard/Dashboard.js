import React, {useEffect, useState} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"

export default function Dashboard({token, weekArray}) {
  const [name, setName] = useState('')
  const [fitnessTimeGoal, setFitnessTimeGoal] = useState();
  const [fitnessFreqGoal, setFitnessFreqGoal] = useState();
  const [sleepGoal, setSleepGoal] = useState();
  const [hydrationGoal, setHydrationGoal] = useState()
  const [isGoals, setIsGoals] = useState(false)

  useEffect(() => {
    API.getOneUser(token).then((userData)=>{
      // console.log(userData)
      const { fitness_time, fitness_frequency, sleep_time, hydration_oz } = userData.goal;

      weekArray.map(entry => {
        for (let i = 0; i < userData.fitnesses.length; i++) {
          if (entry === userData.fitnesses[i].date) {
            console.log("Match for ", entry, "&", userData.fitnesses[i].date)
          } else {
            console.log("No match for ", entry, "&", userData.fitnesses[i].date)
          }
        }
      })

      // userData.sleep.map(entry => {
      //   // console.log(entry)
      //   const {id, date, time_asleep, diff_falling_asleep, diff_staying_asleep, mood_upon_wake } = entry;
      // })

      // userData.hydrations.map(entry => {
      //   // console.log(entry)
      //   const { id, date, water_oz } = entry;
      // })

      setName(userData.first_name);
      setFitnessTimeGoal(fitness_time);
      setFitnessFreqGoal(fitness_frequency);
      setSleepGoal(sleep_time);
      setHydrationGoal(hydration_oz);
      if (fitness_time || fitness_frequency || sleep_time || hydration_oz ) {
        setIsGoals(true)
    }
    })
  }, [token])

    const checkmark = '✅';
    const redX= '❌';
    const questionmark = '⁇'
    const onewater = '💧';
    const threewater = '💦';


    // FOR INDIVIDUAL PAGES
    useEffect(() => {
      API.getUserFitness(token).then((userData)=>{
      userData.map(entry => {
        const {id, date, activity_type, activity_duration, RPE, notes} = entry;
      })
      })
    }, [token])

    useEffect(() => {
      API.getUserSleep(token).then((userData)=>{
      userData.map(entry => {
        const {id, date, time_asleep, diff_falling_asleep, diff_staying_asleep, mood_upon_wake } = entry;
      })
      })
    }, [token])

    useEffect(() => {
      API.getUserHydration(token).then((userData)=>{
      userData.map(entry => {
        const { id, date, water_oz } = entry;
      })
      })
    }, [token])

    return (
        <div className="Dashboard">
            <h1>{name}'s Dashboard for the Week</h1>
            <h2>Your Goals</h2>
            { isGoals ? (
            <>
            <ul className='goalsList'>
              { fitnessTimeGoal != 0 && (
              <li className='goalsLi'>You said you wanted to exercise {fitnessTimeGoal} minutes per week.</li>
              )}
              { fitnessFreqGoal != 0 && (
              <li className='goalsLi'>You said you wanted to exercise {fitnessFreqGoal} days per week.</li>
              )}
              {sleepGoal != 0 && (
              <li className='goalsLi'>You said you wanted to sleep {sleepGoal} hours per night.</li>
              )}
              { hydrationGoal != 0 && (
              <li className='goalsLi'>You said you wanted to drink {hydrationGoal} oz of water per day.</li>
              )}
            </ul>
            <button className='goalsLink' onClick={(e) => {window.location.href = "/profile"}}>Update my goals</button>
            </>
            ) : (
              <button className='goalsLink' onClick={(e) => {window.location.href = "/profile"}}>Set my goals!</button>
            )}
            <h2>Your Recent Activity</h2>
            <table>
        <tr className="dayHeaders">
          <th></th>
          <th>Monday <br/> {weekArray[0]}</th>
          <th>Tuesday <br/> {weekArray[1]}</th>
          <th>Wednesday <br/> {weekArray[2]} </th>
          <th>Thursday <br/> {weekArray[3]}</th>
          <th>Friday <br/> {weekArray[4]}</th>
          <th>Saturday <br/> {weekArray[5]}</th>
          <th>Sunday <br/> {weekArray[6]}</th>
        </tr>
        <tr>
          <td className="rowHeader"><Link to='/fitness'>Fitness</Link></td>
          <td> 

          </td>
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

