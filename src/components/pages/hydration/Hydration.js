import React from 'react';
import './hydration.css';
export default function Hydration() {
    
    function handleSubmit(e) {
        e.preventDefault();
        var water_oz = document.getElementById("waterAmount").value
        var date = document.getElementById("waterDate").value
        console.log(date)
        console.log(water_oz)
    }
    return (
        <div className="hydration">
            <h1>Hydration</h1>
            <h2>GOAL:<div id="storedWater"></div></h2>
            <nav className="hydrateWeek">
                <form className="waterForm"><br />
                    <input type="date" id="waterDate"/><br />
                    <label htmlFor="waterAmount">Input number of ounces drank today:</label><br />
                    <input min="0" max="500" type="number" id="waterAmount" name="userWater" /><br />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </nav>
        </div>
    );
}
