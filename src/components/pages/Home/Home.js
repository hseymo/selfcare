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
            <Card className="backgroundImage" key={item.id} style={{
                backgroundImage: `url(${item.url})`
            }}>
                <Card className="homePage">
                    <Card.Text>Welcome to your one stop shop for all things lifestyle!</Card.Text>
                    <Card.Text>Let us take care of you!</Card.Text>
                    <Card.Text>Check out our fitness, sleep and hydration trackers as well as our meditation hub.</Card.Text>
                    <Card.Text>Enjoy and love yourself!</Card.Text>
                    <Card.Text> 💛 Chris, Jaden, Kalif and Haley (your website creators)</Card.Text>
                    {/* dashboard redirect if logged in */}
                    <a className='enter' href='/login'>Enter</a>
                </Card>
            </Card>
        </>
    );
}

