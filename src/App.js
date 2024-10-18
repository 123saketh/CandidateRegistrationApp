import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './Navbar';
import Home from './Home';
import CandidateList from './CandidateList';
import CandidateRegistration from './CandidateRegistration';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CandidateList />} path="/candidate/list" />
          <Route
            element={<CandidateRegistration />}
            path="/candidate/registration"
          />
        </Routes>
      </Router>
    </div>
  );
}
