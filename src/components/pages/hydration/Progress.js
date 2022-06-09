import React, { useState } from 'react'
import { Spring, useSpring, animated, config } from 'react-spring'

export default function Progress(props) {
    const [progress, setProgress] = useState({});
    // setProgress({
    //     goal: props.goal,
    //     amount: props.amount,
    // });

    const anim = useSpring({ width: progress, config: config.slow });
    return (
        <>
        <h2>{props.amount}</h2>
        <Spring
        from={{ opacity: 0, width: 0 }}
        to={{ opacity: 1, width: `${props.amount}` }}
        // config={{ duration: 2000 }}
        >
            {anim => (
                <animated.div style={anim}>
                    
                </animated.div>
            )}
        </Spring>
        </>
    )
}
