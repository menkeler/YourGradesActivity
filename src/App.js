import React, { useState } from 'react';
import GradeForm from './components/GradeForm';
import GradesTable from './components/GradesTable';
import './App.css';


function App() {
  const [grades, setGrades] = useState([]);

  const addGrade = (grade) => {
    setGrades([...grades, grade]);
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
      <GradeForm addGrade={addGrade} />
      <GradesTable grades={grades} />
    </div>
  );
}

export default App;
