import React, { useState } from 'react';

export default function Sleep() {

    const [sleepDate, setSleepDate] = useState('');
    const [timeAsleep, setTimeAsleep] = useState('');
    const [diffFallingAsleep, setDiffFallingAsleep] = useState('');
    const [diffStayingAsleep, setDiffStayingAsleep] = useState('');
    const [moodAwake, setMoodAwake] = useState('');

    const handleSleepInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'sleepDate') {
            setSleepDate(inputValue);
        } else if (inputType === 'timeAsleep') {
            setTimeAsleep(inputValue);
        } else if (inputType === 'diffFallingAsleep') {
            setDiffFallingAsleep(inputValue);
        } else if (inputType === 'diffStayingAsleep') {
            setDiffStayingAsleep(inputValue);
        } else if (inputType === 'moodAwake') {
            setMoodAwake(inputValue);
        }
    };

        const handleSleepSubmit = (e) => {
            e.preventDefault();
    
            console.log('sleep data submitted')
        
            setSleepDate('');
            setTimeAsleep('');
            setDiffFallingAsleep('');
            setDiffStayingAsleep('');
            setMoodAwake('');
          };
    

    return (
        <div>
            <h1>Sleep Page</h1>
            <p>
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
            <div>
                <form className='form-horizontal'>
                    <h4>Date of sleep</h4>
                    <input
                        value={sleepDate}
                        name="sleepDate"
                        onChange={handleSleepInputChange}
                        placeholder="Yesterday"
                    />
                    <h4>How long did you sleep?</h4>
                    <input
                        value={timeAsleep}
                        name="timeAsleep"
                        onChange={handleSleepInputChange}
                        placeholder="8 hours"
                    />
                    <h4>Did you have difficulty falling asleep?</h4>
                    <input
                        value={diffFallingAsleep}
                        name="diffFallingAsleep"
                        onChange={handleSleepInputChange}
                        placeholder="No"
                    />
                    <h4>Did you have difficulty staying asleep?</h4>
                    <input
                        value={diffStayingAsleep}
                        name="diffStayingAsleep"
                        onChange={handleSleepInputChange}
                        placeholder="No"
                    />
                    <h4>How did you feel when you woke up?</h4>
                    <input
                        value={moodAwake}
                        name="moodAwake"
                        onChange={handleSleepInputChange}
                        placeholder="Rested"
                    />
                    <button type="button"  onClick={handleSleepSubmit}>Submit</button>

                </form>
            </div>
        </div>
    );
}
