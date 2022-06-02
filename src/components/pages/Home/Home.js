import React, {useState, useEffect} from 'react';
import './index.css';
import API from "../../../utils/API.js"

export default function Home() {

    // testing route
    useEffect(() => {
        API.getAllUsers().then(userData=>{console.log(userData)})
    }, [])

    return (
        <div className="homePage">
            <h3>Welcome to your one stop shop for all things lifestyle!</h3>
            <h3>Let us take care of you!</h3>
            <h3>Check out our fitness, sleep and hydration trackers as well as our meditation hub.</h3>
            <h3>Enjoy and love yourself!</h3>
            <p> 💛 Chris, Jaden, Kalif and Haley (your website creators)</p>
{/* dashboard redirect if logged in */}
            <a className='enter' href='/login'>Enter</a>
        </div>
    );
}

