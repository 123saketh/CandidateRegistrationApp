import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import './style.css';

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <h1>Custom layout</h1>
      <nav>
        {location.pathname === '/' && (
          <>
            <Link className={'button'} to="/candidate/list">
              Candidate List
            </Link>
            <Link className={'button'} to="/candidate/registration">
              Candidate Registration
            </Link>
          </>
        )}
        {location.pathname === '/candidate/list' && (
          <>
            <Link className={'button'} to="/">
              Home
            </Link>
            <Link className={'button'} to="/candidate/registration">
              Candidate Registration
            </Link>
          </>
        )}
        {location.pathname === '/candidate/registration' && (
          <>
            <Link className={'button'} to="/">
              Home
            </Link>
            <Link className={'button'} to="/candidate/list">
              Candidate List
            </Link>
          </>
        )}
      </nav>
    </>
  );
}
