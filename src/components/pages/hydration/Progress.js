import React, { useState } from 'react'
import { SpringValue, AnimatedValue, Spring, useSpring, animated, config } from 'react-spring'
import useMeasure from 'react-use-measure'
import './progress.css'

export default function Progress(props) {
    // const [progress, setProgress] = useState({});
    // setProgress({
    //     goal: props.goal,
    //     amount: props.amount,
    // });

    // const anim = useSpring({ width: progress, config: config.slow });
    console.log(props)
    const [open, toggle] = useState(false);
    const [ref, {width}] = useMeasure(props.goal);
    const anima = useSpring({ ounces: open ? width : 0 })
    console.log()
    console.log(anima.width)
    return (
        <div id="container">
            <div ref={ref} id="main" onClick={() => toggle(!open)}>
                <animated.div id='fill' style={{
                    position: `absolute`,
                    top: 50,
                    left: 0,
                    width: `${props.amount}%`,
                    height: '100%',
                }} />
                <animated.div id='content'>
                    {anima.ounces.to(x=>x.toFixed(0))}
                </animated.div>
            </div>
        </div>
    )
}
