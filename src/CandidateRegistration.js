import React, { useState, useEffect } from 'react';

export default function CandidateRegistration() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    skills: [],
    skill: '',
  });
  const [candidates, setCandidates] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    let localCandidates = JSON.parse(localStorage.getItem('candidates'));
    if (localCandidates) {
      setCandidates(localCandidates);
    }
  }, []);

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      skills: [],
      skill: '',
    });
    setStatusMessage('');
  };

  const handleAddSkill = () => {
    let currentSkill = form.skill;
    if(form.skills.some(s=>s===currentSkill)){
      return  setStatusMessage('Skill already added');
    }
    setForm({
      ...form,
      skill: '',
      skills: [...form.skills, currentSkill],
    });
  };

  const handleSubmit = () => {
    // validate email
    let sameEmail = candidates.filter((x) => x.email === form.email);
    if (sameEmail && sameEmail.length > 0) {
      setStatusMessage('Email is already used');
      return false;
    }
    // validate name
    if(!form.name){
      setStatusMessage('Please enter valid name');
      return false;
    }

    candidates.push(form);
    localStorage.setItem('candidates', JSON.stringify(candidates));
    setStatusMessage('Added successfully');

    //reset 
    setForm({
      name: '',
      email: '',
      skills: [],
      skill: '',
    });
    setTimeout(()=>{
      setStatusMessage('');
    },2000);
  };
  return (
    <div className="form">
      <h1>Candidate Registration</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => {
            setForm({
              ...form,
              name: e.target.value,
            });
          }}
        />

        <label>Email:</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />

        <div>
          <label>Skills :</label>
          <input
            type="text"
            value={form.skill}
            onChange={(e) => {
              setForm({
                ...form,
                skill: e.target.value,
              });
            }}
          />
          <button type="button" onClick={handleAddSkill}>
            Add Skill
          </button>
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={handleReset}>
          reset
        </button>
      </div>

      {statusMessage}
    </div>
  );
}
