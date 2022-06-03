import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useTransition, animated } from 'react-spring';
import { useInterval } from 'usehooks-ts'


import './home.css';

const slides = [
    {
        id: 1,
        url: 'https://wallpaperaccess.com/full/31121.jpg'
    },
    {
        id: 2,
        url: 'https://images4.alphacoders.com/855/85556.jpg'
    },
    {
        id: 3,
        url: 'https://wallpaperboat.com/wp-content/uploads/2020/07/13/50145/tokyo-02.jpg'
    }
]

export default function Home() {

    const [index, set] = useState(0)
    const item = slides[index]
    const increment = () => set(state => (state + 1) % slides.length)
    useInterval(increment, 2000)

    return (
        <>
            <div
                className="backgroundImage"
                key={item.id}
                style={{
                    backgroundImage: `url(${item.url})`
                }}>
                    <div className="homePage">
                        <h3>Welcome to your one stop shop for all things lifestyle!</h3>
                        <h3>Let us take care of you!</h3>
                        <h3>Check out our fitness, sleep and hydration trackers as well as our meditation hub.</h3>
                        <h3>Enjoy and love yourself!</h3>
                        <p> 💛 Chris, Jaden, Kalif and Haley (your website creators)</p>
                        {/* dashboard redirect if logged in */}
                        <a className='enter' href='/login'>Enter</a>
                    </div>
                    <Card>
                        <Card.Header>
                            This is a card
                        </Card.Header>
                        <Card.Body>
                            This is the body of the card
                        </Card.Body>
                    </Card>
            </div>
        </>
    );
}

