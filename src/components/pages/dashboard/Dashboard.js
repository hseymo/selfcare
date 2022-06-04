import React, {useEffect, useState} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"
import Card from "./card"

export default function Dashboard({token, weekArray}) {
  const [name, setName] = useState('')
  const [goalsData, setGoalsData] = useState({
    fitness_time:'',
    fitness_frequency: '',
    sleep_time: '',
    hydration_oz: ''
  })
  const [isGoals, setIsGoals] = useState(false)
  const [fitnessTime, setFitnessTime] = useState(0)
  const [fitnessCount, setFitnessCount] = useState(0)
  const [fitnessEmoji, setFitnessEmoji] = useState()
  // const [sleepEmoji, setSleepEmoji] = useState()

  useEffect(() => {
    API.getOneUser(token).then((userData)=>{
      setName(userData.first_name);
      // USERS GOALS_______________________________________________
      const { fitness_time, fitness_frequency, sleep_time, hydration_oz } = userData.goal;
      setGoalsData({
        fitness_time: fitness_time,
        fitness_frequency: fitness_frequency,
        sleep_time: sleep_time,
        hydration_oz: hydration_oz
      })
      if (fitness_time || fitness_frequency || sleep_time || hydration_oz ) {
        setIsGoals(true)
      }
      
      // FITNESS LOGIC__________________________________________
      // temp holders to set state with
      const fitnessArray = [];
      let weeklyFitnessTime = 0;
      let weeklyFitnessCount = 0;
      weekArray.map(entry => {
        var response = userData.fitnesses.find(data => data.date === entry);
        console.log(response)
        if (response === undefined) {
          fitnessArray.push('⁇')
        } else if (response.activity_duration === 0) {
          fitnessArray.push('❌')
        } else {
          fitnessArray.push('✅');
          weeklyFitnessTime = weeklyFitnessTime + response.activity_duration;
          weeklyFitnessCount++;
        }
      })
      console.log('fitnessArray: ', fitnessArray)
      console.log('weeklyFitnessTime: ', weeklyFitnessTime)
      console.log('weeklyFitnessCount: ', weeklyFitnessCount)
      setFitnessTime(weeklyFitnessTime)
      setFitnessCount(weeklyFitnessCount)
      setFitnessEmoji(fitnessArray)
      // NEED TO RENDER EMOJI ARRAY TO THE PAGE

      // SLEEP LOGIC_______________________________________________
        const sleepArray = [];
        weekArray.map(entry => {
          var response = userData.sleep.find(data => data.date === entry);
          console.log(response)
          if (response === undefined) {
            sleepArray.push('⁇')
          } else {
            sleepArray.push('Reported')
          }
          // else if (response.time_asleep >= sleepGoal) {
          //   sleepArray.push('1')
          // } else if (response.time_asleep < sleepGoal) {
          //   sleepArray.push('2')
          // }
        })
        console.log(userData.sleep)

      // HYDRATAION LOGIC__________________________________________
        const hydrationArray = [];
        weekArray.map(entry => {
          var response = userData.hydrations.find(data => data.date === entry);
          console.log(response)
          if (response === undefined) {
            hydrationArray.push('⁇')
          } else {
            hydrationArray.push('Reported')
          }
        })

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
              { goalsData.fitness_time != 0 && (
              <li className='goalsLi'>You said you wanted to exercise {goalsData.fitness_time} minutes per week. </li>
              )}
              { goalsData.fitness_frequency != 0 && (
              <li className='goalsLi'>You said you wanted to exercise {goalsData.fitness_frequency} days per week. </li>
              )}
              {goalsData.sleep_time != 0 && (
              <li className='goalsLi'>You said you wanted to sleep {goalsData.sleep_time} hours per night.</li>
              )}
              { goalsData.hydration_oz != 0 && (
              <li className='goalsLi'>You said you wanted to drink {goalsData.hydration_oz} oz of water per day.</li>
              )}
            </ul>
            <button className='goalsLink' onClick={(e) => {window.location.href = "/profile"}}>Update my goals</button>
            </>
            ) : (
              <button className='goalsLink' onClick={(e) => {window.location.href = "/profile"}}>Set my goals!</button>
            )}
            <h2>Fitness</h2>
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
          <td className="rowHeader"><Link to='/fitness'>Did you workout today?</Link></td>
          <td> {redX} </td>
          <td> {redX} </td>
          <td> {checkmark} </td>
          <td> {checkmark} </td>
          <td> {questionmark} </td>
          <td> {questionmark} </td>
        </tr>
      </table>
      
      <h2>So far this week:</h2>
      <h3> You have reported {fitnessTime} minutes of exercise.</h3>
      {/* NOT PROTECTING AGAINST 0 GOAL  */}
      {(goalsData.fitness_time != 0 && fitnessTime >= goalsData.fitness_time) ? (
        <h3>You are {fitnessTime - goalsData.fitness_time} minutes above your goal of {goalsData.fitness_time}!</h3>
       ) : (
        <h3>You are {goalsData.fitness_time - fitnessTime} minutes below your goal of {goalsData.fitness_time}.</h3>
      )}
      <h3>You reported {fitnessCount} days of exercise!</h3> 
      {(fitnessCount >= goalsData.fitness_frequency) ? 
        <h3>You met your goal of {goalsData.fitness_frequency}!</h3>
          : 
        <h3>You are not at your goal of {goalsData.fitness_frequency} days per week.</h3>
      }
      <h2>Sleep and Hydration</h2>
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
          <td className="rowHeader"><Link to='/sleep'>Did you meet your sleep goal today?</Link></td>
          {/* {sleepData.forEach((sleep) => (
            console.log('sleepy')
          ))} */}
          <td> {checkmark} </td>
          <td> {checkmark} </td>
          <td> {redX} </td>
          <td> {checkmark} </td>
          <td> {checkmark} </td>
          <td> {checkmark} </td>
          <td> {questionmark} </td>
        </tr>
        <tr>
          <td className="rowHeader"><Link to='/hydration'>Did you meet your hydration goal today?</Link></td>
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