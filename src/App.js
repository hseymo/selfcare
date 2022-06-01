import React from "react";
import './App.css';
import './components/NavTabs';
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard';
import Fitness from './components/pages/Fitness';
import Sleep from './components/pages/Sleep';
import Hydration from './components/pages/hydration/Hydration';
import Mindfulness from './components/pages/Mindfulness';
import Header from './components/pages/Header';
import Login from './components/pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/fitness' element={<Fitness />} />
        <Route path='/sleep' element={<Sleep />} />
        <Route path='/hydration' element={<Hydration />} />
        <Route path='/mindfulness' element={<Mindfulness />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
