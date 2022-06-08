import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"
import DashboardRow from './card';

export default function Dashboard({token, weekArray, isLoggedIn}) {
  const [user, setUser] = useState([])
  const [name, setName] = useState('')

  const [goalsData, setGoalsData] = useState({
    fitness_time: '',
    fitness_frequency: '',
    sleep_time: '',
    hydration_oz: ''
  })
  const [isGoals, setIsGoals] = useState(false)

  const [fitnessTime, setFitnessTime] = useState(0)
  const [fitnessCount, setFitnessCount] = useState(0)
  const [fitnessEmoji, setFitnessEmoji] = useState([])
  const [sleepEmoji, setSleepEmoji] = useState([])
  const [sleepWins, setSleepWins] = useState(0)

  const [hydrationEmoji, setHydrationEmoji] = useState([])
  const [hydrationWins, setHydrationWins] = useState(0)

  useEffect(() => {
    API.getOneUser(token).then((userData)=>{
      setName(userData.first_name);
      setUser(userData)
// USERS GOALS_______________________________________________
      
      const { fitness_time, fitness_frequency, sleep_time, hydration_oz } = userData.goal;
      setGoalsData({
        fitness_time,
        fitness_frequency,
        sleep_time,
        hydration_oz
      })
      if (fitness_time || fitness_frequency || sleep_time || hydration_oz) {
        setIsGoals(true)
      }

      // FITNESS LOGIC__________________________________________
      const fitnessArray = [];
      let weeklyFitnessTime = 0;
      let weeklyFitnessCount = 0;
      weekArray.map(entry => {
        var response = userData.fitnesses.find(data => data.date === entry);
        let newObj = { date: entry }
        // console.log(response)
        if (response === undefined) {
          newObj.status = 'Not reported'
          newObj.emoji = '⁇'
        } else {
          newObj.status = 'Reported'
          if (response.activity_duration === 0) {
            newObj.emoji = '❌'
          } else {
            newObj.emoji = '✅'
            weeklyFitnessTime = weeklyFitnessTime + response.activity_duration;
            weeklyFitnessCount++;
          }
        }
        fitnessArray.push(newObj);
      })

      setFitnessEmoji(fitnessArray)
      setFitnessTime(weeklyFitnessTime)
      setFitnessCount(weeklyFitnessCount)
      // console.log('fitnessArray: ', fitnessArray)
      // console.log('weeklyFitnessTime: ', weeklyFitnessTime)
      // console.log('weeklyFitnessCount: ', weeklyFitnessCount)
      // console.log('test fitness: ', fitnessArray)


      // SLEEP LOGIC_______________________________________________
      const sleepArray = [];
      let sleepCount = 0;
      weekArray.map(entry => {
        var response = userData.sleep.find(data => data.date === entry);
        let newObj = { date: entry };
        if (response === undefined) {
          newObj.status = 'Not reported';
          newObj.emoji = '⁇';
        } else {
          newObj.status = 'Reported';
          if (response.time_asleep >= userData.goal.sleep_time) {
            newObj.emoji = '💤';
            sleepCount++;
          } else {
            newObj.emoji = '🥱';
          }
        }
        sleepArray.push(newObj)
      })
      setSleepWins(sleepCount)
      setSleepEmoji(sleepArray)
      // console.log('sleepArray: ', sleepArray)
      // console.log('test sleep: ', sleepEmoji)
      // console.log('sleep wins: ', sleepWins)

      // HYDRATAION LOGIC__________________________________________
      const hydrationArray = [];
      let hydrationCount = 0;
      let dailyHydration = 0;
      weekArray.map(entry => {
        var response = userData.hydrations.find(data => data.date === entry);
        let newObj = { date: entry }
        // console.log(response)
        if (response === undefined) {
          newObj.status = 'Not reported'
          newObj.emoji = '⁇'
        } else {
          newObj.status = 'Reported';
          newObj.oz = response.water_oz;
          if (response.water_oz >= userData.goal.hydration_oz) {
            newObj.emoji = '💦'
            hydrationCount++;
          } else {
            newObj.emoji = '💧'
          }
        }
        hydrationArray.push(newObj)
      })
      setHydrationEmoji(hydrationArray)
      setHydrationWins(hydrationCount);
      // console.log('hydrationArray: ', hydrationArray)
      // console.log('test hydration :', hydrationEmoji)
      // console.log('hydration wins: ', hydrationWins)
    })
  }, [token])

    return (
        <div className="Dashboard">
            {!isLoggedIn ? (
                <h2><Link class="link-light" to='/login'>Login</Link></h2>
            ) : (
              // LOADING
                <>
            <h1>{name}'s Dashboard for the Week</h1>
            <div className='yourGoals'>
            <h2>Your Goals</h2>
            { isGoals ? (
            <>
            <ul className='goalsList'>
              {goalsData.fitness_time != 0 && (
                <li className='goalsLi'>Your exercise time goal is {goalsData.fitness_time} minutes per week. </li>
              )}
              {goalsData.fitness_frequency != 0 && (
                <li className='goalsLi'>Your exercise frequency goal is {goalsData.fitness_frequency} days per week. </li>
              )}
              {goalsData.sleep_time != 0 && (
                <li className='goalsLi'>Your nightly sleep goal is {goalsData.sleep_time} hours.</li>
              )}
              {goalsData.hydration_oz != 0 && (
                <li className='goalsLi'>Your daily water intake goal is {goalsData.hydration_oz} oz.</li>
              )}
            </ul>
            <button className='goalsLink' onClick={(e) => {window.location.href = "/profile"}}>Update my goals</button>
            </>
            ) : (
              <>
              <h4>You have not set any goals yet!</h4>
              <button className='goalsLink' onClick={(e) => {window.location.href = "/profile"}}>Set my goals!</button>
              </>
            )}
            </div>

        <Link to='/fitness/' className='pageLink'>
        <div className='fitnessdashboard'>
        <h2>Fitness</h2>
        <p>Key: ✅ indicates you reported exercise on this day while ❌ indicates you reported that you did not exercise this day.</p>
        <table className="dayTable">
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
        <DashboardRow 
            name='fitness' 
            results={fitnessEmoji}/>
      </table>
      <ul>
      { goalsData.fitness_time != 0 ? (
      <li className='compLi'>You are at {fitnessTime}/{goalsData.fitness_time} of your weekly goal for minutes of exercise!</li>) : (
        <></>
      )}
            { goalsData.fitness_frequency != 0 ? (
      <li className='compLi'>You are at {fitnessCount}/{goalsData.fitness_frequency} of your weekly goal for days of exercise!</li>) : (
        <></>
      )}
      </ul>
      </div>
      </Link>

      <Link to='/sleep/' className='pageLink'>
        <div className='sleepdashboard'>
      <h2>Sleep</h2>
      <table className='dayTable'>
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
          <DashboardRow 
            name='sleep' 
            results={sleepEmoji}/>
        </table>

        <ul>
        { goalsData.sleep_time != 0 ? (
        <>
      <p>Key: 🥱 indicates reported time asleep below your daily goal while 💤 indicates you met your goal for the day! </p>
      <li className="compLi"> You met your sleep goal {sleepWins} times this week.</li> 
      </>
      ) : (
        <p> Key: 💤 indicates you reported sleep this night! You have not set a sleep goal. </p>
      )}
      </ul>
      </div>
      </Link>

      <Link to='/hydration/' className='pageLink'>
        <div className='hydrationdashboard'>
      <h2>Hydration</h2>
        <table className="dayTable">
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
          <DashboardRow 
            name='hydration'  
            results={hydrationEmoji}/>
        </table>
      <ul>
      { goalsData.hydration_oz != 0 ? (
        <>
      <p>Key: 💧 indicates reported water intake below your daily goal while 💦 indicates you met your goal for the day! </p>
      <li className="compLi"> You met your hydration goal {hydrationWins} times this week.</li>
      </> ) : (
      <p>Key: 💦 indicates you reported water intake this day! You have not set a hydration goal.
      </p>
      ) }
      </ul>
      </div>
      </Link>

      <h4>Click on a category to see more!</h4>
      </> 
            )}
    </div>
  );
}