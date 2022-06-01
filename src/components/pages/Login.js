import React from 'react';

export default function SignUpLogIn() {
    const [email, setEmail] = useState('');
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'signUpemail') {
          setEmail(inputValue);
        } else if (inputType === 'signUpfirst_name') {
            setFirst_Name(inputValue);
        } else if (inputType === 'signUpLast_name') {
            setLast_Name(inputValue);
        } else {
          setPassword(inputValue);
        }
      };

    return (
        <div>
            <h1>Login or Sign Up</h1>
                <form className="signUp" onClick={handleFormSubmit}>
                <input
                value={signUpemail}
                name="signUpemail"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                />
                <input
                value={signUpfirst_name}
                name="signUpfirst_name"
                onChange={handleInputChange}
                type="text"
                placeholder="first name"
                />
                <input
                value={signUplast_name}
                name="signUplast_name"
                onChange={handleInputChange}
                type="text"
                placeholder="last name"
                />
                <input
                value={signUppassword}
                name="signUppassword"
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
        </div>
    );
}
