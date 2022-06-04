import React, {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/pages/header/NavTabs';
import Home from './components/pages/home/Home'
import Dashboard from './components/pages/dashboard/Dashboard';
import Sleep from './components/pages/sleep/Sleep';
import Hydration from './components/pages/hydration/Hydration';
import Mindfulness from './components/pages/mindfulness/Mindfulness';
import Header from './components/pages/header/Header';
import Login from './components/pages/login/Login';
import Profile from './components/pages/profile/profile'
import API from "./utils/API";
import Exercise from './components/pages/exercise/Exercise';
import 'bootstrap/dist/css/bootstrap.min.css';
import weekArray from "./utils/weekdates";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  // const [sleepData, setSleepData] = useState()

  useEffect(()=>{
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  useEffect(()=> {
    if(token) {
      API.verify(token).then(userData => {
        if (userData.userId){
          setIsLoggedIn(true);
          setUserId(userData.userId)
        } else {
          setIsLoggedIn(false);
          setUserId(null)
        }
      })
    } else {
      setIsLoggedIn(false);
      setUserId(null)
    }
  }, [token])

  const handleLoginSubmit = (loginData) => {
    API.login(loginData).then(data => {
      if (data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard"
      }
    })
  }

  const handleSignupSubmit = (signupData) => {
    API.signup(signupData).then(data => {
      if (data.token) {
        setToken(data.token)
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard"
      }
    })
  }

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  }

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} userId={userId} logout={logout} />
      <Routes>
        <Route 
          path='/' 
          element={<Home />} />
        <Route 
          path='/login' 
          element={<Login 
            signup={handleSignupSubmit} 
            login={handleLoginSubmit} />} />
        <Route 
          path='/dashboard' 
          element={<Dashboard 
            userId={userId} 
            token={token} 
            weekArray={weekArray} 
            />} />
        <Route 
          path='/profile' 
          element={<Profile 
            userId={userId} 
            token={token}/>} />
        <Route 
          path='/fitness' 
          element={<Exercise 
            userId={userId} 
            token={token}/>} />
        <Route 
          path='/sleep' 
          element={<Sleep 
            userId={userId} 
            token={token} />} />
        <Route 
          path='/hydration' 
          element={<Hydration 
            userId={userId} 
            token={token}/>} />
        <Route 
          path='/mindfulness' 
          element={<Mindfulness 
            userId={userId} 
            token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
