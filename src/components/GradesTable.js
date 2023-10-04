import React, { useState } from 'react';

function GradesTable({ grades }) {
  const [search, setSearch] = useState("");

  const filteredGrades = grades.filter(grade =>
    grade.courseNo.toLowerCase().includes(search.toLowerCase()) ||
    grade.courseName.toLowerCase().includes(search.toLowerCase()) ||
    grade.units.toLowerCase().includes(search.toLowerCase()) ||
    grade.grade.toLowerCase().includes(search.toLowerCase())
  );


  const gradeToPoint = grade => {
    switch (grade) {
      case "A": return 4.0;
      case "B+": return 3.5;
      case "B": return 3.0;
      case "C+": return 2.5;
      case "C": return 2.0;
      case "D": return 1.0;
      case "F": return 0;      
      default: return 0; 
    }
  }
  const totalWeightedPoints = grades.reduce((total, grade) => total + gradeToPoint(grade.grade) * grade.units, 0);
  const totalUnits = grades.reduce((total, grade) => total + parseFloat(grade.units), 0);

  const GWA = totalUnits !== 0 ? totalWeightedPoints / totalUnits : 0;


  return (
    <div>
      <input
        type="text"
        placeholder="Search grades..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table class="table">
        <thead>
          <tr>
            <th>Course No</th>
            <th>Course Name</th>
            <th>Units</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.courseNo}</td>
              <td>{grade.courseName}</td>
              <td>{grade.units}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" style={{textAlign: "right"}}>Total</td>
            <td style={{textAlign: "right"}}>{GWA.toFixed(2)}</td>
         </tr>
        
        </tbody>
      </table>
    </div>
  );
}

export default GradesTable;
