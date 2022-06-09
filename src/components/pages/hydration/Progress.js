import React, { useState } from 'react'
import { Spring, useSpring, animated, config } from 'react-spring'

export default function Progress(props) {
    const [progress, setProgress] = useState({});
    // setProgress(totalProg);
    const anim = useSpring({ width: progress, config: config.slow });
    return (
        <>
        <Spring
        from={{ opacity: 0, width: 0 }}
        to={{ opacity: 1, width: `${props.amount}` }}
        config={{ duration: 2000 }}
        >
            {anim => (
                <animated.div style={anim}>
                    <h2>{props.amount.water_oz}</h2>
                </animated.div>
            )}
        </Spring>
        </>
    )
}
