import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { CardHeader } from 'react-bootstrap/esm/CardHeader';
import { useTransition, animated, config } from 'react-spring';
import { useInterval } from 'usehooks-ts'
import 'bootstrap/dist/css/bootstrap.min.css';


import './home.css';

const slides = [
    'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg',
    'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7353021/pexels-photo-7353021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

export default function Home() {

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
        <>
                    
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
                        {/* dashboard redirect if logged in */}
                        <a className='enter' href='/login'>Enter</a>
                    </div>

            {/* <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h3>Welcome to your one stop shop for all things lifestyle!</h3>
                        </Card.Title>

                        This is the body of the card
                    </Card.Body>
                </Card>
            </Container> */}
        </>
    );
}