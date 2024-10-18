import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <button className={'button'} onClick={() => navigate('/candidate/list')}>
        List
      </button>
      <button
        className={'button'}
        onClick={() => navigate('/candidate/registration')}
      >
        Registration
      </button>
    </>
  );
}
