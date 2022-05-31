import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    navStyle: {
        border: '2px solid black',
        width: 'fit-content',
        padding: '0px 10px',
    }
}

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <p>
                Wanna get fit? HERE'S HOW!
            </p>
            <div style={styles.navStyle}>
                {NavTabs({ })}
            </div>
        </div>
    );
}
