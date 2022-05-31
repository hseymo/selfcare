// import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    navStyle: {
        border: '2px solid black',
        width: 'fit-content',
        padding: '0px 10px',
    }
}

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <div style={styles.navStyle}>
                {NavTabs({ })}
            </div>
        </div>
    );
}

