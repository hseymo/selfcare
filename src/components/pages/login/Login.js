import React, {useState} from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import { validateEmail, checkPassword } from '../../../utils/helpers';

export default function Login(props) {
const [signupData, setSignupData] = useState({
  email:'',
  first_name: '',
  last_name: '',
  password:''
})

const [loginData, setLoginData] = useState({
  email:'',
  password:''
})

const [error, setError] = useState('');

const loginSubmit = e=>{
  e.preventDefault();
  if (loginData.email == '' || loginData.password == '') {
    setError('Login failed; please try again.')
  } else {
  props.login(loginData);
  setLoginData({
      username:"",
      password:""
  })
  setError('')
  }
}

const signupSubmit = e=>{
  e.preventDefault();
  if (!signupData.email) {
    setError('Please enter valid email address.')
  } else if (!signupData.first_name) {
    setError('Please enter your first name.')
  } else if (signupData.password.length < 8) {
    setError('Please enter valid password of at least 8 characters.')
  } else {
  props.signup(signupData);
  setSignupData({
    email:'',
    first_name: '',
    last_name: '',
    password:''
  })
  setError('')
}
}

    return (
        <div className='loginPageBody'>
          {!props.isLoggedIn ? (
            <>
            <div className="signUpSection">
            <h1>Sign Up</h1>
                <form className="signup" onSubmit={signupSubmit}>
                <div className='formGroup'>
                <label forHtml="signupEmail">Email: </label>
                <input
                value={signupData.email}
                name="signupEmail"
                type="email"
                placeholder="email"
                onChange={(e) => setSignupData({...signupData,email:e.target.value})}
                />
                </div>
                <div className='formGroup'>
                <label forHtml="signupFirstName">First Name: </label>
                <input
                value={signupData.first_name}
                name="signupFirstName"
                type="text"
                placeholder="first name"
                onChange={(e) => setSignupData({...signupData,first_name:e.target.value})}
                />
                </div>
                <div className='formGroup'>
                <label forHtml="signupLastName">Last Name: </label>
                <input
                value={signupData.last_name}
                name="signupLastName"
                type="text"
                placeholder="last name"
                onChange={(e) => setSignupData({...signupData,last_name:e.target.value})}
                />
                </div>
                <div className='formGroup'>
                <label forHtml="signppPassword">Password: </label>
                <input
                value={signupData.password}
                name="signppPassword"
                type="password"
                placeholder="password"
                onChange={(e) => setSignupData({...signupData,password:e.target.value})}
                />
                </div>
                <button type="submit"                 className='submitbutton'>Submit</button>
                </form>
            </div>

            <div className="logInSection">
            <h1>Login</h1>
                <form className="login" onSubmit={loginSubmit}>
                <div className='formGroup'>
                <label forHtml="loginEmail">Email: </label>
                <input
                value={loginData.email}
                name="loginEmail"
                type="email"
                placeholder='email'
                onChange={(e) => setLoginData({...loginData,email:e.target.value})}
                />
                </div>
                <div className='formGroup'>
                <label forHtml="loginPassword">Password: </label>
                <input
                value={loginData.password}
                name="loginPassword"
                type="password"
                placeholder='password'
                onChange={(e) => setLoginData({...loginData,password:e.target.value})}
                />
                </div>
                <button className='loginbutton' type="submit">Submit</button>
                </form>
            </div>
            {props.errorMessage && (
        <div>
          <p className="error">{props.errorMessage}
           </p>
        </div>
      )}
          {error && (
        <div>
          <p className="error">{error}
           </p>
        </div>
      )}
            </>
          ) : (
            <h2>You are already logged in! Please visit your <Link class="link-light" to='/dashboard'>Dashboard</Link>.</h2>
          )}
        </div>
    );
}
