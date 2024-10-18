import React, { useState, useEffect } from 'react';

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [skill, setSkill] = useState('');
  const handleFilter = () => {
    console.log(skill);
    if (!skill || skill === '' || skill.trim() === '') {
      setFilteredCandidates(candidates);
      return;
    }
    let filtered = candidates.filter((x) => x.skills.some((s) => s === skill));
    if (filtered && filtered.length > 0) {
      setFilteredCandidates(filtered);
    } else {
      setFilteredCandidates([]);
    }
  };

  useEffect(() => {}, [skill]);

  useEffect(() => {
    let localCandidates = JSON.parse(localStorage.getItem('candidates'));
    if (localCandidates) {
      setCandidates(localCandidates);
      setFilteredCandidates(localCandidates);
    }
  }, []);

  return (
    <div style={{ margin: '10px' }}>
      <div>
        <label>Filter by skills:</label>
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button type="button" onClick={handleFilter}>
          Search by Skill
        </button>
      </div>
      <label>Total Count : {candidates.length}</label>
      {filteredCandidates.map((c, index) => (
        <div style={{ margin: '2px' }} key={index}>
          <div>
            Name:<span>{c.name}</span>
          </div>
          <div>
            Email:<span>{c.email}</span>
          </div>
          <div>
            Skills :
            {c.skills.map((skill, j) => {
              return (
                <div style={{ marginLeft: '20px', marginTop: '2px' }} key={j}>
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
