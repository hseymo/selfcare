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
    const [ref, {width}] = useMeasure();
    const anima = useSpring({ width: open ? width : 0 })

    return (
        <div className='container'>
            <div ref={ref} className='main' onClick={() => toggle(!open)}>
                <animated.div className='fill' style={{
                    position: `absolute`,
                    top: 50,
                    left: 0,
                    width: `${props.amount/props.goal}%`,
                    height: '100%',
                    background: 'hotpink',
                }} />
                <animated.div className='content'>
                    {anima.width.to(x=>x.toFixed())}
                </animated.div>
            </div>
        </div>
    )
}
