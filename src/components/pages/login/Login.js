import React, {useState} from 'react';
import { checkPassword, validateEmail } from '../../../utils/helpers';
import "./login.css"

export default function SignUp() {
    const [signUpEmail, setEmail] = useState('');
    const [signUpFirstName, setFirstName] = useState('');
    const [signUpLastName, setLastName] = useState('');
    const [signUpPassword, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    const [logInEmail, setloginEmail] = useState('');
    const [logInPassword, setloginPassword] = useState('');

    // SIGN UP
    const handleSignUpInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'signUpEmail') {
          setEmail(inputValue);
        } else if (inputType === 'signUpFirstName') {
          setFirstName(inputValue);
        } else if (inputType === 'signUpLastName') {
          setLastName(inputValue);
        } else if (inputType === 'signUpPassword') {
          setPassword(inputValue);
        }
      };

      const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(signUpEmail)) {
          alert('Email is invalid');
          return;
        }
        if (!checkPassword(signUpPassword)) {
          alert(
            `Choose a more secure password for the account`
          );
          return;
        }
        alert(`Hello ${signUpFirstName}`);

        console.log('signup submitted')
    
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
      };

      // LOG IN
      const handleLogInInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'logInEmail') {
          setloginEmail(inputValue);
        } else if (inputType === 'logInPassword') {
          setloginPassword(inputValue);
        }
      };

      const handleLogInSubmit = (e) => {
        e.preventDefault();
        console.log('login submitted')
    
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
      };

    return (
        <div className='loginPageBody'>
            <div className="signUpSection">
            <h1>Sign Up</h1>
                <form className="signUp">
                <div className='formGroup'>
                <label forHtml="signUpEmail">Email: </label>
                <input
                value={signUpEmail}
                name="signUpEmail"
                onChange={handleSignUpInputChange}
                type="email"
                placeholder="email"
                />
                </div>
                <div className='formGroup'>
                <label forHtml="signUpFirstName">First Name: </label>
                <input
                value={signUpFirstName}
                name="signUpFirstName"
                onChange={handleSignUpInputChange}
                type="text"
                placeholder="first name"
                />
                </div>
                <div className='formGroup'>
                <label forHtml="signUpLastName">Last Name: </label>
                <input
                value={signUpLastName}
                name="signUpLastName"
                onChange={handleSignUpInputChange}
                type="text"
                placeholder="last name"
                />
                </div>
                <div className='formGroup'>
                <label forHtml="signUpPassword">Password: </label>
                <input
                value={signUpPassword}
                name="signUpPassword"
                onChange={handleSignUpInputChange}
                type="password"
                placeholder="password"
                />
                </div>
                <button type="button" onClick={handleSignUpSubmit}>Submit</button>
                </form>
            </div>
            <div className="logInSection">
            <h1>Login</h1>
                <form className="logIn">
                <div className='formGroup'>
                <label forHtml="logInEmail">Email: </label>
                <input
                value={logInEmail}
                name="logInEmail"
                onChange={handleLogInInputChange}
                type="email"
                placeholder='email'
                />
                </div>
                <div className='formGroup'>
                <label forHtml="logInPassword">Password: </label>
                <input
                value={logInPassword}
                name="logInPassword"
                onChange={handleLogInInputChange}
                type="password"
                placeholder='password'
                />
                </div>
                <button type="button"  onClick={handleLogInSubmit}>Submit</button>
                </form>
            </div>
            
        </div>
    );
}
