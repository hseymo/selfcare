import React, { useEffect, useState } from 'react';
// import API from '../../utils/API';

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
        </div>
    );
}
