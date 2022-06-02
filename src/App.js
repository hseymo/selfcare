import React from "react";
import './App.css';
import './components/pages/header/NavTabs';
import Home from './components/pages/home/Home'
import Dashboard from './components/pages/dashboard/Dashboard';
import Fitness from './components/pages/fitness/Fitness';
import Sleep from './components/pages/sleep/Sleep';
import Hydration from './components/pages/hydration/Hydration';
import Mindfulness from './components/pages/mindfulness/Mindfulness';
import Header from './components/pages/header/Header';
import Login from './components/pages/login/Login';
import Profile from './components/pages/profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/fitness' element={<Fitness />} />
        <Route path='/sleep' element={<Sleep />} />
        <Route path='/hydration' element={<Hydration />} />
        <Route path='/mindfulness' element={<Mindfulness />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
