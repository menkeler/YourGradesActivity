import React, { useState } from 'react';

function GradeForm({ addGrade }) {
  const [courseNo, setCourseNo] = useState("");
  const [courseName, setCourseName] = useState("");
  const [units, setUnits] = useState("");
  const [grade, setGrade] = useState("A+");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseNo && courseName && units && grade) {
      addGrade({ courseNo, courseName, units, grade });
      setCourseNo("");
      setCourseName("");
      setUnits("");
      setGrade("A+");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
            <label>Course No: </label>
            <input
            value={courseNo}
            onChange={(e) => setCourseNo(e.target.value)}
            type="text"
            />
        </div>
        <div className="form-group">
            <label>Course Name: </label>
            <input
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            type="text"
            />
        </div>
        <div className="form-group">
            <label>Units: </label>
            <input
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            type="number"
            />
        </div>
        <div class="form-check">
            <label>Grade: </label>
            {["A", "B+", "B", "C+", "C", "D", "F"].map((g) => (
            <div key={g} >
                <input
                class="form-check-input"
                type="radio"
                id={g}
                name="grade"
                value={g}
                checked={grade === g}
                onChange={(e) => setGrade(e.target.value)}
                />
                <label class="form-check-label" htmlFor={g}>{g}</label>
            </div>
            ))}
        </div>
      <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default GradeForm;