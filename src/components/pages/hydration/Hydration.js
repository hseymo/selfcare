import React, { useEffect } from 'react';
import './hydration.css';
export default function Hydration() {
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(document.getElementById("waterAmount").value)
    }
    function handleGoal(e) {
        e.preventDefault();
        console.log(document.getElementById("waterGoal").value)
        const waterGoal = document.getElementById("waterGoal").value
        localStorage.setItem("watergoal", JSON.stringify())
    }
    useEffect(()=>{
        var goal = []
        goal = JSON.parse(localStorage.getItem("watergoal"));
        const storedWater = document.getElementById("#storedWater");
        if (goal!==null){
            storedWater.push(goal)
        }
    })
    return (
        <div className="hydration">
            <h1>Hydration</h1>
            <h2>GOAL:<card id="storedWater"></card></h2>
            <nav className="hydrateWeek">
                <form className="waterForm"><br />
                    <input type="date" /><br />
                    <label htmlFor="waterAmount">Input number of ounces drank today:</label><br />
                    <input min="0" max="500" type="number" id="waterAmount" name="userWater" /><br />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </nav>
            <nav>
                <h2>GOAL:
                    <form>
                        <input min="0" max="500" type='number' id="waterGoal" name="goalWater" />
                        <button type="submit" onClick={handleGoal}>Submit</button>
                        <button type="reset">Reset</button>
                    </form>
                </h2>
            </nav>
        </div>
    );
}
