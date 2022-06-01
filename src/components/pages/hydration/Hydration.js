import React from 'react';
import './hydration.css';

export default function Hydration() {
    return (
        <div className="hydration">
            <h1>Hydration</h1>
            <nav className="hydrateWeek">
                <li>Saturday</li>
                <form className="waterForm"><br />
                    <label htmlFor="waterAmount">Input number of ounces drank today:</label><br />
                    <input type="text" id="waterAmount" name="userWater" /><br />
                    <input type="submit" value="Submit"></input>
                </form>
                <li>Sunday</li>
                <form className="waterForm"><br />
                    <label htmlFor="waterAmount">Input number of ounces drank today:</label><br />
                    <input type="text" id="waterAmount" name="userWater" /><br />
                    <input type="submit" value="Submit"></input>
                </form>
                <li>Monday</li>
                <form className="waterForm"><br />
                    <label htmlFor="waterAmount">Input number of ounces drank today:</label><br />
                    <input type="text" id="waterAmount" name="userWater" /><br />
                    <input type="submit" value="Submit"></input>
                </form>
                <li>Tuesday</li>
                <form className="waterForm"><br />
                    <label htmlFor="waterAmount">Input number of ounces drank today:</label><br />
                    <input type="text" id="waterAmount" name="userWater" /><br />
                    <input type="submit" value="Submit"></input>
                </form>
                <li>Wednesday</li>
                <form className="waterForm"><br />
                    <label htmlFor="waterAmount">Input number of ounces drank today:</label><br />
                    <input type="text" id="waterAmount" name="userWater" /><br />
                    <input type="submit" value="Submit"></input>
                </form>
                <li>Thursday</li>
                <form className="waterForm"><br />
                    <label htmlFor="waterAmount">Input number of ounces drank today:</label><br />
                    <input type="text" id="waterAmount" name="userWater" /><br />
                    <input type="submit" value="Submit"></input>
                </form>
                <li>Friday</li>
                <form className="waterForm"><br />
                    <label htmlFor="waterAmount">Input number of ounces drank today:</label><br />
                    <input type="text" id="waterAmount" name="userWater" /><br />
                    <input type="submit" value="Submit"></input>
                </form>
            </nav>
        </div>
    );
}
