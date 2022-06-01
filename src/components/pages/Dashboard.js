import React, { useEffect, useState } from 'react';
import NavTabs from '../NavTabs';
// import API from '../../utils/API';

const styles = {
    navStyle: {
        border: '2px solid black',
        width: 'fit-content',
        padding: '0px 10px',
    }
}

export default function Dashboard() {
    const [result, setResult] = useState()
    useEffect(()=>{
        fetch("http://localhost:3001/api/sleep").then((res)=>res.json()).then((data)=>{setResult(data[1].mood_upon_wake)})
    },[])
    return (
        <div>
            <h1>Dashboard Page</h1>
            <p>
                {result?result:''}
            </p>
            <div style={styles.navStyle}>
                {NavTabs({ })}
            </div>
        </div>
    );
}
