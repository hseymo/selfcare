import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import API from "../../../utils/API.js"
import DashboardRow from './card';

export default function Dashboard({ token, weekArray, isLoggedIn }) {
  const [user, setUser] = useState([])
  const [name, setName] = useState('')

  const [goalsData, setGoalsData] = useState({
    fitness_time: '',
    fitness_frequency: '',
    sleep_time: '',
    hydration_oz: '',
    mindfulness_frequency: ''
  })
  const [isGoals, setIsGoals] = useState(false)

  const [fitnessTime, setFitnessTime] = useState(0)
  const [fitnessCount, setFitnessCount] = useState(0)
  const [fitnessEmoji, setFitnessEmoji] = useState([])
  const [sleepEmoji, setSleepEmoji] = useState([])
  const [sleepWins, setSleepWins] = useState(0)
  const [hydrationEmoji, setHydrationEmoji] = useState([])
  const [hydrationWins, setHydrationWins] = useState(0)
  const [mindfulEmoji, setMindfulEmoji] = useState([])
  const [mindfulWins, setMindfulWins] = useState(0)

  useEffect(() => {
    // get all data for user 
    API.getOneUser(token)
      .then((userData) => {
        setName(userData.first_name);
        setUser(userData)
        // USERS GOALS_______________________________________________
        // set user goals from received user data
        const { fitness_time, fitness_frequency, sleep_time, hydration_oz, mindfulness_frequency } = userData.goal;
        setGoalsData({
          fitness_time,
          fitness_frequency,
          sleep_time,
          hydration_oz,
          mindfulness_frequency
        })
        if (fitness_time || fitness_frequency || sleep_time || hydration_oz || mindfulness_frequency) {
          setIsGoals(true)
        }
        // FITNESS LOGIC__________________________________________
        // create empty array and 0 variables
        const fitnessArray = [];
        let weeklyFitnessTime = 0;
        let weeklyFitnessCount = 0;
        // weekArray is imported from utils and is a M-Sun array of the current week's dates. map through the array 
        weekArray.map(entry => {
          // create a new object on each map iteration 
          let dateFormat = entry.slice(5) + "-" + entry.slice(0, 4);
          let newObj = { date: dateFormat }
          // look for matching response in the received user data's 'fitnesses' object
          var response = userData.fitnesses.find(data => data.date === entry);
          // if there is no fitness object with a matching date, set response status and give appropriate emojis
          if (response === undefined) {
            newObj.status = 'Not reported'
            newObj.emoji = '⁇'
            // else there is a fitness object with matching date. 
          } else {
            // set status as reported
            newObj.status = 'Reported'
            // if activity duration =0, user reported a rest day - give appropriate emoji
            if (response.activity_duration === 0) {
              newObj.emoji = '❌'
            } else {
              // else give check emoji as they did workout this day
              newObj.emoji = '✅'
              // add minutes to weekly fitness time total
              weeklyFitnessTime = weeklyFitnessTime + response.activity_duration;
              // add to workout count for the week
              weeklyFitnessCount++;
            }
          }
          // push each object from the map into our new array
          fitnessArray.push(newObj);
        })
        // add days to each object in our array
        fitnessArray[0].day = 'Monday';
        fitnessArray[1].day = 'Tuesday';
        fitnessArray[2].day = 'Wednesday';
        fitnessArray[3].day = 'Thursday';
        fitnessArray[4].day = 'Friday';
        fitnessArray[5].day = 'Saturday';
        fitnessArray[6].day = 'Sunday';
        // set our fitness emoji array with our newly created array
        setFitnessEmoji(fitnessArray)
        // set our weekly fitness time and weekly fitness count variables with our updated data
        setFitnessTime(weeklyFitnessTime)
        setFitnessCount(weeklyFitnessCount)


        // SLEEP LOGIC_______________________________________________
        // similar logic to fitness section. comparison to user goal is different and commented below.
        const sleepArray = [];
        let sleepCount = 0;
        weekArray.map(entry => {
          var response = userData.sleep.find(data => data.date === entry);
          let dateFormat = entry.slice(5) + "-" + entry.slice(0, 4);
          let newObj = { date: dateFormat }
          if (response === undefined) {
            newObj.status = 'Not reported';
            newObj.emoji = '⁇';
          } else {
            newObj.status = 'Reported';
            // compare time asleep to the user's goal for sleep time 
            if (response.time_asleep >= userData.goal.sleep_time) {
              newObj.emoji = '💤';
              sleepCount++;
            } else {
              newObj.emoji = '🥱';
            }
          }
          sleepArray.push(newObj)
        })
        sleepArray[0].day = 'Monday';
        sleepArray[1].day = 'Tuesday';
        sleepArray[2].day = 'Wednesday';
        sleepArray[3].day = 'Thursday';
        sleepArray[4].day = 'Friday';
        sleepArray[5].day = 'Saturday';
        sleepArray[6].day = 'Sunday';
        setSleepWins(sleepCount)
        setSleepEmoji(sleepArray)

        // HYDRATAION LOGIC__________________________________________
        // similar logic to fitness section. comparison to user goal is like sleep section.
        const hydrationArray = [];
        let hydrationCount = 0;
        weekArray.map(entry => {
          var response = userData.hydrations.find(data => data.date === entry);
          let dateFormat = entry.slice(5) + "-" + entry.slice(0, 4);
          let newObj = { date: dateFormat }
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
        hydrationArray[0].day = 'Monday';
        hydrationArray[1].day = 'Tuesday';
        hydrationArray[2].day = 'Wednesday';
        hydrationArray[3].day = 'Thursday';
        hydrationArray[4].day = 'Friday';
        hydrationArray[5].day = 'Saturday';
        hydrationArray[6].day = 'Sunday';
        setHydrationEmoji(hydrationArray)
        setHydrationWins(hydrationCount);


        // MINDFULNESS LOGIC__________________________________________
        // similar logic to fitness section. 
        const mindfulArray = [];
        let mindfulCount = 0;
        weekArray.map(entry => {
          var response = userData.mindfulnesses.find(data => data.date === entry);
          let dateFormat = entry.slice(5) + "-" + entry.slice(0, 4);
          let newObj = { date: dateFormat }
          if (response === undefined) {
            newObj.status = 'Not reported'
            newObj.emoji = '😐'
          } else {
            newObj.status = 'Reported';
            newObj.emoji = '🧘'
            mindfulCount++;
          }
          mindfulArray.push(newObj)
        })
        mindfulArray[0].day = 'Monday';
        mindfulArray[1].day = 'Tuesday';
        mindfulArray[2].day = 'Wednesday';
        mindfulArray[3].day = 'Thursday';
        mindfulArray[4].day = 'Friday';
        mindfulArray[5].day = 'Saturday';
        mindfulArray[6].day = 'Sunday';
        setMindfulEmoji(mindfulArray)
        setMindfulWins(mindfulCount);
      })
      .catch((err) => console.log(err))

  }, [token])

  return (
    <div className="Dashboard">
      {/* if not logged in, show message directing them to log in. */}
      {!isLoggedIn ? (
        <h2><Link className="pageLink" to='/login'>Click here to login</Link></h2>
      ) : (
        // LOADING??
        <>
          <h1>{name}'s Dashboard for the Week</h1>
          <div className='yourGoals'>
            <h2>Your Goals</h2>
            {/* if goals exist */}
            {isGoals ? (
              <>
                <ul className='goalsList'>
                  {/* display each goal if it does not equal 0 */}
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
                  {goalsData.mindfulness_frequency != 0 && (
                    <li className='goalsLi'>Your mindfulness frequency goal is {goalsData.mindfulness_frequency} days per week. </li>
                  )}
                </ul>
                <button className='goalsLink' onClick={(e) => { window.location.href = "/profile" }}>Update my goals</button>
              </>
            ) : (
              <>
                <h4>You have not set any goals yet!</h4>
                <button className='goalsLink' onClick={(e) => { window.location.href = "/profile" }}>Set my goals!</button>
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
                  {fitnessEmoji.map((result) =>
                    <th>{result.day} <br /> {result.date}</th>)}
                </tr>
                <DashboardRow
                  name='fitness'
                  results={fitnessEmoji} />
              </table>
              <ul>
                {/* if there is a goal for fitness time, show this comparison */}
                {goalsData.fitness_time != 0 ? (
                  <li className='compLi'>You are at {fitnessTime}/{goalsData.fitness_time} of your weekly goal for minutes of exercise!</li>) : (
                  <></>
                )}
                {/* if there is a goal for fitness frequency, show this comparison */}
                {goalsData.fitness_frequency != 0 ? (
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
                <thead>
                  <tr className="dayHeaders">
                    <th></th>
                    {sleepEmoji.map((result) =>
                      <th>{result.day} <br /> {result.date}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <DashboardRow
                    name='sleep'
                    results={sleepEmoji} />
                </tbody>
              </table>

              <ul>
                {/* if there is a goal for sleep time, show this version of the key as well as this comparision. */}
                {goalsData.sleep_time != 0 ? (
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
                <thead>
                  <tr className="dayHeaders">
                    <th></th>
                    {hydrationEmoji.map((result) =>
                      <th>{result.day} <br /> {result.date}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <DashboardRow
                    name='hydration'
                    results={hydrationEmoji} />
                </tbody>
              </table>
              <ul>
                {/* if there is a goal for hydration, show this version of the key and comparison statement */}
                {goalsData.hydration_oz != 0 ? (
                  <>
                    <p>Key: 💧 indicates reported water intake below your daily goal while 💦 indicates you met your goal for the day! </p>
                    <li className="compLi"> You met your hydration goal {hydrationWins} times this week.</li>
                  </>) : (
                  <p>Key: 💦 indicates you reported water intake this day! You have not set a hydration goal.
                  </p>
                )}
              </ul>
            </div>
          </Link>

          <Link to='/mindfulness/' className='pageLink'>
            <div className='mindfulnessdashboard'>
              <h2>Mindfulness</h2>
              <p>Key: 🧘 indicates you have a mindfulness entry for this day while 😐 indicates you do not have a mindfulness entry this day! </p>
              <table className="dayTable">
                <thead>
                  <tr className="dayHeaders">
                    <th></th>
                    {mindfulEmoji.map((result) =>
                      <th>{result.day} <br /> {result.date}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <DashboardRow
                    name='mindful'
                    results={mindfulEmoji} />
                </tbody>
              </table>
              <ul>
                {/* if there is a goal set for mindfulness, show this comparison statement */}
                {goalsData.mindfulness_frequency != 0 ? (
                  <li className='compLi'>You are at {mindfulWins}/{goalsData.mindfulness_frequency} of your weekly goal for days of mindfulness practice!</li>) : (
                  <></>
                )}
              </ul>
            </div>
          </Link>

          <h4>Click on a category to see more!</h4>
        </>
      )}
    </div>
  );
}