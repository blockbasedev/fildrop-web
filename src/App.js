import React from 'react'
import {
    BrowserRouter as Router, Routes, Route,
  } from 'react-router-dom';
import Home from './pages/Home';
import Publicprofile from './pages/Publicprofile';
import Sharedata from './pages/Sharedata';

function App() {
    return (
        <div className="app">
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/sharedata" element={<Sharedata/>} />
              <Route path="/publicprofile" element={<Publicprofile/>} />
            </Routes>
        </Router>
        </div>
  )
}

export default App