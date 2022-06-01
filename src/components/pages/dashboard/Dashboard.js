import React, { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
// import API from '../../utils/API';

export default function Dashboard() {
    // const [result, setResult] = useState()
    // useEffect(()=>{
    //     fetch("http://localhost:3001/api/sleep").then((res)=>res.json()).then((data)=>{setResult(data[1].mood_upon_wake)})
    // },[])

    const checkmark = '✅';
    const redX= '❌';
    const questionmark = '⁇'
    const onewater = '💧';
    const threewater = '💦';

    return (
        <div className="Dashboard">
            <h1>Your Dashboard for the Week</h1>
            <h2>Click on a category to see more!</h2>
            <p>
                {/* {result?result:''} */}
            </p>
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