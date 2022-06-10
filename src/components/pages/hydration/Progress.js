import React from 'react'
import { Spring, useSpring, animated, config } from 'react-spring'
import useMeasure from 'react-use-measure';
import './progress.css'

export default function Progress(props) {
// if goal exists, display percentage; otherwise show second block
    const doMath = (water) => {
        if (props.goal != 0) {
            let percentage = (water / props.goal) * 100;
            let fixedPercentage = percentage.toFixed(0)
            return fixedPercentage + '% of daily goal'
        } else {
            return `${props.amount} oz  - no goal set`
        }
    }

    const [ref, { height }] = useMeasure();

    const anima = useSpring({ height: (props.amount / props.goal) * height || 0 })
    return (
        <div className="contained">
            <div ref={ref} className="main">
                <animated.div className='fill' style={anima} />
                <animated.div className='content'>
                    {anima.height.to(x => doMath(props.amount))}
                </animated.div>
            </div>
        </div>
    )
}
