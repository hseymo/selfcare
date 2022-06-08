import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { CardHeader } from 'react-bootstrap/esm/CardHeader';
import { useTransition, animated, config } from 'react-spring';
import { useInterval } from 'usehooks-ts'
import 'bootstrap/dist/css/bootstrap.min.css';


import './home.css';

const slides = [
    'https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg',
    'https://images.unsplash.com/photo-1558674378-e4334d4fecc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
]

export default function Home({isLoggedIn}) {

    const [index, set] = useState(0)
    const item = slides[index]
    // const increment = () => set(state => (state + 1) % slides.length)
    // useInterval(increment, 2000)
    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0, transform: 'scale(1.02)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.99)' },
        config: config.molasses ,
        onRest: (_a, _b, item) => {
            if (index === item) {
                set(state => (state + 1) % slides.length)
            }
        },
        exitBeforeEnter: true,
    })
    // useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
    return (
        <div>      
            {transitions((style, i) => (
                <animated.div
                    className="backgroundImage"
                    style={{
                        ...style, backgroundImage: `url(${slides[i]})`

                    }} >
                    <div className="container">
                    </div>
                </animated.div>
            ))}
            <div className="container">
                <h3>Welcome to your one stop shop for all things lifestyle!</h3>
                <h3>Let us take care of you!</h3>
                <h3>Check out our fitness, sleep and hydration trackers as well as our meditation hub.</h3>
                <h3>Enjoy and love yourself!</h3>
                <p> 💛 Chris, Jaden, Kalif and Haley (your website creators)</p>
            {!isLoggedIn ? (
                <button className='enter' onClick={(e) => {window.location.href = "/login"}}>Login</button>
            ) : (
                <button className='enter' onClick={(e) => {window.location.href = "/dashboard"}}>Dashboard</button>
            )}
            </div>
        </div>
    );
}