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
    // const [open, toggle] = useState(false);
    
    console.log(props.goal)
    console.log(props.amount)
    const [ref, {width}] = useMeasure();
    const anima = useSpring({ width: (props.amount/props.goal)*width || 0 })
    // console.log()
    // console.log(anima.width)
    return (
        <div className="contained">
            <div ref={ref} className="main">
                <animated.div className='fill' style={anima}/>
                <animated.div className='content'>
                    {anima.width.to(x=>props.amount)}
                </animated.div>
            </div>
        </div>
    )
}
