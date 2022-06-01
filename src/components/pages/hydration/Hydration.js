import React from 'react';
import './hydration.css';

const styles = {
    water: {
        background: 'linear-gradient(#373080,#B4ADFF)',
    }
}

export default function Hydration() {
    return (
        <div style={styles.water}>
            <h1>Hydration Page</h1>
            <ul className="hydrateWeek">
                <card>Saturday</card>
                <br/>
                <card>Sunday</card>
                <br/>
                <card>Monday</card>
                <br/>
                <card>Tuesday</card>
                <br/>
                <card>Wednesday</card>
                <br/>
                <card>Thursday</card>
                <br/>
                <card>Friday</card>
            </ul>
        </div>
    );
}
